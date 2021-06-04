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

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'rider/signup', component: SignupComponent, canActivate: [GuestGuard]},
  {path:'rider/login', component: LoginComponent, canActivate: [GuestGuard]},
  {path:'admin/login', component: AdminloginComponent, canActivate: [GuestGuard]},
  {path:'rider/login-password', component: LoginPasswordFormComponent,  canActivate: [GuestGuard]},
  {path:'admin/login-password', component: AdminloginPasswordFormComponent,  canActivate: [GuestGuard]},
  {path:'rider', component:RiderHomeComponent, loadChildren: () => import('./riders/riders.module').then(m => m.RidersModule) },
  {path:'admin', component:AdminHomeComponent, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard, AdminGuard] },

  {path:'**', redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
