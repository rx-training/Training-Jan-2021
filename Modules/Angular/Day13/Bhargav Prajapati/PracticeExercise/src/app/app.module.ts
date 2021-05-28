import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponanatComponent } from './child-componanat/child-componanat.component';
import { PerentComponantComponent } from './perent-componant/perent-componant.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponanatComponent,
    PerentComponantComponent
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
