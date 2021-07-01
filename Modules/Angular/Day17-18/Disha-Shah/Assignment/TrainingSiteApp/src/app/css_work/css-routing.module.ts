import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { Day4PracticeComponent } from './day4-practice/day4-practice.component';
import { Day4assignmentPortfolioComponent } from './day4assignment-portfolio/day4assignment-portfolio.component';
import { Day4assignmentResumeComponent } from './day4assignment-resume/day4assignment-resume.component';
import { Day5PracticeComponent } from './day5-practice/day5-practice.component';
import { Day5Practice2Component } from './day5-practice2/day5-practice2.component';
import { Day5assignmentLayoutComponent } from './day5assignment-layout/day5assignment-layout.component';
import { Day6AssignmentComponent } from './day6-assignment/day6-assignment.component';
import { Day6Practice1Component } from './day6-practice1/day6-practice1.component';
import { Day6Practice2Component } from './day6-practice2/day6-practice2.component';
import { Day6assignmentLayoutComponent } from './day6assignment-layout/day6assignment-layout.component';
import { Day7PracticeComponent } from './day7-practice/day7-practice.component';
import { Day7assignmentLayoutComponent } from './day7assignment-layout/day7assignment-layout.component';
import { Day8assignmentLayout1Component } from './day8assignment-layout1/day8assignment-layout1.component';
import { Day8assignmentLayout2Component } from './day8assignment-layout2/day8assignment-layout2.component';

const cssRoutes: Routes = [
  
  { path: '', component: CssComponent, children: [
    {
      path: 'day4practice', 
      component: Day4PracticeComponent
    },
    {
      path: 'day4assignmentresume',
      component: Day4assignmentResumeComponent
    },
    {
      path: 'day4assignmentportfolio',
      component: Day4assignmentPortfolioComponent
    },
    { 
      path: 'day5practice', 
      component: Day5PracticeComponent
    },
    { 
      path: 'day5practice2', 
      component: Day5Practice2Component
    },
    {
      path: 'day5assignmentlayout',
      component: Day5assignmentLayoutComponent
    },
    { 
      path: 'day6practice1', 
      component: Day6Practice1Component
    },
    { 
      path: 'day6practice2', 
      component: Day6Practice2Component
    },
    { 
      path: 'day6assignment', 
      component: Day6AssignmentComponent
    },
    {
      path: 'day6assignmentlayout',
      component: Day6assignmentLayoutComponent
    },
    { 
      path: 'day7practice', 
      component: Day7PracticeComponent
    },
    {
      path: 'day7assignmentlayout',
      component: Day7assignmentLayoutComponent
    },
    {
      path: 'day8assignmentlayout1',
      component: Day8assignmentLayout1Component
    },
    {
      path: 'day8assignmentlayout2',
      component: Day8assignmentLayout2Component
    }
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(cssRoutes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
