import { JavascriptModule } from './javascript/javascript.module';
import { CSSModule } from './css/css.module';
import { HTMLRoutingModule } from './html/html-routing.module';
import { HTMLModule } from './html/html.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CSSModule,
    JavascriptModule,
    HTMLModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
