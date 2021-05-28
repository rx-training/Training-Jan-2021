import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { Day15Component } from './day15/day15.component';
import { Day16Component } from './day16/day16.component';
import { Day17Component } from './day17/day17.component';
import { AssignComponent } from './day18/assign/assign.component';
import { Day18Component } from './day18/day18.component';
import { FinalComponent } from './day18/final/final.component';
import { Day19Component } from './day19/day19.component';
import { Day20Component } from './day20/day20.component';
import { JavascriptComponent } from './javascript/javascript.component';

const routes: Routes = [
  {path:'javascript',component:JavascriptComponent,
    children:[
      {path:'day15',component:Day15Component},
      {path:'day16',component:Day16Component},
      {path:'day17',component:Day17Component},
      {path:'day18',component:Day18Component},
      {path:'day19',component:Day19Component},
      {path:'day20',component:Day20Component}
    ]},
    {path:'javascript/day18/!@4232&&23',component:AssignComponent},
    {path:'javascript/day18/#@##983298&$@',component:FinalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptesRoutingModule { }
