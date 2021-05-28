import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSSComponent } from './css/css.component';
import { Day15AssignmentAssignmentComponent } from './day15-assignment-assignment/day15-assignment-assignment.component';
import { Day15PracticePractice1Component } from './day15-practice-practice1/day15-practice-practice1.component';
import { Day16AssignmentAssignmentComponent } from './day16-assignment-assignment/day16-assignment-assignment.component';
import { Day17AssignmentAssignmentComponent } from './day17-assignment-assignment/day17-assignment-assignment.component';
import { Day18AssignmentAssignmentComponent } from './day18-assignment-assignment/day18-assignment-assignment.component';
import { Day19AssignmentAssignmentComponent } from './day19-assignment-assignment/day19-assignment-assignment.component';
import { Day20AssignmentAssignmentComponent } from './day20-assignment-assignment/day20-assignment-assignment.component';
import { Day3AssignmentComponent } from './day3-assignment/day3-assignment.component';
import { Day3PraticeDepartmentComponent } from './day3-pratice-department/day3-pratice-department.component';
import { Day3PraticeLoginComponent } from './day3-pratice-login/day3-pratice-login.component';
import { Day3PraticeStudentComponent } from './day3-pratice-student/day3-pratice-student.component';
import { Day4AssignmentResumeComponent } from './day4-assignment-resume/day4-assignment-resume.component';
import { Day4PracticeStudentComponent } from './day4-practice-student/day4-practice-student.component';
import { Day4PracticeTaskComponent } from './day4-practice-task/day4-practice-task.component';
import { Day5AssignmentAssignmentComponent } from './day5-assignment-assignment/day5-assignment-assignment.component';
import { Day5PracticePositionComponent } from './day5-practice-position/day5-practice-position.component';
import { Day5PracticePractice1Component } from './day5-practice-practice1/day5-practice-practice1.component';
import { Day5PracticePractice2Component } from './day5-practice-practice2/day5-practice-practice2.component';
import { Day6AssignmentAssignmentComponent } from './day6-assignment-assignment/day6-assignment-assignment.component';
import { Day6PracticePractice14Component } from './day6-practice-practice14/day6-practice-practice14.component';
import { Day6PracticePractice5Component } from './day6-practice-practice5/day6-practice-practice5.component';
import { Day6PracticePractice6Component } from './day6-practice-practice6/day6-practice-practice6.component';
import { Day7AssignmentAssignmentComponent } from './day7-assignment-assignment/day7-assignment-assignment.component';
import { Day7PracticePractice1Component } from './day7-practice-practice1/day7-practice-practice1.component';
import { Day7PracticePractice2Component } from './day7-practice-practice2/day7-practice-practice2.component';
import { Day8AssignmentAssignmentComponent } from './day8-assignment-assignment/day8-assignment-assignment.component';
import { HTMLComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { StartExamComponent } from './start-exam/start-exam.component';

const routes: Routes = [
  {
    path: 'html', component: HTMLComponent,
    children: [
      {
        path: 'Day3/Assignment', component: Day3AssignmentComponent
      },
      {
        path: 'Day3/Practice/Login', component: Day3PraticeLoginComponent
      },
      {
        path: 'Day3/Practice/Student', component: Day3PraticeStudentComponent
      },
      {
        path: 'Day3/Practice/Department', component: Day3PraticeDepartmentComponent
      },
    ]
  },
  {
    path: 'css', component: CSSComponent,
    children: [
      {
        path: 'Day4/Assignment/Resume', component: Day4AssignmentResumeComponent
      },
      {
        path: 'Day4/Practice/Student', component: Day4PracticeStudentComponent
      },
      {
        path: 'Day4/Practice/Task', component: Day4PracticeTaskComponent
      },
      {
        path: 'Day5/Assignment/Assignment', component: Day5AssignmentAssignmentComponent
      },
      {
        path: 'Day5/Practice/Position', component: Day5PracticePositionComponent
      },
      {
        path: 'Day5/Practice/Practice1', component: Day5PracticePractice1Component
      },
      {
        path: 'Day5/Practice/Practice2', component: Day5PracticePractice2Component
      },
      {
        path: 'Day6/Assignment/Assignment', component: Day6AssignmentAssignmentComponent
      },
      {
        path: 'Day6/Practice/Practice1-4', component: Day6PracticePractice14Component
      },
      {
        path: 'Day6/Practice/Practice5', component: Day6PracticePractice5Component
      },
      {
        path: 'Day6/Practice/Practice6', component: Day6PracticePractice6Component
      },
      {
        path: 'Day7/Assignment/Assignment', component: Day7AssignmentAssignmentComponent
      },
      {
        path: 'Day7/Practice/Practice1', component: Day7PracticePractice1Component
      },
      {
        path: 'Day7/Practice/Practice2', component: Day7PracticePractice2Component
      },
      {
        path: 'Day8/Assignment/Assignment', component: Day8AssignmentAssignmentComponent
      }
    ]
  },
  {
    path: 'javascript', component: JavascriptComponent,
    children : [
      {
        path : 'Day15/Assignment/Assignment', component : Day15AssignmentAssignmentComponent
      },
      {
        path : 'Day15/Practice/Practice1', component : Day15PracticePractice1Component
      },
      {
        path : 'Day16/Assignment/Assignment', component : Day16AssignmentAssignmentComponent
      },
      {
        path : 'Day17/Assignment/Assignment', component : Day17AssignmentAssignmentComponent
      },
      {
        path : 'Day18/Assignment/Assignment', component : Day18AssignmentAssignmentComponent
      },
      ,
      {
        path : 'Day18/Assignment/Assignment/StartExam', component : StartExamComponent
      },
      ,
      {
        path : 'Day18/Assignment/Assignment/StartExam/Exam-Paper', component : Day18AssignmentAssignmentComponent
      },
      ,
      {
        path : 'Day18/Assignment/Assignment/StartExam/Exam-Paper/Exam-Result', component : Day18AssignmentAssignmentComponent
      },
      {
        path : 'Day19/Assignment/Assignment', component : Day19AssignmentAssignmentComponent
      },
      {
        path : 'Day20/Assignment/Assignment', component : Day20AssignmentAssignmentComponent
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
