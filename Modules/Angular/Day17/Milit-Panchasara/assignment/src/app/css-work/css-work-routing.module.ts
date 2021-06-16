import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { D4a1Component } from './day4/d4a1/d4a1.component';
import { D4p1Component } from './day4/d4p1/d4p1.component';
import { D4p24Component } from './day4/d4p24/d4p24.component';
import { D4pextraComponent } from './day4/d4pextra/d4pextra.component';
import { D5a1Component } from './day5/d5a1/d5a1.component';
import { D5p1Component } from './day5/d5p1/d5p1.component';
import { D6a1p7Component } from './day6/d6a1p7/d6a1p7.component';
import { D6p56Component } from './day6/d6p56/d6p56.component';
import { D6pextraComponent } from './day6/d6pextra/d6pextra.component';
import { D7a1Component } from './day7/d7a1/d7a1.component';
import { D8a1Component } from './day8/d8a1/d8a1.component';
import { D8p1Component } from './day8/d8p1/d8p1.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:"", component: CssComponent,
  children:[
    {path:"index", component:IndexComponent},
    {path:"day4/assignment1", component:D4a1Component},
    {path:"day4/practice1", component:D4p1Component},
    {path:"day4/practice2-4", component:D4p24Component},
    {path:"day4/practice-extra", component:D4pextraComponent},
    {path:"day5/assignment1", component:D5a1Component},
    {path:"day5/practice1", component:D5p1Component},
    {path:"day6/assignment1-practice7", component:D6a1p7Component},
    {path:"day6/practice5-6", component:D6p56Component},
    {path:"day6/practice-extra", component:D6pextraComponent},
    {path:"day7/assignment1", component:D7a1Component},
    {path:"day8/assignment1", component:D8a1Component},
    {path:"day8/practice1", component:D8p1Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssWorkRoutingModule { }
