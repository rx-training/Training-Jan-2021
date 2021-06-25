import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent} from './.././carts/carts.component';

import {FormsModule} from '@angular/forms';


import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ]
})
export class CartModule { }
