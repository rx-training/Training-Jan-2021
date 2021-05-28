import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day18RoutingModule } from './day18-routing.module';
import { Day18Component } from './day18/day18.component';


@NgModule({
  declarations: [
    Day18Component
  ],
  imports: [
    CommonModule,
    Day18RoutingModule
  ]
})
export class Day18Module { }
