import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestarantsallComponent } from './restarantsall/restarantsall.component';
import { ProductsallComponent } from './productsall/productsall.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { OrdersComponent } from './orders/orders.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    UsersComponent,
  RestarantsallComponent,
  ProductsallComponent,
  ChekoutComponent,
  OrdersComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    RestarantsallComponent,
    ProductsallComponent,
    UsersComponent
  ],
  providers: [HttpClientModule]//,RestorentdataService]
})
export class UserModule { }