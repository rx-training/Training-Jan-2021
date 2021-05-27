import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day18Component } from './day18/day18.component';

const routes: Routes = [
  { path : '', component : Day18Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day18RoutingModule { }
