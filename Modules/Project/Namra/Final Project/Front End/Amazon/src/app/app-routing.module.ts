import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Index/Home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './user/cart/cart.component';
import { OrderComponent } from './user/order/order.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : 'Login', component : LoginComponent
  },
  {
    path : '', component : HomeComponent, pathMatch : 'full'
  },
  {
    path : 'Home', component : HomeComponent
  },
  {
    path : 'Product/:id', component : ProductComponent
  },
  {
    path : 'User', component : UserComponent
  }, 
  {
    path : 'Cart', component : CartComponent
  },
  {
    path : 'Orders', component : OrderComponent
  },
  {
    path : '**', component : PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
