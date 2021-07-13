import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSingupComponent } from '../login-singup/login-singup.component';
import { UsersComponent } from './users.component';
import { RestarantsallComponent } from './restarantsall/restarantsall.component';


// const routes: Routes = [
//   {path:'login',component:LoginSingupComponent}  

// ];
  // {path:'login',component:LoginSingupComponent}
  @NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'user',
                component: UsersComponent,
                children: [
                     {path: 'Login_signup', component: LoginSingupComponent},
                     {path: '', component: RestarantsallComponent}
                    // {path: 'City', component: LoginSingupComponent},
                    // {path: 'Help', component: LoginSingupComponent}
                 ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
