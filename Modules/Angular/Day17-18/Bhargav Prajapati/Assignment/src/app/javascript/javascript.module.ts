import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JAVASCRIPTRoutingModule } from './javascript-routing.module';
import {JAVASCRIPTComponent} from './javascript.component'
import { JavascriptHomeComponent } from './javascript-home/javascript-home.component';
import { Practice1Component } from './Day15/Practice/practice1/practice1.component';
import { Practice2Component } from './Day15/Practice/practice2/practice2.component';
import { AssignmentComponent } from './Day15/Assignment/assignment/assignment.component';
import { Day16Practice1Component } from './Day16/Practice/day16-practice1/day16-practice1.component';
import { Day16Practice2Component } from './Day16/Practice/day16-practice2/day16-practice2.component';
import { Day16Practice3Component } from './Day16/Practice/day16-practice3/day16-practice3.component';
import { Day16Practice4Component } from './Day16/Practice/day16-practice4/day16-practice4.component';
import { Day16Practice5Component } from './Day16/Practice/day16-practice5/day16-practice5.component';
import { Day17Practice1Component } from './Day17/Practice/day17-practice1/day17-practice1.component';
import { Day17Practice2Component } from './Day17/Practice/day17-practice2/day17-practice2.component';
import { Day17Practice3Component } from './Day17/Practice/day17-practice3/day17-practice3.component';
import { Day17Practice4Component } from './Day17/Practice/day17-practice4/day17-practice4.component';
import { Day18Practice1Component } from './Day18/Practice/day18-practice1/day18-practice1.component';
import { Day18Practice2Component } from './Day18/Practice/day18-practice2/day18-practice2.component';
import { Day18Practice3Component } from './Day18/Practice/day18-practice3/day18-practice3.component';
import { Day19Practice1Component } from './Day19/Practice/day19-practice1/day19-practice1.component';
import { Day19Practice2Component } from './Day19/Practice/day19-practice2/day19-practice2.component';
import { Day19Practice3Component } from './Day19/Practice/day19-practice3/day19-practice3.component';
import { Day19Practice4Component } from './Day19/Practice/day19-practice4/day19-practice4.component';
import { Day19Practice5Component } from './Day19/Practice/day19-practice5/day19-practice5.component';
import { Day20Practice2Component } from './Day20/Practice/day20-practice2/day20-practice2.component';
import { Day16assignmentComponent } from './Day16/Assignment/day16assignment/day16assignment.component';
import { Day17assignmentComponent } from './Day17/Assignment/day17assignment/day17assignment.component';
import { Day18assignmentComponent } from './Day18/Assignment/day18assignment/day18assignment.component';
import { Day20assignmentComponent } from './Day20/Assignment/day20assignment/day20assignment.component';




@NgModule({
  declarations: [
    JAVASCRIPTComponent,
    JavascriptHomeComponent,
    Practice1Component,
    Practice2Component,
    AssignmentComponent,
    Day16Practice1Component,
    Day16Practice2Component,
    Day16Practice3Component,
    Day16Practice4Component,
    Day16Practice5Component,
    Day17Practice1Component,
    Day17Practice2Component,
    Day17Practice3Component,
    Day17Practice4Component,
    Day18Practice1Component,
    Day18Practice2Component,
    Day18Practice3Component,
    Day19Practice1Component,
    Day19Practice2Component,
    Day19Practice3Component,
    Day19Practice4Component,
    Day19Practice5Component,
    Day20Practice2Component,
    Day16assignmentComponent,
    Day17assignmentComponent,
    Day18assignmentComponent,
    Day20assignmentComponent
  ],
  imports: [
    CommonModule,
    JAVASCRIPTRoutingModule
  ]
})
export class JAVASCRIPTModule { }
