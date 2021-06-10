import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { Day4practice1Component } from './day4practice1/day4practice1.component';
import { Day4practice2Component } from './day4practice2/day4practice2.component';
import { Day4practice3Component } from './day4practice3/day4practice3.component';
import { Day4practice4Component } from './day4practice4/day4practice4.component';
import { Day4practice5Component } from './day4practice5/day4practice5.component';
import { Day4assingmentComponent } from './day4assingment/day4assingment.component';
import { Day5practice1Component } from './day5practice1/day5practice1.component';
import { Day5practice2Component } from './day5practice2/day5practice2.component';
import { Day5practice3Component } from './day5practice3/day5practice3.component';
import { Day5assingmentComponent } from './day5assingment/day5assingment.component';
import { Day6practice1Component } from './day6practice1/day6practice1.component';
import { Day6practice2Component } from './day6practice2/day6practice2.component';
import { Day6practice3Component } from './day6practice3/day6practice3.component';
import { Day6assignmentComponent } from './day6assignment/day6assignment.component';
import { Day7assingmentComponent } from './day7assingment/day7assingment.component';
import { Day8assingment1Component } from './day8assingment1/day8assingment1.component';
import { Day8assingment2Component } from './day8assingment2/day8assingment2.component';


@NgModule({
  declarations: [
    Day4practice1Component,
    Day4practice2Component,
    Day4practice3Component,
    Day4practice4Component,
    Day4practice5Component,
    Day4assingmentComponent,
    Day5practice1Component,
    Day5practice2Component,
    Day5practice3Component,
    Day5assingmentComponent,
    Day6practice1Component,
    Day6practice2Component,
    Day6practice3Component,
    Day6assignmentComponent,
    Day7assingmentComponent,
    Day8assingment1Component,
    Day8assingment2Component
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
