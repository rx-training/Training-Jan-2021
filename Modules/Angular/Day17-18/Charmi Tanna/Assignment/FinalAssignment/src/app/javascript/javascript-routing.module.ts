import { Day20PracticeComponent } from './Day20/Practice/day20-practice/day20-practice.component';
import { Day19Practice6Component } from './Day19/Practice/day19-practice6/day19-practice6.component';
import { Day19Practice5Component } from './Day19/Practice/day19-practice5/day19-practice5.component';
import { Day19Practice4Component } from './Day19/Practice/day19-practice4/day19-practice4.component';
import { Day19Practice3Component } from './Day19/Practice/day19-practice3/day19-practice3.component';
import { Day19Practice2Component } from './Day19/Practice/day19-practice2/day19-practice2.component';
import { Day19Practice1Component } from './Day19/Practice/day19-practice1/day19-practice1.component';
import { Day18Practice3Component } from './Day18/Practice/day18-practice3/day18-practice3.component';
import { Day18Practice2Component } from './Day18/Practice/day18-practice2/day18-practice2.component';
import { Day17Practice9Component } from './Day17/Practice/day17-practice9/day17-practice9.component';
import { Day17Practice8Component } from './Day17/Practice/day17-practice8/day17-practice8.component';
import { Day16Practice5Component } from './Day16/Practice/day16-practice5/day16-practice5.component';
import { Day16Practice4Component } from './Day16/Practice/day16-practice4/day16-practice4.component';
import { Day16Practice3Component } from './Day16/Practice/day16-practice3/day16-practice3.component';
import { Day16Practice2Component } from './Day16/Practice/day16-practice2/day16-practice2.component';
import { Day16Practice1Component } from './Day16/Practice/day16-practice1/day16-practice1.component';
import { Day15assignmentComponent } from './Day15/Assignment/day15assignment/day15assignment.component';
import { Day15Practice2Component } from './Day15/Practice/day15-practice2/day15-practice2.component';
import { Day15Practice1Component } from './Day15/Practice/day15-practice1/day15-practice1.component';
import { JavascriptComponent } from './javascript.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day16assignmentComponent } from './Day16/Assignment/day16assignment/day16assignment.component';
import { Day17Practice7Component } from './Day17/Practice/day17-practice7/day17-practice7.component';
import { Day17AssignmentComponent } from './Day17/Assignment/day17-assignment/day17-assignment.component';
import { Day18Practice1Component } from './Day18/Practice/day18-practice1/day18-practice1.component';
import { Day18AssignmentComponent } from './Day18/Assignment/day18-assignment/day18-assignment.component';
import { Day20AssignmentComponent } from './Day20/Assignment/day20-assignment/day20-assignment.component';

const routes: Routes = [
  {path:'javascript',component:JavascriptComponent,children:
  [
    {path:'',component:JavascriptComponent},
    {path:'Day15practice1',component:Day15Practice1Component},
    {path:'Day15practice2',component:Day15Practice2Component},
    {path:'Day15assignment',component:Day15assignmentComponent},

    {path:'Day16practice1',component:Day16Practice1Component},
    {path:'Day16practice2',component:Day16Practice2Component},
    {path:'Day16practice3',component:Day16Practice3Component},
    {path:'Day16practice4',component:Day16Practice4Component},
    {path:'Day16practice5',component:Day16Practice5Component},
    {path:'Day16assignment',component:Day16assignmentComponent},

    {path:'Day17practice7',component:Day17Practice7Component},
    {path:'Day17practice8',component:Day17Practice8Component},
    {path:'Day17practice9',component:Day17Practice9Component},
    {path:'Day17assignment',component:Day17AssignmentComponent},

    {path:'Day18practice1',component:Day18Practice1Component},
    {path:'Day18practice2',component:Day18Practice2Component},
    {path:'Day18practice3',component:Day18Practice3Component},
    {path:'Day18assignment',component:Day18AssignmentComponent},
    
    {path:'Day19practice1',component:Day19Practice1Component},
    {path:'Day19practice2',component:Day19Practice2Component},
    {path:'Day19practice3',component:Day19Practice3Component},
    {path:'Day19practice4',component:Day19Practice4Component},
    {path:'Day19practice5',component:Day19Practice5Component},
    {path:'Day19practice6',component:Day19Practice6Component},

    {path:'Day20practice1',component:Day20PracticeComponent},
    {path:'Day20assignment',component:Day20AssignmentComponent}
   
  ]}
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
