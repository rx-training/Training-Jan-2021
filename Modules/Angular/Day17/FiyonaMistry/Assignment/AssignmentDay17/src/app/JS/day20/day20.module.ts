import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day20RoutingModule } from './day20-routing.module';
import { Day20Component } from './day20/day20.component';


@NgModule({
  declarations: [
    Day20Component
  ],
  imports: [
    CommonModule,
    Day20RoutingModule
  ]
})
export class Day20Module { }
