import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PracticeComponent } from './practice/practice.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import {FormsModule } from '@angular/forms';
import { LinkComponent } from './link/link.component'

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NgForComponent,
    NgSwitchComponent,
    PracticeComponent,
    StyleClassComponent,
    NgIfComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
