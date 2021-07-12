import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day3aComponent } from './Day3/day3a/day3a.component';
import { Day3pComponent } from './Day3/day3p/day3p.component';
import { HTMLComponent } from './html/html.component';

const htmlRoutes: Routes = [
  {path: '', component: HTMLComponent, children:[
    {path: 'day3a', component: Day3aComponent},
    {path: 'day3p', component: Day3pComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(htmlRoutes)],
  exports: [RouterModule]
})
export class HtmlModuleRoutingModule { }
