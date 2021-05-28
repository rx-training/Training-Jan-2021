import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSSComponent } from './css/css.component';

const routes: Routes = [
  { path : 'css', component : CSSComponent, children : [
    { path : 'day4', loadChildren : () => import('./day4/day4.module').then(x => x.Day4Module) },
    { path : 'day5', loadChildren : () => import('./day5/day5.module').then(x => x.Day5Module) },
    { path : 'day6', loadChildren : () => import('./day6/day6.module').then(x => x.Day6Module) },
    { path : 'day7', loadChildren : () => import('./day7/day7.module').then(x => x.Day7Module) },
    { path : 'day8', loadChildren : () => import('./day8/day8.module').then(x => x.Day8Module) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CSSRoutingModule { }
