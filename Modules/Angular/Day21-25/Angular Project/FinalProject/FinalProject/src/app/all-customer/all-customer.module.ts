import { BrandModule } from './../brand/brand.module';
import { AllCustomersComponent } from './../all-customers/all-customers.component';
import { NgModule } from '@angular/core';
import { AllCustomerRoutingModule } from './all-customer-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule,HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
   AllCustomersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrandModule,
    AllCustomerRoutingModule
  ]
})
export class AllCustomerModule { }
