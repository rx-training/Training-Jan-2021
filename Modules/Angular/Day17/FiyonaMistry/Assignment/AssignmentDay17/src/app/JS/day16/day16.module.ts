import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day16RoutingModule } from './day16-routing.module';
import { Day16Component } from './day16/day16.component';


@NgModule({
  declarations: [
    Day16Component
  ],
  imports: [
    CommonModule,
    Day16RoutingModule
  ]
})
export class Day16Module { }
