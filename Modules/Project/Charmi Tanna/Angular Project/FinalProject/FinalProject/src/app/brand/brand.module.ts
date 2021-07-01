import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandsComponent } from '../brands/brands.component';


@NgModule({
  declarations: [
    BrandsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrandRoutingModule
  ]
})
export class BrandModule { }
