import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from '../users/users.component';
import { LoginSingupComponent } from './login-singup.component';
@NgModule({
  imports: [
      RouterModule.forChild([
          {
              path: 'Login_signup',
              component: LoginSingupComponent,
              // children: [
              //      {path: 'Login_signup', component: LoginSingupComponent},
              //     // {path: 'Serch', component: LoginSingupComponent},
              //     // {path: 'City', component: LoginSingupComponent},
              //     // {path: 'Help', component: LoginSingupComponent}
              //  ]
          }
      ])
  ],
  exports: [
      RouterModule
  ]
})
export class LoginsingupsRoutingModule { }
