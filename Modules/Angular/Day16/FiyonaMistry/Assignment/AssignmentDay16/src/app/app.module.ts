import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLComponent } from './html/html.component';
import { CSSComponent } from './css/css.component';
import { JSComponent } from './js/js.component';
import { Day3Component } from './Days/day3/day3.component';
import { Day4Component } from './Days/day4/day4.component';
import { Day5Component } from './Days/day5/day5.component';
import { Day6Component } from './Days/day6/day6.component';
import { Day7Component } from './Days/day7/day7.component';
import { Day8Component } from './Days/day8/day8.component';
import { Day15Component } from './Days/day15/day15.component';
import { Day16Component } from './Days/day16/day16.component';
import { Day17Component } from './Days/day17/day17.component';
import { Day18Component } from './Days/day18/day18.component';
import { Day19Component } from './Days/day19/day19.component';
import { Day20Component } from './Days/day20/day20.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HTMLComponent,
    CSSComponent,
    JSComponent,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component,
    Day15Component,
    Day16Component,
    Day17Component,
    Day18Component,
    Day19Component,
    Day20Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
