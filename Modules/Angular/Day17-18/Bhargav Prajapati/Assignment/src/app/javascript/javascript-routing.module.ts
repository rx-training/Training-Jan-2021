import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './Day15/Assignment/assignment/assignment.component';
import { Practice1Component } from './Day15/Practice/practice1/practice1.component';
import { Practice2Component } from './Day15/Practice/practice2/practice2.component';
import { Day16assignmentComponent } from './Day16/Assignment/day16assignment/day16assignment.component';
import { Day16Practice1Component } from './Day16/Practice/day16-practice1/day16-practice1.component';
import { Day16Practice2Component } from './Day16/Practice/day16-practice2/day16-practice2.component';
import { Day16Practice3Component } from './Day16/Practice/day16-practice3/day16-practice3.component';
import { Day16Practice4Component } from './Day16/Practice/day16-practice4/day16-practice4.component';
import { Day16Practice5Component } from './Day16/Practice/day16-practice5/day16-practice5.component';
import { Day17assignmentComponent } from './Day17/Assignment/day17assignment/day17assignment.component';
import { Day17Practice1Component } from './Day17/Practice/day17-practice1/day17-practice1.component';
import { Day17Practice2Component } from './Day17/Practice/day17-practice2/day17-practice2.component';
import { Day17Practice3Component } from './Day17/Practice/day17-practice3/day17-practice3.component';
import { Day17Practice4Component } from './Day17/Practice/day17-practice4/day17-practice4.component';
import { Day18assignmentComponent } from './Day18/Assignment/day18assignment/day18assignment.component';
import { Day18Practice1Component } from './Day18/Practice/day18-practice1/day18-practice1.component';
import { Day18Practice2Component } from './Day18/Practice/day18-practice2/day18-practice2.component';
import { Day18Practice3Component } from './Day18/Practice/day18-practice3/day18-practice3.component';
import { Day19Practice1Component } from './Day19/Practice/day19-practice1/day19-practice1.component';
import { Day19Practice2Component } from './Day19/Practice/day19-practice2/day19-practice2.component';
import { Day19Practice3Component } from './Day19/Practice/day19-practice3/day19-practice3.component';
import { Day19Practice4Component } from './Day19/Practice/day19-practice4/day19-practice4.component';
import { Day20assignmentComponent } from './Day20/Assignment/day20assignment/day20assignment.component';
import { Day20Practice2Component } from './Day20/Practice/day20-practice2/day20-practice2.component';
import { JavascriptHomeComponent } from './javascript-home/javascript-home.component';
import { JAVASCRIPTComponent } from './javascript.component';

const routes: Routes =
 [
   {path:'JAVASCRIPT',component:JAVASCRIPTComponent,children:[
     {path:'',component:JavascriptHomeComponent},
     {path:'Day15Practice1',component:Practice1Component},
     {path:'Day15Practice2',component:Practice2Component},
     {path:'Day15Assignment',component:AssignmentComponent},


     {path:'Day16Practice1',component:Day16Practice1Component},
     {path:'Day16Practice2',component:Day16Practice2Component},
     {path:'Day16Practice3',component:Day16Practice3Component},
     {path:'Day16Practice4',component:Day16Practice4Component},
     {path:'Day16Practice5',component:Day16Practice5Component},
     {path:'Day16Assignment',component:Day16assignmentComponent},


     {path:'Day17Practice1',component:Day17Practice1Component},
     {path:'Day17Practice2',component:Day17Practice2Component},
     {path:'Day17Practice3',component:Day17Practice3Component},
     {path:'Day17Practice4',component:Day17Practice4Component},
     {path:'Day17Assignment',component:Day17assignmentComponent},


     {path:'Day18Practice1',component:Day18Practice1Component},
     {path:'Day18Practice2',component:Day18Practice2Component},
     {path:'Day18Practice3',component:Day18Practice3Component},
     {path:'Day18Assignment',component:Day18assignmentComponent},


     {path:'Day19Practice1',component:Day19Practice1Component},
     {path:'Day19Practice2',component:Day19Practice2Component},
     {path:'Day19Practice3',component:Day19Practice3Component},
     {path:'Day19Practice4',component:Day19Practice4Component},
     {path:'Day19Practice6',component:Day19Practice1Component},


     
     {path:'Day20Practice2',component:Day20Practice2Component},

     {path:'Day20Assignment',component:Day20assignmentComponent}

    





   ]}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JAVASCRIPTRoutingModule { }
