import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSSComponent } from './css/css.component';
import { CSSHOMEComponent } from './csshome/csshome.component';
import { Day15AssignmentComponent } from './day15-assignment/day15-assignment.component';
import { Day15PracticPractice1Component } from './day15-practic-practice1/day15-practic-practice1.component';
import { Day15PracticPractice2Component } from './day15-practic-practice2/day15-practic-practice2.component';
import { Day16AssignmentComponent } from './day16-assignment/day16-assignment.component';
import { Day16PracticPractice1Component } from './day16-practic-practice1/day16-practic-practice1.component';
import { Day16PracticPractice2Component } from './day16-practic-practice2/day16-practic-practice2.component';
import { Day16PracticPractice3Component } from './day16-practic-practice3/day16-practic-practice3.component';
import { Day16PracticPractice4Component } from './day16-practic-practice4/day16-practic-practice4.component';
import { Day16PracticPractice5Component } from './day16-practic-practice5/day16-practic-practice5.component';
import { Day17AssignmentComponent } from './day17-assignment/day17-assignment.component';
import { Day17PracticPractice1Component } from './day17-practic-practice1/day17-practic-practice1.component';
import { Day17PracticPractice2Component } from './day17-practic-practice2/day17-practic-practice2.component';
import { Day17PracticPractice3Component } from './day17-practic-practice3/day17-practic-practice3.component';
import { Day17PracticPractice4Component } from './day17-practic-practice4/day17-practic-practice4.component';
import { Day18AssignmentComponent } from './day18-assignment/day18-assignment.component';
import { Day18PracticPractice1Component } from './day18-practic-practice1/day18-practic-practice1.component';
import { Day18PracticPractice2Component } from './day18-practic-practice2/day18-practic-practice2.component';
import { Day18PracticPractice3Component } from './day18-practic-practice3/day18-practic-practice3.component';
import { Day19PracticPractice1Component } from './day19-practic-practice1/day19-practic-practice1.component';
import { Day19PracticPractice2Component } from './day19-practic-practice2/day19-practic-practice2.component';
import { Day19PracticPractice3Component } from './day19-practic-practice3/day19-practic-practice3.component';
import { Day19PracticPractice4Component } from './day19-practic-practice4/day19-practic-practice4.component';
import { Day19PracticPractice6Component } from './day19-practic-practice6/day19-practic-practice6.component';
import { Day20AssignmentComponent } from './day20-assignment/day20-assignment.component';
import { Day20PracticPractice1Component } from './day20-practic-practice1/day20-practic-practice1.component';
import { Day20PracticPractice2Component } from './day20-practic-practice2/day20-practic-practice2.component';
import { Day3AssignmentComponent } from './day3-assignment/day3-assignment.component';
import { Day3PracticHrDepartmentComponent } from './day3-practic-hr-department/day3-practic-hr-department.component';
import { Day3PracticNavBarComponent } from './day3-practic-nav-bar/day3-practic-nav-bar.component';
import { Day3PracticeStudentReportCardComponent } from './day3-practice-student-report-card/day3-practice-student-report-card.component';
import { Day4AssignmentComponent } from './day4-assignment/day4-assignment.component';
import { Day4DisplayPropery1Component } from './day4-display-propery1/day4-display-propery1.component';
import { Day4PracticeBorderwithperegraphComponent } from './day4-practice-borderwithperegraph/day4-practice-borderwithperegraph.component';
import { Day4UnivarsalPropertyComponent } from './day4-univarsal-property/day4-univarsal-property.component';
import { Day4UseOfCssComponent } from './day4-use-of-css/day4-use-of-css.component';
import { Day5AssignmentComponent } from './day5-assignment/day5-assignment.component';
import { Day5PracticeBasicLayoutComponent } from './day5-practice-basic-layout/day5-practice-basic-layout.component';
import { Day5PracticeFLoatPropertyComponent } from './day5-practice-float-property/day5-practice-float-property.component';
import { Day5PracticeOverflowwithhiddenComponent } from './day5-practice-overflowwithhidden/day5-practice-overflowwithhidden.component';
import { Day5PracticeOverflowwithscrollComponent } from './day5-practice-overflowwithscroll/day5-practice-overflowwithscroll.component';
import { Day5PracticeOverflowwithvisibleComponent } from './day5-practice-overflowwithvisible/day5-practice-overflowwithvisible.component';
import { Day5PracticePositionPropertyComponent } from './day5-practice-position-property/day5-practice-position-property.component';
import { Day6PracticAssignmentComponent } from './day6-practic-assignment/day6-practic-assignment.component';
import { Day6PracticPractice1Component } from './day6-practic-practice1/day6-practic-practice1.component';
import { Day6PracticPractice10Component } from './day6-practic-practice10/day6-practic-practice10.component';
import { Day6PracticPractice11Component } from './day6-practic-practice11/day6-practic-practice11.component';
import { Day6PracticPractice12Component } from './day6-practic-practice12/day6-practic-practice12.component';
import { Day6PracticPractice13Component } from './day6-practic-practice13/day6-practic-practice13.component';
import { Day6PracticPractice14Component } from './day6-practic-practice14/day6-practic-practice14.component';
import { Day6PracticPractice2Component } from './day6-practic-practice2/day6-practic-practice2.component';
import { Day6PracticPractice3Component } from './day6-practic-practice3/day6-practic-practice3.component';
import { Day6PracticPractice4Component } from './day6-practic-practice4/day6-practic-practice4.component';
import { Day6PracticPractice5Component } from './day6-practic-practice5/day6-practic-practice5.component';
import { Day6PracticPractice6Component } from './day6-practic-practice6/day6-practic-practice6.component';
import { Day6PracticPractice7Component } from './day6-practic-practice7/day6-practic-practice7.component';
import { Day6PracticPractice8Component } from './day6-practic-practice8/day6-practic-practice8.component';
import { Day6PracticPractice9Component } from './day6-practic-practice9/day6-practic-practice9.component';
import { Day7AssignmentComponent } from './day7-assignment/day7-assignment.component';
import { Day7PracticPractice1Component } from './day7-practic-practice1/day7-practic-practice1.component';
import { Day7PracticPractice2Component } from './day7-practic-practice2/day7-practic-practice2.component';
import { Day7PracticPractice3Component } from './day7-practic-practice3/day7-practic-practice3.component';
import { Day7PracticPractice4Component } from './day7-practic-practice4/day7-practic-practice4.component';
import { Day8AssignmentComponent } from './day8-assignment/day8-assignment.component';
import { Day8PracticPractice1Component } from './day8-practic-practice1/day8-practic-practice1.component';
import { HOMEComponent } from './home/home.component';
import { HTMLComponent } from './html/html.component';
import { HTMLHOMEComponent } from './htmlhome/htmlhome.component';
import { JAVASCRIPTComponent } from './javascript/javascript.component';
import { JAVASCRIPTHOMEComponent } from './javascripthome/javascripthome.component';
import { PracticArticaltegComponent } from './practic-articalteg/practic-articalteg.component';

