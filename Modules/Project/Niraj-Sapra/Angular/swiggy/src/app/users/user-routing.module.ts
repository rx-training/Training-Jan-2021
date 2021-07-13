import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSingupComponent } from '../login-singup/login-singup.component';
import { UsersComponent } from './users.component';
import { RestarantsallComponent } from './restarantsall/restarantsall.component';
import { ProductsallComponent } from './productsall/productsall.component';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [
    {  
                path: 'user',
                component: UsersComponent,
                children: [
                     {path: 'Login_signup', component: LoginSingupComponent},
                     {path: 'Product/:id', component: ProductsallComponent},                   
                     {path: '', component: RestarantsallComponent}]
    }  
  ];
  
    
  
  @NgModule({
  
    imports: [RouterModule.forRoot(routes)],
  
    exports: [RouterModule]
  
  })
export class UserRoutingModule {
    
 }
