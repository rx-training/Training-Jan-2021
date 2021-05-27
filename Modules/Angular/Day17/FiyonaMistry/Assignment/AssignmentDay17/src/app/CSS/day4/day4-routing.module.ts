import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day4Component } from './day4/day4.component';

const routes: Routes = [
  { path : '', component : Day4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day4RoutingModule { }
