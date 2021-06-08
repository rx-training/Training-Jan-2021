import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTMLRoutingModule } from './html-routing.module';
import { HTMLComponent } from '../html/html.component';
import { AssignmentComponent } from './Day3/Assignment/assignment/assignment.component';
import { PracticeComponent } from './Day3/Practice/practice/practice.component';
import { Practice2Component } from './Day3/Practice/practice2/practice2.component';
import { Practice3Component } from './Day3/Practice/practice3/practice3.component';
import { Practice4Component } from './Day3/Practice/practice4/practice4.component';
import { Practice5Component } from './Day3/Practice/practice5/practice5.component';


@NgModule({
  declarations: [
    HTMLComponent,
    AssignmentComponent,
    PracticeComponent,
    Practice2Component,
    Practice3Component,
    Practice4Component,
    Practice5Component
  ],
  imports: [
    CommonModule,
    HTMLRoutingModule
  ]
})
export class HTMLModule { }
