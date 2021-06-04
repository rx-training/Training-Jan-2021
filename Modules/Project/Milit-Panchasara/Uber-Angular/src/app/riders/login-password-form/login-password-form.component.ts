import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';
import { GlobalConstants } from 'src/app/common/global-constants';
import { RiderService } from '../rider.service';

@Component({
  selector: 'app-login-password-form',
  templateUrl: './login-password-form.component.html',
  styleUrls: ['./login-password-form.component.css']
})
export class LoginPasswordFormComponent implements OnInit {
  contactNumber:number;
  passwordInput:string;
  isWrong:boolean = false;
  errorMessage:string = '';
  submitingForm:boolean = false;

  cryptoPassword = GlobalConstants.cryptoPassword;

  constructor(private authService: AuthService,private riderService:RiderService, private router:Router) {
    if(this.authService.loginContactNumber == null) {
      this.router.navigate(['/rider/login']);
    }
  }

  ngOnInit(): void {
    
    this.contactNumber = this.authService.loginContactNumber;
  }

  verifyPasswordAndRedirect() {
    this.submitingForm = true;
    this.authService.loginPassword = this.passwordInput;
    this.authService.loginRider()
    .subscribe(x => {
      this.isWrong = false;
      let encryptedUser = (CryptoJS.AES.encrypt(JSON.stringify(x), this.cryptoPassword)).toString();
      localStorage.setItem('user',encryptedUser);
      localStorage.setItem('session',CryptoJS.AES.encrypt((new Date()).toString(), this.cryptoPassword).toString());
      
      this.riderService.getProfileData().subscribe(x => {
        this.riderService.setData(x);
      },
      error => {
        if(error.status == 0) {
          alert("Something went wrong!");
          this.router.navigate(['/']);
        }
      });
      this.submitingForm = false;
      this.router.navigate(['/rider/dashboard']);
    },
    error => {
      console.log(error);
      if(error.status == 500) {
        this.isWrong= true;
        this.errorMessage = error.error.message
      }
      this.submitingForm = false;
    });
  }

  sendVerificationMail() {
    // this.riderService
  }
}
