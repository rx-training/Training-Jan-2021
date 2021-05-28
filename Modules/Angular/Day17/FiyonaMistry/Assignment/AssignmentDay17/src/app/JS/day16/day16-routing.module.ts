import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day16Component } from './day16/day16.component';

const routes: Routes = [
  { path : '', component : Day16Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day16RoutingModule { }
