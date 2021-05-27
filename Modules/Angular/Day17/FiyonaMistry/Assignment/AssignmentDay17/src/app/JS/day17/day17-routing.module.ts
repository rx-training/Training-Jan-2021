import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day17Component } from './day17/day17.component';

const routes: Routes = [
  { path : '', component : Day17Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day17RoutingModule { }
