import { Women999Component } from './../women999/women999.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'women999',component:Women999Component,children:
  [
    {path:'',component:Women999Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Womens999RoutingModule { }
