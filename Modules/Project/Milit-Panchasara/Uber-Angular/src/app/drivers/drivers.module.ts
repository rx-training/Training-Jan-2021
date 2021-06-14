import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { DriverLoginPasswordFormComponent } from './driver-login-password-form/driver-login-password-form.component';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { DriverCurrentTripComponent } from './driver-current-trip/driver-current-trip.component';
import { DriverSignUpComponent } from './driver-sign-up/driver-sign-up.component';


@NgModule({
  declarations: [
    DriverLoginComponent,
    DriverLoginPasswordFormComponent,
    DriverHomeComponent,
    DriverDashboardComponent,
    DriverCurrentTripComponent,
    DriverSignUpComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ]
})
export class DriversModule { }
