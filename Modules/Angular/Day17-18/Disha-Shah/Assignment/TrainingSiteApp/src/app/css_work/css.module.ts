import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssComponent } from './css/css.component';
import { Day4PracticeComponent } from './day4-practice/day4-practice.component';
import { Day5PracticeComponent } from './day5-practice/day5-practice.component';
import { Day5Practice2Component } from './day5-practice2/day5-practice2.component';
import { Day6Practice1Component } from './day6-practice1/day6-practice1.component';
import { Day6Practice2Component } from './day6-practice2/day6-practice2.component';
import { Day6AssignmentComponent } from './day6-assignment/day6-assignment.component';
import { Day7PracticeComponent } from './day7-practice/day7-practice.component';
import { Day4assignmentResumeComponent } from './day4assignment-resume/day4assignment-resume.component';
import { Day4assignmentPortfolioComponent } from './day4assignment-portfolio/day4assignment-portfolio.component';
import { Day5assignmentLayoutComponent } from './day5assignment-layout/day5assignment-layout.component';
import { Day6assignmentLayoutComponent } from './day6assignment-layout/day6assignment-layout.component';
import { Day7assignmentLayoutComponent } from './day7assignment-layout/day7assignment-layout.component';
import { Day8assignmentLayout1Component } from './day8assignment-layout1/day8assignment-layout1.component';
import { Day8assignmentLayout2Component } from './day8assignment-layout2/day8assignment-layout2.component';

import { CssRoutingModule } from './css-routing.module';


@NgModule({
  declarations: [
    CssComponent,
    Day4PracticeComponent,
    Day5PracticeComponent,
    Day5Practice2Component,
    Day6Practice1Component,
    Day6Practice2Component,
    Day6AssignmentComponent,
    Day7PracticeComponent,
    Day4assignmentResumeComponent,
    Day4assignmentPortfolioComponent,
    Day5assignmentLayoutComponent,
    Day6assignmentLayoutComponent,
    Day7assignmentLayoutComponent,
    Day8assignmentLayout1Component,
    Day8assignmentLayout2Component
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
