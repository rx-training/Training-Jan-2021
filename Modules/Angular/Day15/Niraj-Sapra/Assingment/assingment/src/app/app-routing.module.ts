import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HtmlComponent} from './html/html.component';
import {Day3Component} from './day3/day3.component';
import {CssComponent} from './css/css.component';
import {Day4Component} from './day4/day4.component';
import {Day5Component} from './day5/day5.component';
import {Day6Component} from './day6/day6.component';
import {JsComponent} from './js/js.component';
import {Day15Component} from './day15/day15.component';
import {Day16Component} from './day16/day16.component';
const routes: Routes = [{path:"",component:HomeComponent},
{path:"html",component:HtmlComponent},
{path:"day3",component:Day3Component},
{path:"css",component:CssComponent},
{path:"day4",component:Day4Component,
children:[{path:"day5",component:Day5Component},
{path:"day6",component:Day6Component}]},
{path:"js",component:JsComponent},];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
