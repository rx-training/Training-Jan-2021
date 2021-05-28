import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLComponent } from './html/html.component';
import { HOMEComponent } from './home/home.component';
import { PracticArticaltegComponent } from './practic-articalteg/practic-articalteg.component';
import { Day3PracticHrDepartmentComponent } from './day3-practic-hr-department/day3-practic-hr-department.component';
import { Day3PracticNavBarComponent } from './day3-practic-nav-bar/day3-practic-nav-bar.component';
import { Day3PracticeStudentReportCardComponent } from './day3-practice-student-report-card/day3-practice-student-report-card.component';
import { Day3AssignmentComponent } from './day3-assignment/day3-assignment.component';
import { HTMLHOMEComponent } from './htmlhome/htmlhome.component';
import { Day4PracticeBorderwithperegraphComponent } from './day4-practice-borderwithperegraph/day4-practice-borderwithperegraph.component';
import { Day4DisplayPropery1Component } from './day4-display-propery1/day4-display-propery1.component';
import { Day4UseOfCssComponent } from './day4-use-of-css/day4-use-of-css.component';
import { Day4UnivarsalPropertyComponent } from './day4-univarsal-property/day4-univarsal-property.component';
import { Day4AssignmentComponent } from './day4-assignment/day4-assignment.component';
import { CSSComponent } from './css/css.component';
import { Day5PracticeFLoatPropertyComponent } from './day5-practice-float-property/day5-practice-float-property.component';
import { Day5PracticeBasicLayoutComponent } from './day5-practice-basic-layout/day5-practice-basic-layout.component';
import { Day5PracticeOverflowwithvisibleComponent } from './day5-practice-overflowwithvisible/day5-practice-overflowwithvisible.component';
import { Day5PracticeOverflowwithhiddenComponent } from './day5-practice-overflowwithhidden/day5-practice-overflowwithhidden.component';
import { Day5PracticePositionPropertyComponent } from './day5-practice-position-property/day5-practice-position-property.component';
import { Day5AssignmentComponent } from './day5-assignment/day5-assignment.component';
import { CSSHOMEComponent } from './csshome/csshome.component';
import { Day5PracticeOverflowwithscrollComponent } from './day5-practice-overflowwithscroll/day5-practice-overflowwithscroll.component';
import { Day6PracticPractice1Component } from './day6-practic-practice1/day6-practic-practice1.component';
import { Day6PracticPractice2Component } from './day6-practic-practice2/day6-practic-practice2.component';
import { Day6PracticPractice3Component } from './day6-practic-practice3/day6-practic-practice3.component';
import { Day6PracticPractice4Component } from './day6-practic-practice4/day6-practic-practice4.component';
import { Day6PracticPractice5Component } from './day6-practic-practice5/day6-practic-practice5.component';
import { Day6PracticPractice6Component } from './day6-practic-practice6/day6-practic-practice6.component';
import { Day6PracticPractice7Component } from './day6-practic-practice7/day6-practic-practice7.component';
import { Day6PracticPractice8Component } from './day6-practic-practice8/day6-practic-practice8.component';
import { Day6PracticPractice9Component } from './day6-practic-practice9/day6-practic-practice9.component';
import { Day6PracticPractice10Component } from './day6-practic-practice10/day6-practic-practice10.component';
import { Day6PracticPractice11Component } from './day6-practic-practice11/day6-practic-practice11.component';
import { Day6PracticPractice12Component } from './day6-practic-practice12/day6-practic-practice12.component';
import { Day6PracticPractice13Component } from './day6-practic-practice13/day6-practic-practice13.component';
import { Day6PracticPractice14Component } from './day6-practic-practice14/day6-practic-practice14.component';
import { Day6PracticAssignmentComponent } from './day6-practic-assignment/day6-practic-assignment.component';
import { Day7PracticPractice1Component } from './day7-practic-practice1/day7-practic-practice1.component';
import { Day7PracticPractice2Component } from './day7-practic-practice2/day7-practic-practice2.component';
import { Day7PracticPractice3Component } from './day7-practic-practice3/day7-practic-practice3.component';
import { Day7PracticPractice4Component } from './day7-practic-practice4/day7-practic-practice4.component';
import { Day7AssignmentComponent } from './day7-assignment/day7-assignment.component';
import { Day8PracticPractice1Component } from './day8-practic-practice1/day8-practic-practice1.component';
import { Day8AssignmentComponent } from './day8-assignment/day8-assignment.component';
import { JAVASCRIPTComponent } from './javascript/javascript.component';
import { JAVASCRIPTHOMEComponent } from './javascripthome/javascripthome.component';
import { Day15PracticPractice1Component } from './day15-practic-practice1/day15-practic-practice1.component';
import { Day15PracticPractice2Component } from './day15-practic-practice2/day15-practic-practice2.component';
import { Day15AssignmentComponent } from './day15-assignment/day15-assignment.component';
import { Day16PracticPractice1Component } from './day16-practic-practice1/day16-practic-practice1.component';
import { Day16PracticPractice2Component } from './day16-practic-practice2/day16-practic-practice2.component';
import { Day16PracticPractice3Component } from './day16-practic-practice3/day16-practic-practice3.component';
import { Day16PracticPractice4Component } from './day16-practic-practice4/day16-practic-practice4.component';
import { Day16PracticPractice5Component } from './day16-practic-practice5/day16-practic-practice5.component';
import { Day16AssignmentComponent } from './day16-assignment/day16-assignment.component';
import { Day17PracticPractice1Component } from './day17-practic-practice1/day17-practic-practice1.component';
import { Day17PracticPractice2Component } from './day17-practic-practice2/day17-practic-practice2.component';
import { Day17PracticPractice3Component } from './day17-practic-practice3/day17-practic-practice3.component';
import { Day17PracticPractice4Component } from './day17-practic-practice4/day17-practic-practice4.component';
import { Day17AssignmentComponent } from './day17-assignment/day17-assignment.component';
import { Day18AssignmentComponent } from './day18-assignment/day18-assignment.component';
import { Day20AssignmentComponent } from './day20-assignment/day20-assignment.component';
import { Day18PracticPractice1Component } from './day18-practic-practice1/day18-practic-practice1.component';
import { Day18PracticPractice2Component } from './day18-practic-practice2/day18-practic-practice2.component';
import { Day18PracticPractice3Component } from './day18-practic-practice3/day18-practic-practice3.component';
import { Day19PracticPractice1Component } from './day19-practic-practice1/day19-practic-practice1.component';
import { Day19PracticPractice2Component } from './day19-practic-practice2/day19-practic-practice2.component';
import { Day19PracticPractice3Component } from './day19-practic-practice3/day19-practic-practice3.component';
import { Day19PracticPractice4Component } from './day19-practic-practice4/day19-practic-practice4.component';
import { Day19PracticPractice6Component } from './day19-practic-practice6/day19-practic-practice6.component';
import { Day20PracticPractice1Component } from './day20-practic-practice1/day20-practic-practice1.component';
import { Day20PracticPractice2Component } from './day20-practic-practice2/day20-practic-practice2.component';