const routes: Routes = 
[
   {path:'',redirectTo:'/HOME' ,pathMatch:'full'},
  {path:'HOME',component:HOMEComponent},
  {path:'HTML',component:HTMLComponent,children:
  [
    {path:'',component:HTMLHOMEComponent},
    {path:'Articalteg',component:PracticArticaltegComponent},
    {path:'HrDeparment',component:Day3PracticHrDepartmentComponent},
    {path:'Navbar',component:Day3PracticNavBarComponent},
    {path:'StudentReortCard',component:Day3PracticeStudentReportCardComponent},
    {path:'Assignment',component:Day3AssignmentComponent},
    
    
    {path:'borderwithparagraph',component:Day4PracticeBorderwithperegraphComponent},
    {path:'DisplayProperty1',component:Day4DisplayPropery1Component},
    {path:'useofcss',component:Day4UseOfCssComponent},
    {path:'univarsalProperty',component:Day4UnivarsalPropertyComponent},
    {path:'Day4Assignment',component:Day4AssignmentComponent},



    

  ]},
  {path:'CSS',component:CSSComponent,children:[
    {path:'',component:CSSHOMEComponent},
    {path:'floatProperty',component:Day5PracticeFLoatPropertyComponent},
    {path:'basiclayout',component:Day5PracticeBasicLayoutComponent},
    {path:'overflowwithscroll',component:Day5PracticeOverflowwithscrollComponent},
    {path:'overflowwithhidden',component:Day5PracticeOverflowwithhiddenComponent},
    {path:'overflowwithvisible',component:Day5PracticeOverflowwithvisibleComponent},
    {path:'positionproperty',component:Day5PracticePositionPropertyComponent},
    {path:'Day5Assignment',component:Day5AssignmentComponent},


    {path:'Day6Practice1',component:Day6PracticPractice1Component},
    {path:'Day6Practice2',component:Day6PracticPractice2Component},
    {path:'Day6Practice3',component:Day6PracticPractice3Component},
    {path:'Day6Practice4',component:Day6PracticPractice4Component},
    {path:'Day6Practice5',component:Day6PracticPractice5Component},
    {path:'Day6Practice6',component:Day6PracticPractice6Component},
    {path:'Day6Practice7',component:Day6PracticPractice7Component},
    {path:'Day6Practice8',component:Day6PracticPractice8Component},
    {path:'Day6Practice9',component:Day6PracticPractice9Component},
    {path:'Day6Practice10',component:Day6PracticPractice10Component},
    {path:'Day6Practice11',component:Day6PracticPractice11Component},
    {path:'Day6Practice12',component:Day6PracticPractice12Component},
    {path:'Day6Practice13',component:Day6PracticPractice13Component},
    {path:'Day6Practice14',component:Day6PracticPractice14Component},
    {path:'Day6Assignment',component:Day6PracticAssignmentComponent},





    {path:'Day7Practice1',component:Day7PracticPractice1Component},
    {path:'Day7Practice2',component:Day7PracticPractice2Component},
    {path:'Day7Practice3',component:Day7PracticPractice3Component},
    {path:'Day7Practice4',component:Day7PracticPractice4Component},
    {path:'Day7Assignment',component:Day7AssignmentComponent},


    {path:'Day8Practice1',component:Day8PracticPractice1Component},
    {path:'Day8Assignment',component:Day8AssignmentComponent}
    
  ]
  
},
{path:'JAVASCRIPT',component:JAVASCRIPTComponent,children:[
  {path:'',component:JAVASCRIPTHOMEComponent},
  {path:'Day15Practice1',component:Day15PracticPractice1Component},
  {path:'Day15Practice2',component:Day15PracticPractice2Component},
  {path:'Day15Assignment',component:Day15AssignmentComponent},


  {path:'Day16Practice1',component:Day16PracticPractice1Component},
  {path:'Day16Practice2',component:Day16PracticPractice2Component},
  {path:'Day16Practice3',component:Day16PracticPractice3Component},
  {path:'Day16Practice4',component:Day16PracticPractice4Component},
  {path:'Day16Practice5',component:Day16PracticPractice5Component},
  {path:'Day16Assignment',component:Day16AssignmentComponent},



  {path:'Day17Practice1',component:Day17PracticPractice1Component},
  {path:'Day17Practice2',component:Day17PracticPractice2Component},
  {path:'Day17Practice3',component:Day17PracticPractice3Component},
  {path:'Day17Practice4',component:Day17PracticPractice4Component},
  {path:'Day17Assignment',component:Day17AssignmentComponent},


  {path:'Day18Practice1',component:Day18PracticPractice1Component},
  {path:'Day18Practice2',component:Day18PracticPractice2Component},
  {path:'Day18Practice3',component:Day18PracticPractice3Component},
  {path:'Day18Assignment',component:Day18AssignmentComponent},




  {path:'Day19Practice1',component:Day19PracticPractice1Component},
  {path:'Day19Practice2',component:Day19PracticPractice2Component},
  {path:'Day19Practice3',component:Day19PracticPractice3Component},
  {path:'Day19Practice4',component:Day19PracticPractice4Component},
  {path:'Day19Practice6',component:Day19PracticPractice6Component},


  {path:'Day20Practice1',component:Day20PracticPractice1Component},
  {path:'Day20Practice2',component:Day20PracticPractice2Component},
  {path:'Day20Assignment',component:Day20AssignmentComponent}
  

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
