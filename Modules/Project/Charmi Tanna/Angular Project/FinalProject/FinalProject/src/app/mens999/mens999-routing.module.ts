import { Men999Component } from './../men999/men999.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'men999',component:Men999Component,children:
  [
    {path:'',component:Men999Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mens999RoutingModule { }
