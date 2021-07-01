import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import {HtmlComponent} from '../html/html.component';
import {Practical1Component} from '../html/practical1/practical1.component';
import {Practical2Component} from '../html/practical2/practical2.component';
import {Practical3Component} from '../html/practical3/practical3.component';
import {Practical4Component} from '../html/practical4/practical4.component';
import {Practical5Component} from '../html/practical5/practical5.component';
import {DayassignmentComponent} from '../html/dayassignment/dayassignment.component';

const route: Routes = [{path:" ",component:AppComponent},
{path:"html",component:HtmlComponent,
children:[{path:"day3prac1",component:Practical1Component},
{path:"day3prac2",component:Practical2Component},
{path:"day3prac3",component:Practical3Component},
{path:"day3prac4",component:Practical4Component},
{path:"day3prac5",component:Practical5Component},
{path:"day3assign",component:DayassignmentComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
