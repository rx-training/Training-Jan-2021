import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day17RoutingModule } from './day17-routing.module';
import { Day17Component } from './day17/day17.component';


@NgModule({
  declarations: [
    Day17Component
  ],
  imports: [
    CommonModule,
    Day17RoutingModule
  ]
})
export class Day17Module { }
