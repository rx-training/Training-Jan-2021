import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { Day8Component } from './day8/day8.component';

const routes: Routes = [
  {path:'css',component:CssComponent,
    children:[
      {path:'day4',component:Day4Component},
      {path:'day5',component:Day5Component},
      {path:'day6',component:Day6Component},
      {path:'day7',component:Day7Component},
      {path:'day8',component:Day8Component}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssesRoutingModule { }
