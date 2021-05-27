import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JSComponent } from './js/js.component';

const routes: Routes = [
  { path : 'js', component : JSComponent, children : [
    { path : 'day15', loadChildren : () => import('./day15/day15.module').then(x => x.Day15Module) },
    { path : 'day16', loadChildren : () => import('./day16/day16.module').then(x => x.Day16Module) },
    { path : 'day17', loadChildren : () => import('./day17/day17.module').then(x => x.Day17Module) },
    { path : 'day18', loadChildren : () => import('./day18/day18.module').then(x => x.Day18Module) },
    { path : 'day19', loadChildren : () => import('./day19/day19.module').then(x => x.Day19Module) },
    { path : 'day20', loadChildren : () => import('./day20/day20.module').then(x => x.Day20Module) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JSRoutingModule { }
