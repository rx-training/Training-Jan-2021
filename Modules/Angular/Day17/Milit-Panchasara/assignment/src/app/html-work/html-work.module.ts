import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlWorkRoutingModule } from './html-work-routing.module';
import { Assignment1Component } from './day3/assignment1/assignment1.component';
import { Practice1Component } from './day3/practice1/practice1.component';
import { Practice2Component } from './day3/practice2/practice2.component';
import { HtmlComponent } from './html/html.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    HtmlComponent,
    Assignment1Component,
    Practice1Component,
    Practice2Component,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    HtmlWorkRoutingModule
  ]
})
export class HtmlWorkModule { }
