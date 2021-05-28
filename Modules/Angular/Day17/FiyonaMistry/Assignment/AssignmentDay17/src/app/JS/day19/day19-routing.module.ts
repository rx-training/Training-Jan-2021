import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day19Component } from './day19/day19.component';

const routes: Routes = [
  { path : '', component : Day19Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day19RoutingModule { }
