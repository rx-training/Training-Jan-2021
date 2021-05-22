import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Day3Component } from './day3/day3.component';
import { Day3practicalsComponent } from './day3practicals/day3practicals.component';
import { Day3assignmentComponent } from './day3assignment/day3assignment.component';
import { Cssd4assignComponent } from './cssd4assign/cssd4assign.component';
import { Cssd5assignComponent } from './cssd5assign/cssd5assign.component';
import { Cssd6assignComponent } from './cssd6assign/cssd6assign.component';
import { Cssd7assignComponent } from './cssd7assign/cssd7assign.component';
import { Cssd8assignComponent } from './cssd8assign/cssd8assign.component';
import { Jsd15assignComponent } from './jsd15assign/jsd15assign.component';
import { Jsd16assignComponent } from './jsd16assign/jsd16assign.component';
import { Jsd17assignComponent } from './jsd17assign/jsd17assign.component';
import { Jsd18assignComponent } from './jsd18assign/jsd18assign.component';
import { Jsd20assignComponent } from './jsd20assign/jsd20assign.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    NavbarComponent,
    PageNotFoundComponent,
    Day3Component,
    Day3practicalsComponent,
    Day3assignmentComponent,
    Cssd4assignComponent,
    Cssd5assignComponent,
    Cssd6assignComponent,
    Cssd7assignComponent,
    Cssd8assignComponent,
    Jsd15assignComponent,
    Jsd16assignComponent,
    Jsd17assignComponent,
    Jsd18assignComponent,
    Jsd20assignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
