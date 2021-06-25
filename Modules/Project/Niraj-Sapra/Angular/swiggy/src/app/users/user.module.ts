import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
//import { RestorentComponent } from './restaurant/restaurant.component';
import { UsersComponent } from './users.component';
//import { RestorentdataService } from './restaurant/restaurantdata.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestarantsallComponent } from './restarantsall/restarantsall.component';
import { ProductsallComponent } from './productsall/productsall.component';


@NgModule({
  declarations: [
  //  RestorentComponent,
    UsersComponent,
  RestarantsallComponent,
  ProductsallComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RestarantsallComponent,
    ProductsallComponent,
    UsersComponent
  ],
  providers: [HttpClientModule]//,RestorentdataService]
})
export class UserModule { }
