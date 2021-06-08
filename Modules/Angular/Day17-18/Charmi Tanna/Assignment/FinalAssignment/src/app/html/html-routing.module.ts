import { PracticeComponent } from './Day3/Practice/practice/practice.component';
import { HTMLComponent } from './html.component';
import { AssignmentComponent } from './Day3/Assignment/assignment/assignment.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practice2Component } from './Day3/Practice/practice2/practice2.component';
import { Practice3Component } from './Day3/Practice/practice3/practice3.component';
import { Practice4Component } from './Day3/Practice/practice4/practice4.component';
import { Practice5Component } from './Day3/Practice/practice5/practice5.component';

const routes: Routes = [
  {path:'html',component:HTMLComponent,children:
  [
    {path:'',component:HTMLComponent},
    {path:'practice1',component:PracticeComponent},
    {path:'practice2',component:Practice2Component},
    {path:'practice3',component:Practice3Component},
    {path:'practice4',component:Practice4Component},
    {path:'practice5',component:Practice5Component},
    {path:'assignment',component:AssignmentComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HTMLRoutingModule { }
