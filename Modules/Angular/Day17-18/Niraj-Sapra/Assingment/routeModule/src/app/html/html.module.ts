import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { Practical1Component } from './practical1/practical1.component';
import { Practical2Component } from './practical2/practical2.component';
import { Practical3Component } from './practical3/practical3.component';
import { Practical4Component } from './practical4/practical4.component';
import { Practical5Component } from './practical5/practical5.component';
import { DayassignmentComponent } from './dayassignment/dayassignment.component';
import { HtmlComponent } from './html.component';


@NgModule({
  declarations: [
    HtmlComponent,
    Practical1Component,
    Practical2Component,
    Practical3Component,
    Practical4Component,
    Practical5Component,
    DayassignmentComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
