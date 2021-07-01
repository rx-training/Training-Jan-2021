import { Day7Practice4Component } from './Day7/Practice/day7-practice4/day7-practice4.component';
import { Day7Practice3Component } from './Day7/Practice/day7-practice3/day7-practice3.component';
import { Day7Practice2Component } from './Day7/Practice/day7-practice2/day7-practice2.component';
import { Day7Practice1Component } from './Day7/Practice/day7-practice1/day7-practice1.component';
import { Assignment2Component } from './Day8/Assignment/assignment2/assignment2.component';
import { Assignment1Component } from './Day8/Assignment/assignment1/assignment1.component';
import { Day6AssignmentComponent } from './Day6/Assignment/day6-assignment/day6-assignment.component';
import { Day6Practice7Component } from './Day6/Practice/day6-practice7/day6-practice7.component';
import { Day6Practice6Component } from './Day6/Practice/day6-practice6/day6-practice6.component';
import { Day6Practice5Component } from './Day6/Practice/day6-practice5/day6-practice5.component';
import { Day5AssignmentComponent } from './Day5/Assignment/day5-assignment/day5-assignment.component';
import { Day5Practice4Component } from './Day5/Practice/day5-practice4/day5-practice4.component';
import { Day5Practice3Component } from './Day5/Practice/day5-practice3/day5-practice3.component';
import { Day5Practice2Component } from './Day5/Practice/day5-practice2/day5-practice2.component';
import { Day5Practice1Component } from './Day5/Practice/day5-practice1/day5-practice1.component';
import { CSSComponent } from './css.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practice1Component } from './Day4/Practice/practice1/practice1.component';
import { Practice2Component } from './Day4/Practice/practice2/practice2.component';
import { Practice3Component } from './Day4/Practice/practice3/practice3.component';
import { Practice4Component } from './Day4/Practice/practice4/practice4.component';
import { Practice5Component } from './Day4/Practice/practice5/practice5.component';
import { AssignmentComponent } from './Day4/Assignment/assignment/assignment.component';
import { Day7AssignmentComponent } from './Day7/Assignment/day7-assignment/day7-assignment.component';

const routes: Routes = [
  {path:'css',component:CSSComponent,children:
  [
    {path:'',component:CSSComponent},
    {path:'practice1',component:Practice1Component},
    {path:'practice2',component:Practice2Component},
    {path:'practice3',component:Practice3Component},
    {path:'practice4',component:Practice4Component},
    {path:'practice5',component:Practice5Component},
    {path:'assignment',component:AssignmentComponent},

    {path:'day5practice1',component:Day5Practice1Component},
    {path:'day5practice2',component:Day5Practice2Component},
    {path:'day5practice3',component:Day5Practice3Component},
    {path:'day5practice4',component:Day5Practice4Component},
    {path:'day5assignment',component:Day5AssignmentComponent},

    {path:'day6practice5',component:Day6Practice5Component},
    {path:'day6practice6',component:Day6Practice6Component},
    {path:'day6practice7',component:Day6Practice7Component},
    {path:'day6assignment',component:Day6AssignmentComponent},
    
    {path:'day7practice1',component:Day7Practice1Component},
    {path:'day7practice2',component:Day7Practice2Component},
    {path:'day7practice3',component:Day7Practice3Component},
    {path:'day7practice4',component:Day7Practice4Component},
    {path:'day7assignment',component:Day7AssignmentComponent},

    {path:'day8practice5',component:Assignment1Component},
    {path:'day8practice6',component:Assignment2Component}
   
  ]}
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CSSRoutingModule { }
