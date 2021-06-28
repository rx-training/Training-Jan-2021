import { FormsModule } from '@angular/forms';
import { Women999Component } from './../women999/women999.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Womens999RoutingModule } from './womens999-routing.module';


@NgModule({
  declarations: [
    Women999Component
  ],
  imports: [
    CommonModule,
    Womens999RoutingModule,
    FormsModule
  ]
})
export class Womens999Module { }
