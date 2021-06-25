import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalConstants } from 'src/app/common/global-constants';
import { DriversService } from '../drivers.service';
import * as CryptoJS from 'crypto-js';
import { TripService } from 'src/app/services/trip.service';
import { RideTypeInterface } from 'src/app/models/RideType';

@Component({
  selector: 'app-driver-sign-up',
  templateUrl: './driver-sign-up.component.html',
  styleUrls: ['./driver-sign-up.component.css']
})
export class DriverSignUpComponent implements OnInit {

  signUpForm:FormGroup;
  submitingForm:boolean = false;
  rideTypes:RideTypeInterface[] = [];

  constructor(private fb:FormBuilder, private router:Router, private driverService:DriversService, private tripService:TripService, private authService:AuthService) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
      surName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
      contactNumber: ['',  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)])],
      rideTypeId:[null, Validators.required],
      vehicleBrand:['', Validators.required],
      vehicleName:['', Validators.required],
      registrationNo:['',Validators.required],
      vehicleType:['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.tripService.getRideTypes().subscribe(x => {
      this.rideTypes = x;
    })
  }

  submitForm() {
    this.submitingForm = true;
    console.log(this.signUpForm);

    let registerDriverSub = this.authService.registerDriver(this.signUpForm.value)
    .subscribe(x => {
      // save retured user data and start session.
      let encryptedUser = (CryptoJS.AES.encrypt(JSON.stringify(x), GlobalConstants.cryptoPassword)).toString();
      localStorage.setItem('user',encryptedUser);
      localStorage.setItem('session',CryptoJS.AES.encrypt((new Date()).toString(), GlobalConstants.cryptoPassword).toString());
      
      let getProfileDataSub = this.driverService.getProfileData().subscribe(x => {
        this.driverService.setData(x);
        getProfileDataSub.unsubscribe();
      },
      error => {
        if(error.status == 0) {
          this.router.navigate(['/']);
        }
        getProfileDataSub.unsubscribe();
      });
      this.submitingForm = false;
      this.router.navigate(['/driver/dashboard']);
      registerDriverSub.unsubscribe();
    },
    error => {
      alert("Something went wrong!");
      this.submitingForm = false;
      registerDriverSub.unsubscribe();
    });
  }
}
