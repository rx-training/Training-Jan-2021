import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSSComponent } from './css/css.component';
import { Day4aComponent } from './Day4/day4a/day4a.component';
import { Day4pComponent } from './Day4/day4p/day4p.component';
import { Day5aComponent } from './Day5/day5a/day5a.component';
import { Day5pComponent } from './Day5/day5p/day5p.component';
import { Day6pComponent } from './Day6/day6p/day6p.component';
import { Day7pComponent } from './Day7/day7p/day7p.component';
import { Day8pComponent } from './Day8/day8p/day8p.component';

const cssRoutes: Routes = [
  {path: '', component: CSSComponent, children: [
    {path: 'day4a', component: Day4aComponent},
    {path: 'day4p', component: Day4pComponent},
    {path: 'day5a', component: Day5aComponent},
    {path: 'day5p', component: Day5pComponent},
    {path: 'day6p', component: Day6pComponent},
    {path: 'day7p', component: Day7pComponent},
    {path: 'day8p', component: Day8pComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(cssRoutes)],
  exports: [RouterModule]
})
export class CssModuleRoutingModule { }
