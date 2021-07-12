import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day15aComponent } from './Day15/day15a/day15a.component';
import { Day15pComponent } from './Day15/day15p/day15p.component';
import { Day16aComponent } from './Day16/day16a/day16a.component';
import { Day16pComponent } from './Day16/day16p/day16p.component';
import { Day17aComponent } from './Day17/day17a/day17a.component';
import { Day17pComponent } from './Day17/day17p/day17p.component';
import { Day18aComponent } from './Day18/day18a/day18a.component';
import { Day18pComponent } from './Day18/day18p/day18p.component';
import { ClosureComponent } from './Day19/closure/closure.component';
import { Day19pComponent } from './Day19/day19p/day19p.component';
import { Day20aComponent } from './Day20/day20a/day20a.component';
import { JavaScriptComponent } from './java-script/java-script.component';

const routes: Routes = [
  {path: '', component: JavaScriptComponent, children:[
    {path: 'day15a', component: Day15aComponent},
    {path: 'day15p', component: Day15pComponent},
    {path: 'day16a', component: Day16aComponent},
    {path: 'day16p', component: Day16pComponent},
    {path: 'day17a', component: Day17aComponent},
    {path: 'day17p', component: Day17pComponent},
    {path: 'day18a', component: Day18aComponent},
    {path: 'day18p', component: Day18pComponent},
    {path: 'day19p', component: Day19pComponent, children:[
      {path: 'closure', component: ClosureComponent}
    ]},
    {path: 'day20a', component: Day20aComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsModuleRoutingModule { }
