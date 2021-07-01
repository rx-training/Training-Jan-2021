import { JavascriptComponent } from './javascript.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';

import { Day16assignmentComponent } from './Day16/Assignment/day16assignment/day16assignment.component';
import { Day16Practice1Component } from './Day16/Practice/day16-practice1/day16-practice1.component';
import { Day16Practice2Component } from './Day16/Practice/day16-practice2/day16-practice2.component';
import { Day16Practice3Component } from './Day16/Practice/day16-practice3/day16-practice3.component';
import { Day16Practice4Component } from './Day16/Practice/day16-practice4/day16-practice4.component';
import { Day16Practice5Component } from './Day16/Practice/day16-practice5/day16-practice5.component';
import { Day17AssignmentComponent } from './Day17/Assignment/day17-assignment/day17-assignment.component';

import { Day17Practice7Component } from './Day17/Practice/day17-practice7/day17-practice7.component';
import { Day17Practice8Component } from './Day17/Practice/day17-practice8/day17-practice8.component';
import { Day17Practice9Component } from './Day17/Practice/day17-practice9/day17-practice9.component';
import { Day18AssignmentComponent } from './Day18/Assignment/day18-assignment/day18-assignment.component';
import { Day18Practice1Component } from './Day18/Practice/day18-practice1/day18-practice1.component';
import { Day18Practice2Component } from './Day18/Practice/day18-practice2/day18-practice2.component';
import { Day18Practice3Component } from './Day18/Practice/day18-practice3/day18-practice3.component';
import { Day19Practice1Component } from './Day19/Practice/day19-practice1/day19-practice1.component';
import { Day19Practice2Component } from './Day19/Practice/day19-practice2/day19-practice2.component';
import { Day19Practice3Component } from './Day19/Practice/day19-practice3/day19-practice3.component';
import { Day19Practice4Component } from './Day19/Practice/day19-practice4/day19-practice4.component';
import { Day19Practice5Component } from './Day19/Practice/day19-practice5/day19-practice5.component';
import { Day19Practice6Component } from './Day19/Practice/day19-practice6/day19-practice6.component';
import { Day20AssignmentComponent } from './Day20/Assignment/day20-assignment/day20-assignment.component';
import { Day20PracticeComponent } from './Day20/Practice/day20-practice/day20-practice.component';
import { Day15Practice1Component } from './Day15/Practice/day15-practice1/day15-practice1.component';
import { Day15Practice2Component } from './Day15/Practice/day15-practice2/day15-practice2.component';
import { Day15assignmentComponent } from './Day15/Assignment/day15assignment/day15assignment.component';


@NgModule({
  declarations: [
    JavascriptComponent,
    Day16assignmentComponent,
    Day16Practice1Component,
    Day16Practice2Component,
    Day16Practice3Component,
    Day16Practice4Component,
    Day16Practice5Component,
    Day17AssignmentComponent,
    Day17Practice7Component,
    Day17Practice8Component,
    Day17Practice9Component,
    Day18AssignmentComponent,
    Day18Practice1Component,
    Day18Practice2Component,
    Day18Practice3Component,
    Day19Practice1Component,
    Day19Practice2Component,
    Day19Practice3Component,
    Day19Practice4Component,
    Day19Practice5Component,
    Day19Practice6Component,
    Day20AssignmentComponent,
    Day20PracticeComponent,
    Day15Practice1Component,
    Day15Practice2Component,
    Day15assignmentComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
