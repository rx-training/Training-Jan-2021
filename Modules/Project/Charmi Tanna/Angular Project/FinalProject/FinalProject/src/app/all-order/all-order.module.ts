
import { AllOrdersComponent } from './../all-orders/all-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandModule } from './../brand/brand.module';

import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule,HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AllOrderRoutingModule } from './all-order-routing.module';


@NgModule({
  declarations: [
    AllOrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AllOrderRoutingModule
  ]
})
export class AllOrderModule { }
