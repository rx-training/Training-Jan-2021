import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsModuleRoutingModule } from './js-module-routing.module';
import { Day15aComponent } from './Day15/day15a/day15a.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { Day15pComponent } from './Day15/day15p/day15p.component';
import { Day16aComponent } from './Day16/day16a/day16a.component';
import { Day16pComponent } from './Day16/day16p/day16p.component';
import { Day17pComponent } from './Day17/day17p/day17p.component';
import { Day17aComponent } from './Day17/day17a/day17a.component';
import { Page2Component } from './Day17/page2/page2.component';
import { Day18aComponent } from './Day18/day18a/day18a.component';
import { Day18pComponent } from './Day18/day18p/day18p.component';
import { EndComponent } from './Day18/end/end.component';
import { ExamComponent } from './Day18/exam/exam.component';
import { ClosureComponent } from './Day19/closure/closure.component';
import { Day19pComponent } from './Day19/day19p/day19p.component';
import { Day20aComponent } from './Day20/day20a/day20a.component';


@NgModule({
  declarations: [
    Day15aComponent,
    Day15pComponent,
    Day16aComponent,
    Day16pComponent,
    Day17pComponent,
    Day17aComponent,
    Page2Component,
    Day18aComponent,
    Day18pComponent,
    EndComponent,
    ExamComponent,
    ClosureComponent,
    Day19pComponent,
    Day20aComponent,
    JavaScriptComponent
  ],
  imports: [
    CommonModule,
    JsModuleRoutingModule
  ]
})
export class JsModuleModule { }
