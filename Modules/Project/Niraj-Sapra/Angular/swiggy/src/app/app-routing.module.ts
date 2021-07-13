import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './users/orders/orders.component';

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
  {path: 'Order', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
