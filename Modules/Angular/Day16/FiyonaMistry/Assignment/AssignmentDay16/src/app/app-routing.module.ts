import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSSComponent } from './css/css.component';
import { Day15Component } from './Days/day15/day15.component';
import { Day16Component } from './Days/day16/day16.component';
import { Day17Component } from './Days/day17/day17.component';
import { Day18Component } from './Days/day18/day18.component';
import { Day19Component } from './Days/day19/day19.component';
import { Day20Component } from './Days/day20/day20.component';
import { Day3Component } from './Days/day3/day3.component';
import { Day4Component } from './Days/day4/day4.component';
import { Day5Component } from './Days/day5/day5.component';
import { Day6Component } from './Days/day6/day6.component';
import { Day7Component } from './Days/day7/day7.component';
import { Day8Component } from './Days/day8/day8.component';
import { HTMLComponent } from './html/html.component';
import { JSComponent } from './js/js.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'html', component : HTMLComponent, children : [
    { path : 'day3', component : Day3Component }
  ] },
  { path : 'css', component : CSSComponent, children : [
    { path : 'day4', component : Day4Component },
    { path : 'day5', component : Day5Component },
    { path : 'day6', component : Day6Component },
    { path : 'day7', component : Day7Component },
    { path : 'day8', component : Day8Component }
  ] },
  { path : 'js', component : JSComponent, children : [
    { path : 'day15', component : Day15Component },
    { path : 'day16', component : Day16Component },
    { path : 'day17', component : Day17Component },
    { path : 'day18', component : Day18Component },
    { path : 'day19', component : Day19Component },
    { path : 'day20', component : Day20Component }
  ] },
  { path : '', redirectTo : '/html', pathMatch : 'full' },
  { path : 'not-found', component : PageNotFoundComponent },
  { path : '**', redirectTo : 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
