import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { Day3Component } from './day3/day3.component';
import { CssComponent } from './css/css.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { JsComponent } from './js/js.component';
import { Day15Component } from './day15/day15.component';
import { Day16Component } from './day16/day16.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    Day3Component,
    CssComponent,
    Day4Component,
    Day5Component,
    Day6Component,
    JsComponent,
    Day15Component,
    Day16Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
