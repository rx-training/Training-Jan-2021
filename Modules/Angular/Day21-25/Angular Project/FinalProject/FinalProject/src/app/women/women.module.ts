import { CartService } from './../cart.service';
import { ProductsService } from './../products.service';
import { WomenComponent } from './women.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenRoutingModule } from './women-routing.module';
import { CartList } from '../CartList';
import { ProductList } from '../ProductList';

@NgModule({
  declarations: [
    WomenComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule,
    FormsModule
  ]
})
export class WomenModule {
  
}



 
