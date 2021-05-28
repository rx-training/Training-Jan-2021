import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLModule } from './HTML/html.module';
import { CSSModule } from './CSS/css.module';
import { JSModule } from './JS/js.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Day3Module } from './HTML/day3/day3.module';
import { Day4Module } from './CSS/day4/day4.module';
import { Day5Module } from './CSS/day5/day5.module';
import { Day6Module } from './CSS/day6/day6.module';
import { Day7Module } from './CSS/day7/day7.module';
import { Day8Module } from './CSS/day8/day8.module';
import { Day15Module } from './JS/day15/day15.module';
import { Day16Module } from './JS/day16/day16.module';
import { Day17Module } from './JS/day17/day17.module';
import { Day18Module } from './JS/day18/day18.module';
import { Day19Module } from './JS/day19/day19.module';
import { Day20Module } from './JS/day20/day20.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HTMLModule,
    CSSModule,
    JSModule,
    Day3Module,
    Day4Module,
    Day5Module,
    Day6Module,
    Day7Module,
    Day8Module,
    Day15Module,
    Day16Module,
    Day17Module,
    Day18Module,
    Day19Module,
    Day20Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
