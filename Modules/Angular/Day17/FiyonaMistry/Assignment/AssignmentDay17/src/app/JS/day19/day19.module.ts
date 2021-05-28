import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day19RoutingModule } from './day19-routing.module';
import { Day19Component } from './day19/day19.component';


@NgModule({
  declarations: [
    Day19Component
  ],
  imports: [
    CommonModule,
    Day19RoutingModule
  ]
})
export class Day19Module { }
