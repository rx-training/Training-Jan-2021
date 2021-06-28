import { SalesComponent } from './../sales/sales.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleRoutingModule } from './sale-routing.module';


@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
