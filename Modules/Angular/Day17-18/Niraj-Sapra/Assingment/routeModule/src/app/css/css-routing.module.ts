import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import {CssComponent} from '../css/css.component';
import { Day4practice1Component } from './day4practice1/day4practice1.component';
import { Day4practice2Component } from './day4practice2/day4practice2.component';
import { Day4practice3Component } from './day4practice3/day4practice3.component';
import { Day4practice4Component } from './day4practice4/day4practice4.component';
import { Day4practice5Component } from './day4practice5/day4practice5.component';
import { Day4assingmentComponent } from './day4assingment/day4assingment.component';
import { Day5practice1Component } from './day5practice1/day5practice1.component';
import { Day5practice2Component } from './day5practice2/day5practice2.component';
import { Day5practice3Component } from './day5practice3/day5practice3.component';
import { Day5assingmentComponent } from './day5assingment/day5assingment.component';
import { Day6practice1Component } from './day6practice1/day6practice1.component';
import { Day6practice2Component } from './day6practice2/day6practice2.component';
import { Day6practice3Component } from './day6practice3/day6practice3.component';
import { Day6assignmentComponent } from './day6assignment/day6assignment.component';
import { Day7assingmentComponent } from './day7assingment/day7assingment.component';
import { Day8assingment1Component } from '../css/day8assingment1/day8assingment1.component';
import { Day8assingment2Component } from '../css/day8assingment2/day8assingment2.component';

const route: Routes = [{path:" ",component:AppComponent},
{path:"css",component:CssComponent,
children:[{path:"Day4pra1",component:Day4practice1Component},
{path:"Day4pra2",component:Day4practice2Component},
{path:"Day4pra3",component:Day4practice3Component},
{path:"Day4pra4",component:Day4practice4Component},
{path:"Day4pra5",component:Day4practice5Component},
{path:"Day4assingment",component:Day4assingmentComponent},
{path:"Day5pra1",component:Day5practice1Component},
{path:"Day5pra2",component:Day5practice2Component},
{path:"Day5pra3",component:Day5practice3Component},
{path:"Day5assingment",component:Day5assingmentComponent},
{path:"Day6pra1",component:Day6practice1Component},
{path:"Day6pra1",component:Day6practice2Component},
{path:"Day6pra3",component:Day6practice3Component},
{path:"Day6pra1",component:Day6practice2Component},
{path:"Day6pra3",component:Day6practice3Component},
{path:"Day6assingment",component:Day6assignmentComponent},
{path:"Day7assingment",component:Day7assingmentComponent},
{path:"Day8assingment1",component:Day8assingment1Component},
{path:"Day8assingment2",component:Day8assingment2Component},]
}];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
