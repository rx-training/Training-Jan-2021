import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddBrandsRoutingModule } from './add-brands-routing.module';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddBrandsRoutingModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class AddBrandsModule { }
