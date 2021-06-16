import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin-password-form',
  templateUrl: './adminlogin-password-form.component.html',
  styleUrls: ['./adminlogin-password-form.component.css']
})
export class AdminloginPasswordFormComponent implements OnInit {

  contactNumber:number;
  passwordInput:string;
  isWrong:boolean = false;

  cryptoPassword = GlobalConstants.cryptoPassword;

  constructor(private authService: AuthService,private adminService:AdminService, private router:Router) {
    if(this.authService.loginContactNumber == null) {
      this.router.navigate(['/admin/login']);
    }
  }

  ngOnInit(): void {
    this.contactNumber = this.authService.loginContactNumber;
  }

  verifyPasswordAndRedirect() {
    this.authService.loginPassword = this.passwordInput;
    this.authService.loginAdmin()
    .subscribe(x => {
      console.log(x);
      
      this.isWrong = false;
      let encryptedUser = (CryptoJS.AES.encrypt(JSON.stringify(x), this.cryptoPassword)).toString();
      localStorage.setItem('user',encryptedUser);
      localStorage.setItem('session',CryptoJS.AES.encrypt((new Date()).toString(), this.cryptoPassword).toString());
      
      this.router.navigate(['/admin']);
    },
    error => {
      console.log(error);
      if(error.status == 500) {
        this.isWrong= true;
      }
      
    });
  }

}
