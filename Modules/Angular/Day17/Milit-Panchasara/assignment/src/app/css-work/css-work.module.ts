import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssWorkRoutingModule } from './css-work-routing.module';
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
import { CssComponent } from './css/css.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    CssComponent,
    D4a1Component,
    D4p1Component,
    D4p24Component,
    D4pextraComponent,
    D5a1Component,
    D5p1Component,
    D6a1p7Component,
    D6p56Component,
    D6pextraComponent,
    D7a1Component,
    D8a1Component,
    D8p1Component,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    CssWorkRoutingModule
  ]
})
export class CssWorkModule { }
