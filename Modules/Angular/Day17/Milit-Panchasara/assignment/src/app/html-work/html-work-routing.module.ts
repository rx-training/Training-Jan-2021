import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from './day3/assignment1/assignment1.component';
import { Practice1Component } from './day3/practice1/practice1.component';
import { Practice2Component } from './day3/practice2/practice2.component';
import { HtmlComponent } from './html/html.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:"", component: HtmlComponent,
  children: [
    {path:"day3/assignment1", component:Assignment1Component},
    {path:"index", component:IndexComponent},
    {path:"day3/practice1", component:Practice1Component},
    {path:"day3/practice2", component:Practice2Component}
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlWorkRoutingModule { }
