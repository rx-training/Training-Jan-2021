import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../services/auth.guard';
import { GuestGuard } from './guest.guard';
import { LoginPasswordFormComponent } from './login-password-form/login-password-form.component';
import { LoginComponent } from './login/login.component';
import { RiderCurrentTripComponent } from './rider-current-trip/rider-current-trip.component';
import { RiderDestinationComponent } from './rider-destination/rider-destination.component';
import { RiderHomeComponent } from './rider-home/rider-home.component';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { RiderRatingComponent } from './rider-rating/rider-rating.component';
import { RiderSelectRideComponent } from './rider-select-ride/rider-select-ride.component';
import { RiderSourceComponent } from './rider-source/rider-source.component';
import { RiderGuard } from './rider.guard';
import { RiderTripListComponent } from './rider-trip-list/rider-trip-list.component';

const routes: Routes = [
  // {path: '' , component: },

  {path:'login', component: LoginComponent, canActivate: [GuestGuard]},
  {path:'login-password', component: LoginPasswordFormComponent,  canActivate: [GuestGuard]},

  {path:'dashboard', component: RiderSourceComponent, canActivate: [AuthGuard, RiderGuard]},
  {path:'choose-destination', component: RiderDestinationComponent, canActivate:[AuthGuard, RiderGuard]},
  {path:'choose-ride', component: RiderSelectRideComponent, canActivate:[AuthGuard, RiderGuard]},
  {path:'current-trip', component: RiderCurrentTripComponent, canActivate:[AuthGuard, RiderGuard]},
  {path:'trip-rating', component: RiderRatingComponent, canActivate:[AuthGuard, RiderGuard]},
  {path:'profile', component: RiderProfileComponent, canActivate:[AuthGuard, RiderGuard]},
  {path:'trips', component: RiderTripListComponent, canActivate:[AuthGuard, RiderGuard]},

  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidersRoutingModule { }
