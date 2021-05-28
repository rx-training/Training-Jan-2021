import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day15Component } from './day15/day15.component';

const routes: Routes = [
  { path : '', component : Day15Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day15RoutingModule { }
