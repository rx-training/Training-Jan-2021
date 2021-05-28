import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLModule } from './html/html.module';
import {CSSModule} from './css/css.module';
import {JAVASCRIPTModule} from './javascript/javascript.module';
import { HomeComponent } from './home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    HTMLModule,
    CSSModule,
    JAVASCRIPTModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
