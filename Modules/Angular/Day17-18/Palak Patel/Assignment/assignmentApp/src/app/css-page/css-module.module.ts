import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssModuleRoutingModule } from './css-module-routing.module';
import { Day4aComponent } from './Day4/day4a/day4a.component';
import { Day4pComponent } from './Day4/day4p/day4p.component';
import { Day5aComponent } from './Day5/day5a/day5a.component';
import { Day5pComponent } from './Day5/day5p/day5p.component';

import { Day6pComponent } from './Day6/day6p/day6p.component';
import { Day7pComponent } from './Day7/day7p/day7p.component';

import { Day8pComponent } from './Day8/day8p/day8p.component';
import { CSSComponent } from './css/css.component';



@NgModule({
  declarations: [
    Day4aComponent,
    Day4pComponent,
    Day5aComponent,
    Day5pComponent,
    Day6pComponent,
    Day7pComponent,
    Day8pComponent,
    CSSComponent
  ],
  imports: [
    CommonModule,
    CssModuleRoutingModule
  ]
})
export class CssModuleModule { }
