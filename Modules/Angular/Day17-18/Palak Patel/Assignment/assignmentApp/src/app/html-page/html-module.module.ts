import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlModuleRoutingModule } from './html-module-routing.module';
import { Day3pComponent } from './Day3/day3p/day3p.component';
import { Day3aComponent } from './Day3/day3a/day3a.component';
import { HTMLComponent } from './html/html.component';


@NgModule({
  declarations: [
    HTMLComponent,
    Day3pComponent,
    Day3aComponent
  ],
  imports: [
    CommonModule,
    HtmlModuleRoutingModule,
  ]
})
export class HtmlModuleModule { }
