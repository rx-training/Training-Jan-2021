import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssesRoutingModule } from './csses-routing.module';
import { CssComponent } from './css/css.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { Day8Component } from './day8/day8.component';


@NgModule({
  declarations: [
    CssComponent,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component
  ],
  imports: [
    CommonModule,
    CssesRoutingModule
  ]
})
export class CssesModule { }
