import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day15RoutingModule } from './day15-routing.module';
import { Day15Component } from './day15/day15.component';


@NgModule({
  declarations: [
    Day15Component
  ],
  imports: [
    CommonModule,
    Day15RoutingModule
  ]
})
export class Day15Module { }
