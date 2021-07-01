import { Men999Component } from './../men999/men999.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mens999RoutingModule } from './mens999-routing.module';


@NgModule({
  declarations: [
    Men999Component
  ],
  imports: [
    CommonModule,
    Mens999RoutingModule,
    FormsModule
  ]
})
export class Mens999Module { }