@NgModule({
  declarations: [
    AppComponent,
    HTMLComponent,
    HOMEComponent,
    PracticArticaltegComponent,
    Day3PracticHrDepartmentComponent,
    Day3PracticNavBarComponent,
    Day3PracticeStudentReportCardComponent,
    Day3AssignmentComponent,
    HTMLHOMEComponent,
    Day4PracticeBorderwithperegraphComponent,
    Day4DisplayPropery1Component,
    Day4UseOfCssComponent,
    Day4UnivarsalPropertyComponent,
    Day4AssignmentComponent,
    CSSComponent,
    Day5PracticeFLoatPropertyComponent,
    Day5PracticeBasicLayoutComponent,
    Day5PracticeOverflowwithvisibleComponent,
    Day5PracticeOverflowwithhiddenComponent,
    Day5PracticePositionPropertyComponent,
    Day5AssignmentComponent,
    CSSHOMEComponent,
    Day5PracticeOverflowwithscrollComponent,
    Day6PracticPractice1Component,
    Day6PracticPractice2Component,
    Day6PracticPractice3Component,
    Day6PracticPractice4Component,
    Day6PracticPractice5Component,
    Day6PracticPractice6Component,
    Day6PracticPractice7Component,
    Day6PracticPractice8Component,
    Day6PracticPractice9Component,
    Day6PracticPractice10Component,
    Day6PracticPractice11Component,
    Day6PracticPractice12Component,
    Day6PracticPractice13Component,
    Day6PracticPractice14Component,
    Day6PracticAssignmentComponent,
    Day7PracticPractice1Component,
    Day7PracticPractice2Component,
    Day7PracticPractice3Component,
    Day7PracticPractice4Component,
    Day7AssignmentComponent,
    Day8PracticPractice1Component,
    Day8AssignmentComponent,
    JAVASCRIPTComponent,
    JAVASCRIPTHOMEComponent,
    Day15PracticPractice1Component,
    Day15PracticPractice2Component,
    Day15AssignmentComponent,
    Day16PracticPractice1Component,
    Day16PracticPractice2Component,
    Day16PracticPractice3Component,
    Day16PracticPractice4Component,
    Day16PracticPractice5Component,
    Day16AssignmentComponent,
    Day17PracticPractice1Component,
    Day17PracticPractice2Component,
    Day17PracticPractice3Component,
    Day17PracticPractice4Component,
    Day17AssignmentComponent,
    Day18AssignmentComponent,
    Day20AssignmentComponent,
    Day18PracticPractice1Component,
    Day18PracticPractice2Component,
    Day18PracticPractice3Component,
    Day19PracticPractice1Component,
    Day19PracticPractice2Component,
    Day19PracticPractice3Component,
    Day19PracticPractice4Component,
    Day19PracticPractice6Component,
    Day20PracticPractice1Component,
    Day20PracticPractice2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
