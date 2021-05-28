import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day3Component } from './day3/day3.component';
import { HtmlComponent } from './html/html.component';

const routes: Routes = [
  {path:'html',component:HtmlComponent,
  children:[
    {path:'day3',component:Day3Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlsRoutingModule { }
