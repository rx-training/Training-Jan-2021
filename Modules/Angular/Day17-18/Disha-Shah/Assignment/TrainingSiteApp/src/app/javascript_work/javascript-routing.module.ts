import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Day15AssignmentComponent } from './day15-assignment/day15-assignment.component';
import { Day15Practice1Component } from './day15-practice1/day15-practice1.component';
import { Day15Practice2Component } from './day15-practice2/day15-practice2.component';
import { Day15Practice3Component } from './day15-practice3/day15-practice3.component';
import { Day16ArrayComponent } from './day16-array/day16-array.component';
import { Day16AssignmentComponent } from './day16-assignment/day16-assignment.component';
import { Day16DateComponent } from './day16-date/day16-date.component';
import { Day16PracticeComponent } from './day16-practice/day16-practice.component';
import { Day16StringComponent } from './day16-string/day16-string.component';
import { Day17AssignmentComponent } from './day17-assignment/day17-assignment.component';
import { Day17Practice1Component } from './day17-practice1/day17-practice1.component';
import { Day17Practice2Component } from './day17-practice2/day17-practice2.component';
import { Day18AssignmentExamComponent } from './day18-assignment-exam/day18-assignment-exam.component';
import { Day18AssignmentFinishExamComponent } from './day18-assignment-finish-exam/day18-assignment-finish-exam.component';
import { Day18AssignmentComponent } from './day18-assignment/day18-assignment.component';
import { Day18Practice1Component } from './day18-practice1/day18-practice1.component';
import { Day18Practice2Component } from './day18-practice2/day18-practice2.component';
import { Day18Practice3Component } from './day18-practice3/day18-practice3.component';
import { Day19Practice1Component } from './day19-practice1/day19-practice1.component';
import { Day19Practice2Component } from './day19-practice2/day19-practice2.component';
import { Day20AssignmentComponent } from './day20-assignment/day20-assignment.component';
import { Day20PracticeComponent } from './day20-practice/day20-practice.component';
import { JavascriptComponent } from './javascript/javascript.component';

const javascriptRoutes: Routes = [
  { path: 'javascript', component: JavascriptComponent, children:[
    { 
      path: 'day15practice1', 
      component: Day15Practice1Component
    },
    { 
      path: 'day15practice2', 
      component: Day15Practice2Component
    },
    { 
      path: 'day15practice3', 
      component: Day15Practice3Component
    },
    { 
      path: 'day15assignment', 
      component: Day15AssignmentComponent
    },
    { 
      path: 'day16array', 
      component: Day16ArrayComponent
    },
    { 
      path: 'day16date', 
      component: Day16DateComponent
    },
    { 
      path: 'day16string', 
      component: Day16StringComponent
    },
    { 
      path: 'day16practice', 
      component: Day16PracticeComponent
    },
    { 
      path: 'day16assignment', 
      component: Day16AssignmentComponent
    },
    { 
      path: 'day17practice1', 
      component: Day17Practice1Component
    },
    { 
      path: 'day17practice2', 
      component: Day17Practice2Component
    },
    { 
      path: 'day17assignment', 
      component: Day17AssignmentComponent
    },
    { 
      path: 'day18practice1', 
      component: Day18Practice1Component
    },
    { 
      path: 'day18practice2', 
      component: Day18Practice2Component
    },
    { 
      path: 'day18practice3', 
      component: Day18Practice3Component
    },
    { 
      path: 'day18assignment', 
      component: Day18AssignmentComponent
    },
    {
      path: 'day18assignmentexam',
      component: Day18AssignmentExamComponent
    },
    {
      path: 'day18assignmentfinishexam',
      component: Day18AssignmentFinishExamComponent
    },
    { 
      path: 'day19practice1', 
      component: Day19Practice1Component
    },
    { 
      path: 'day19practice2', 
      component: Day19Practice2Component
    },
    { 
      path: 'day20practice', 
      component: Day20PracticeComponent
    },
    { 
      path: 'day20assignment', 
      component: Day20AssignmentComponent
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(javascriptRoutes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
