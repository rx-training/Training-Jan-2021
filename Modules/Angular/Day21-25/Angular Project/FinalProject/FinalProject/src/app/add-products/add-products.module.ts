import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductsRoutingModule } from './add-products-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddProductsRoutingModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class AddProductsModule { }
