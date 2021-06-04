import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RidersRoutingModule } from './riders-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginPasswordFormComponent } from './login-password-form/login-password-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RiderHomeComponent } from './rider-home/rider-home.component';
import { RiderSourceComponent } from './rider-source/rider-source.component';
import { RiderDestinationComponent } from './rider-destination/rider-destination.component';
import { RiderSelectRideComponent } from './rider-select-ride/rider-select-ride.component';
import { RiderCurrentTripComponent } from './rider-current-trip/rider-current-trip.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RiderRatingComponent } from './rider-rating/rider-rating.component';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginPasswordFormComponent,
    RiderHomeComponent,
    RiderSourceComponent,
    RiderDestinationComponent,
    RiderSelectRideComponent,
    RiderCurrentTripComponent,
    RiderRatingComponent,
    RiderProfileComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RidersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ]
})
export class RidersModule { }
