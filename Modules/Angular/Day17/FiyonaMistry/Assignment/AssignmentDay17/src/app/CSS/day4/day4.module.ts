import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day4RoutingModule } from './day4-routing.module';
import { Day4Component } from './day4/day4.component';


@NgModule({
  declarations: [
    Day4Component
  ],
  imports: [
    CommonModule,
    Day4RoutingModule
  ]
})
export class Day4Module { }
