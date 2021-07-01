import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kids999RoutingModule } from './kids999-routing.module';
import { Kids999Component } from './kids999.component';


@NgModule({
  declarations: [
    Kids999Component
  ],
  imports: [
    CommonModule,
    Kids999RoutingModule,
    FormsModule
  ]
})
export class Kids999Module { }
