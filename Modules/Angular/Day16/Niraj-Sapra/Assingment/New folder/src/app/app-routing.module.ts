import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HtmlComponent} from './html/html.component';
import {Practicepractical1Component} from './practicepractical1/practicepractical1.component';
import {Practicepractical2Component} from './practicepractical2/practicepractical2.component';
import {Practicepractical3Component} from './practicepractical3/practicepractical3.component';
import {Practicepractical4Component} from './practicepractical4/practicepractical4.component';
import {Practicepractical5Component} from './practicepractical5/practicepractical5.component';
import {Day3assignmentComponent} from './day3assignment/day3assignment.component';
import {CssComponent} from './css/css.component';
import { Day4pra1Component } from './day4pra1/day4pra1.component';
import { Day4pra2Component } from './day4pra2/day4pra2.component';
import { Day4pra3Component } from './day4pra3/day4pra3.component';
import { Day4pra4Component } from './day4pra4/day4pra4.component';
import { Day4assingmentComponent } from './day4assingment/day4assingment.component';
import { Day4pra5Component } from './day4pra5/day4pra5.component';
import { Day5pra1Component } from './day5pra1/day5pra1.component';
import { Day5pra2Component } from './day5pra2/day5pra2.component';
import { Day5pra3Component } from './day5pra3/day5pra3.component';
import { Day5assingmentComponent } from './day5assingment/day5assingment.component';
import { Day6prac1Component } from './day6prac1/day6prac1.component';
import { Day6prac2Component } from './day6prac2/day6prac2.component';
import { Day6prac3Component } from './day6prac3/day6prac3.component';
import { Day6assingmentComponent } from './day6assingment/day6assingment.component';
import { Day15prac1Component } from './day15prac1/day15prac1.component';
import { Day15prac2Component } from './day15prac2/day15prac2.component';
import { Day15assingmentComponent } from './day15assingment/day15assingment.component';
import { Day16prac1Component } from './day16prac1/day16prac1.component';
import { Day16prac2Component } from './day16prac2/day16prac2.component';
import { Day16prac3Component } from './day16prac3/day16prac3.component';
import { Day16prac4Component } from './day16prac4/day16prac4.component';
import { Day16prac5Component } from './day16prac5/day16prac5.component';
import { Day16assignmentComponent } from './day16assignment/day16assignment.component';

import {JsComponent} from './js/js.component';

const routes: Routes = [
  {path:" ",component:HomeComponent},
{path:"html",component:HtmlComponent,
children:[{path:"day3prac1",component:Practicepractical1Component},
{path:"day3prac2",component:Practicepractical2Component},
{path:"day3prac3",component:Practicepractical3Component},
{path:"day3prac4",component:Practicepractical4Component},
{path:"day3prac5",component:Practicepractical5Component},
{path:"day3assign",component:Day3assignmentComponent}]
},
{path:"css",component:CssComponent,children:[{path:"Day4pra1",component:Day4pra1Component},
{path:"Day4pra2",component:Day4pra2Component},
{path:"Day4pra3",component:Day4pra3Component},
{path:"Day4pra4",component:Day4pra4Component},
{path:"Day4pra5",component:Day4pra5Component},
{path:"Day4assingment",component:Day4assingmentComponent},
{path:"Day5pra1",component:Day5pra1Component},
{path:"Day5pra2",component:Day5pra2Component},
{path:"Day5pra3",component:Day5pra3Component},
{path:"Day5assingment",component:Day5assingmentComponent},
{path:"Day6pra1",component:Day6prac1Component},
{path:"Day6pra2",component:Day6prac2Component},
{path:"Day6pra3",component:Day6prac3Component},
{path:"Day6assingment",component:Day6assingmentComponent}
]},
{path:"js",component:JsComponent,
children:[{path:"Day15pra1",component:Day15prac1Component},
{path:"Day15pra2",component:Day15prac2Component},
{path:"Day15assignment",component:Day15assingmentComponent},
{path:"Day16pra1",component:Day16prac1Component},
{path:"Day16pra2",component:Day16prac2Component},
{path:"Day16pra3",component:Day16prac3Component},
{path:"Day16pra4",component:Day16prac4Component},
{path:"day16pra5",component:Day16prac5Component},
{path:"Day16assingment",component:Day16assignmentComponent}]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
