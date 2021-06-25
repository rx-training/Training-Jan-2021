import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from 'src/app/services/auth.service';
import { RiderService } from 'src/app/riders/rider.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { DriversService } from '../drivers.service';

@Component({
  selector: 'app-driver-login-password-form',
  templateUrl: './driver-login-password-form.component.html',
  styleUrls: ['./driver-login-password-form.component.css']
})
export class DriverLoginPasswordFormComponent implements OnInit {

  contactNumber:number;
  passwordInput:string;
  isWrong:boolean = false;
  errorMessage:string = '';
  submitingForm:boolean = false;

  cryptoPassword = GlobalConstants.cryptoPassword;

  constructor(private authService: AuthService,private driverService:DriversService, private router:Router) {
    if(this.authService.loginContactNumber == null) {
      this.router.navigate(['/driver/login']);
    }
  }

  ngOnInit(): void {
    
    this.contactNumber = this.authService.loginContactNumber;
  }

  // sends request to api if password is given
  verifyPasswordAndRedirect() {
    this.submitingForm = true;
    this.authService.loginPassword = this.passwordInput;
    let loginDriverSub = this.authService.loginDriver()
    .subscribe(x => {

      // save user data and session data if response is received.
      this.isWrong = false;
      let encryptedUser = (CryptoJS.AES.encrypt(JSON.stringify(x), this.cryptoPassword)).toString();
      localStorage.setItem('user',encryptedUser);
      localStorage.setItem('session',CryptoJS.AES.encrypt((new Date()).toString(), this.cryptoPassword).toString());
      
      //call get profile api to get profile data
      let getProfileDataSub = this.driverService.getProfileData().subscribe(x => {
        this.driverService.setData(x);
        getProfileDataSub.unsubscribe();
      },
      error => {
        if(error.status == 0) {
          alert("Something went wrong!");
          this.router.navigate(['/']);
        }
        getProfileDataSub.unsubscribe();
      });
      this.submitingForm = false;
      this.router.navigate(['/driver/dashboard']);
      loginDriverSub.unsubscribe();
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

}
