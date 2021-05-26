import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Assignment1Component } from './html-work/day3/assignment1/assignment1.component';
import { Practice1Component } from './html-work/day3/practice1/practice1.component';
import { Practice2Component } from './html-work/day3/practice2/practice2.component';
import { D4a1Component } from './css-work/day4/d4a1/d4a1.component';
import { D4p1Component } from './css-work/day4/d4p1/d4p1.component';
import { D4p24Component } from './css-work/day4/d4p24/d4p24.component';
import { D4pextraComponent } from './css-work/day4/d4pextra/d4pextra.component';
import { D5a1Component } from './css-work/day5/d5a1/d5a1.component';
import { D5p1Component } from './css-work/day5/d5p1/d5p1.component';
import { D6a1p7Component } from './css-work/day6/d6a1p7/d6a1p7.component';
import { D6p56Component } from './css-work/day6/d6p56/d6p56.component';
import { D6pextraComponent } from './css-work/day6/d6pextra/d6pextra.component';
import { D7a1Component } from './css-work/day7/d7a1/d7a1.component';
import { D8a1Component } from './css-work/day8/d8a1/d8a1.component';
import { D8p1Component } from './css-work/day8/d8p1/d8p1.component';
import { D15a1Component } from './js-work/day15/d15a1/d15a1.component';
import { D15p1Component } from './js-work/day15/d15p1/d15p1.component';
import { D15p2Component } from './js-work/day15/d15p2/d15p2.component';
import { D15pe1Component } from './js-work/day15/d15pe1/d15pe1.component';
import { D15pe2Component } from './js-work/day15/d15pe2/d15pe2.component';
import { D15pe3Component } from './js-work/day15/d15pe3/d15pe3.component';
import { D15pe4Component } from './js-work/day15/d15pe4/d15pe4.component';
import { D15pe5Component } from './js-work/day15/d15pe5/d15pe5.component';
import { D15pe6Component } from './js-work/day15/d15pe6/d15pe6.component';
import { D15pe7Component } from './js-work/day15/d15pe7/d15pe7.component';
import { D16a1Component } from './js-work/day16/d16a1/d16a1.component';
import { D16p1Component } from './js-work/day16/d16p1/d16p1.component';
import { D16pe1Component } from './js-work/day16/d16pe1/d16pe1.component';
import { D17a1Component } from './js-work/day17/d17a1/d17a1.component';
import { D17p1Component } from './js-work/day17/d17p1/d17p1.component';
import { D17p2Component } from './js-work/day17/d17p2/d17p2.component';
import { D17pe1Component } from './js-work/day17/d17pe1/d17pe1.component';
import { D18a1Component } from './js-work/day18/d18a1/d18a1.component';
import { D18p1Component } from './js-work/day18/d18p1/d18p1.component';
import { D18p2Component } from './js-work/day18/d18p2/d18p2.component';
import { D18p3Component } from './js-work/day18/d18p3/d18p3.component';
import { D18pe1Component } from './js-work/day18/d18pe1/d18pe1.component';
import { D19p1Component } from './js-work/day19/d19p1/d19p1.component';
import { D19p2Component } from './js-work/day19/d19p2/d19p2.component';
import { D19p3Component } from './js-work/day19/d19p3/d19p3.component';
import { D19p4Component } from './js-work/day19/d19p4/d19p4.component';
import { D19p5Component } from './js-work/day19/d19p5/d19p5.component';
import { D19p6Component } from './js-work/day19/d19p6/d19p6.component';
import { D20a1Component } from './js-work/day20/d20a1/d20a1.component';
import { D20p1SetdataComponent } from './js-work/day20/d20p1-setdata/d20p1-setdata.component';
import { D20p1GetdataComponent } from './js-work/day20/d20p1-getdata/d20p1-getdata.component';
import { D20pe1Component } from './js-work/day20/d20pe1/d20pe1.component';
import { D20pe2Component } from './js-work/day20/d20pe2/d20pe2.component';
import { D20pe3Component } from './js-work/day20/d20pe3/d20pe3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    WelcomeComponent,
    Assignment1Component,
    Practice1Component,
    Practice2Component,
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
    D15a1Component,
    D15p1Component,
    D15p2Component,
    D15pe1Component,
    D15pe2Component,
    D15pe3Component,
    D15pe4Component,
    D15pe5Component,
    D15pe6Component,
    D15pe7Component,
    D16a1Component,
    D16p1Component,
    D16pe1Component,
    D17a1Component,
    D17p1Component,
    D17p2Component,
    D17pe1Component,
    D18a1Component,
    D18p1Component,
    D18p2Component,
    D18p3Component,
    D18pe1Component,
    D19p1Component,
    D19p2Component,
    D19p3Component,
    D19p4Component,
    D19p5Component,
    D19p6Component,
    D20a1Component,
    D20p1SetdataComponent,
    D20p1GetdataComponent,
    D20pe1Component,
    D20pe2Component,
    D20pe3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
