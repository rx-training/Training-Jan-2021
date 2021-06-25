import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
 

const routes: Routes = [
   { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: "user",
    loadChildren: () =>
      import("./users/user.module").then((m) => m.UserModule), // Lazy load account module
    data: { preload: true },
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin-penal/admin.module").then((m) => m.AdminModule), // Lazy load admin module
    data: { preload: true },
  },
  // {
  //      path : 'user', component : UsersComponent
  //    }
  // {
  //   path: "login",
  //   loadChildren: () =>
  //     import("./login-singup/loginsingups.module").then((m) => m.LoginsingupsModule), // Lazy load loginsingups module
  //   data: { preload: true },
  // }
  // {
  //   path : '**', component : UsersComponent, pathMatch :'full'
  // },
  // {
  //   path : 'Login', component : LoginSingupComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
