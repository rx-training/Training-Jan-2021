import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlsRoutingModule } from './htmls-routing.module';
import { Day3Component } from './day3/day3.component';
import { HtmlComponent } from './html/html.component';


@NgModule({
  declarations: [
    Day3Component,
    HtmlComponent
  ],
  imports: [
    CommonModule,
    HtmlsRoutingModule 
  ]
})
export class HtmlsModule { }
