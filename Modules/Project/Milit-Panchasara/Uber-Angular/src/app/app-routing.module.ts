import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminGuard } from './admin/admin.guard';
import { AdminloginPasswordFormComponent } from './admin/adminlogin-password-form/adminlogin-password-form.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { GuestGuard } from './riders/guest.guard';
import { LoginPasswordFormComponent } from './riders/login-password-form/login-password-form.component';
import { LoginComponent } from './riders/login/login.component';
import { RiderHomeComponent } from './riders/rider-home/rider-home.component';
import { SignupComponent } from './riders/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
import { DriverLoginComponent } from './drivers/driver-login/driver-login.component';
import { DriverLoginPasswordFormComponent } from './drivers/driver-login-password-form/driver-login-password-form.component';
import { DriverHomeComponent } from './drivers/driver-home/driver-home.component';
import { DriverGuard } from './drivers/driver.guard';
import { RiderGuard } from './riders/rider.guard';
import { DriverSignUpComponent } from './drivers/driver-sign-up/driver-sign-up.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'rider/signup', component: SignupComponent, canActivate: [GuestGuard]},
  {path:'driver/signup', component: DriverSignUpComponent, canActivate: [GuestGuard]},
  {path:'rider/login', component: LoginComponent, canActivate: [GuestGuard]},
  {path:'admin/login', component: AdminloginComponent, canActivate: [GuestGuard]},
  {path:'driver/login', component: DriverLoginComponent, canActivate: [GuestGuard]},
  {path:'rider/login-password', component: LoginPasswordFormComponent,  canActivate: [GuestGuard]},
  {path:'admin/login-password', component: AdminloginPasswordFormComponent,  canActivate: [GuestGuard]},
  {path:'driver/login-password', component: DriverLoginPasswordFormComponent,  canActivate: [GuestGuard]},
  {path:'rider', component:RiderHomeComponent, loadChildren: () => import('./riders/riders.module').then(m => m.RidersModule), canActivate:[AuthGuard, RiderGuard] },
  {path:'admin', component:AdminHomeComponent, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard, AdminGuard] },
  {path:'driver', component:DriverHomeComponent, loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule), canActivate:[AuthGuard, DriverGuard] },

  // {path:'**', redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
