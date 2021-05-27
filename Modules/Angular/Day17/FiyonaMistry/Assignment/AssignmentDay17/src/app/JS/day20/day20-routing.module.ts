import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day20Component } from './day20/day20.component';

const routes: Routes = [
  { path : '', component : Day20Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day20RoutingModule { }
