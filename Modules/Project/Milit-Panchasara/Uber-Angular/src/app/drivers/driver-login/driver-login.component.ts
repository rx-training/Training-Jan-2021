import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

  contactNumber:number=null;
  isWrong:boolean = false;
  cryptoPassword = GlobalConstants.cryptoPassword;
  
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // stores number and redirects to password page
  passNumber() {
    if(this.contactNumber != null && this.contactNumber.toString().length != 10) {
      this.isWrong = true;
      return;
    }
    this.isWrong = false;
    this.authService.loginContactNumber = this.contactNumber;
    // this.contactNumberOutput.emit(this.contactNumber.toString() );
    this.router.navigate(['/driver/login-password']);
  }
}
