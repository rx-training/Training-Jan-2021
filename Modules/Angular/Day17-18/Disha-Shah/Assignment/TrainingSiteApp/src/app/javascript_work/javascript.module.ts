import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptComponent } from './javascript/javascript.component';

import { Day15Practice1Component } from './day15-practice1/day15-practice1.component';
import { Day15Practice2Component } from './day15-practice2/day15-practice2.component';
import { Day15Practice3Component } from './day15-practice3/day15-practice3.component';
import { Day15AssignmentComponent } from './day15-assignment/day15-assignment.component';
import { Day16ArrayComponent } from './day16-array/day16-array.component';
import { Day16DateComponent } from './day16-date/day16-date.component';
import { Day16StringComponent } from './day16-string/day16-string.component';
import { Day16PracticeComponent } from './day16-practice/day16-practice.component';
import { Day16AssignmentComponent } from './day16-assignment/day16-assignment.component';
import { Day17AssignmentComponent } from './day17-assignment/day17-assignment.component';
import { Day17Practice1Component } from './day17-practice1/day17-practice1.component';
import { Day17Practice2Component } from './day17-practice2/day17-practice2.component';
import { Day18Practice1Component } from './day18-practice1/day18-practice1.component';
import { Day18Practice2Component } from './day18-practice2/day18-practice2.component';
import { Day18Practice3Component } from './day18-practice3/day18-practice3.component';
import { Day18AssignmentComponent } from './day18-assignment/day18-assignment.component';
import { Day19Practice1Component } from './day19-practice1/day19-practice1.component';
import { Day19Practice2Component } from './day19-practice2/day19-practice2.component';
import { Day20PracticeComponent } from './day20-practice/day20-practice.component';
import { Day20AssignmentComponent } from './day20-assignment/day20-assignment.component';
import { Day18AssignmentExamComponent } from './day18-assignment-exam/day18-assignment-exam.component';
import { Day18AssignmentFinishExamComponent } from './day18-assignment-finish-exam/day18-assignment-finish-exam.component';

import { JavascriptRoutingModule } from './javascript-routing.module';


@NgModule({
  declarations: [
    JavascriptComponent,
    Day15Practice1Component,
    Day15Practice2Component,
    Day15Practice3Component,
    Day15AssignmentComponent,
    Day16ArrayComponent,
    Day16DateComponent,
    Day16StringComponent,
    Day16PracticeComponent,
    Day16AssignmentComponent,
    Day17AssignmentComponent,
    Day17Practice1Component,
    Day17Practice2Component,
    Day18Practice1Component,
    Day18Practice2Component,
    Day18Practice3Component,
    Day18AssignmentComponent,
    Day19Practice1Component,
    Day19Practice2Component,
    Day20PracticeComponent,
    Day20AssignmentComponent,
    Day18AssignmentExamComponent,
    Day18AssignmentFinishExamComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
