import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTMLComponent } from './html/html.component';

const routes: Routes = [
  { path : 'html', component : HTMLComponent, children : [
    { path : 'day3', loadChildren : () => import('./day3/day3.module').then(x => x.Day3Module) }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HTMLRoutingModule { }
