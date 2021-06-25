import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Kids999Component } from './kids999.component';

const routes: Routes = [
  {path:'kids999',component:Kids999Component,children:
  [
    {path:'',component:Kids999Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Kids999RoutingModule { }
