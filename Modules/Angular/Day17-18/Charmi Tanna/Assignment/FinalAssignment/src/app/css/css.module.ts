import { CSSComponent } from './css.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CSSRoutingModule } from './css-routing.module';
import { AssignmentComponent } from './Day4/Assignment/assignment/assignment.component';
import { Practice1Component } from './Day4/Practice/practice1/practice1.component';
import { Practice2Component } from './Day4/Practice/practice2/practice2.component';
import { Practice3Component } from './Day4/Practice/practice3/practice3.component';
import { Practice4Component } from './Day4/Practice/practice4/practice4.component';
import { Practice5Component } from './Day4/Practice/practice5/practice5.component';
import { Assignment1Component } from './Day8/Assignment/assignment1/assignment1.component';
import { Assignment2Component } from './Day8/Assignment/assignment2/assignment2.component';
import { Day5Practice1Component } from './Day5/Practice/day5-practice1/day5-practice1.component';
import { Day5Practice2Component } from './Day5/Practice/day5-practice2/day5-practice2.component';
import { Day5Practice3Component } from './Day5/Practice/day5-practice3/day5-practice3.component';
import { Day5Practice4Component } from './Day5/Practice/day5-practice4/day5-practice4.component';
import { Day5AssignmentComponent } from './Day5/Assignment/day5-assignment/day5-assignment.component';
import { Day6AssignmentComponent } from './Day6/Assignment/day6-assignment/day6-assignment.component';
import { Day6Practice5Component } from './Day6/Practice/day6-practice5/day6-practice5.component';
import { Day6Practice6Component } from './Day6/Practice/day6-practice6/day6-practice6.component';
import { Day6Practice7Component } from './Day6/Practice/day6-practice7/day6-practice7.component';
import { Day7Practice1Component } from './Day7/Practice/day7-practice1/day7-practice1.component';
import { Day7Practice2Component } from './Day7/Practice/day7-practice2/day7-practice2.component';
import { Day7Practice3Component } from './Day7/Practice/day7-practice3/day7-practice3.component';
import { Day7Practice4Component } from './Day7/Practice/day7-practice4/day7-practice4.component';
import { Day7AssignmentComponent } from './Day7/Assignment/day7-assignment/day7-assignment.component';


@NgModule({
  declarations: [
    CSSComponent,
    AssignmentComponent,
    Practice1Component,
    Practice2Component,
    Practice3Component,
    Practice4Component,
    Practice5Component,
    Assignment1Component,
    Assignment2Component,
    Day5Practice1Component,
    Day5Practice2Component,
    Day5Practice3Component,
    Day5Practice4Component,
    Day5AssignmentComponent,
    Day6AssignmentComponent,
    Day6Practice5Component,
    Day6Practice6Component,
    Day6Practice7Component,
    Day7Practice1Component,
    Day7Practice2Component,
    Day7Practice3Component,
    Day7Practice4Component,
    Day7AssignmentComponent
  ],
  imports: [
    CommonModule,
    CSSRoutingModule
  ]
})
export class CSSModule { }
