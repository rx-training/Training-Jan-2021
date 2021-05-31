import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CssWorkModule } from './css-work/css-work.module';
import { HtmlWorkModule } from './html-work/html-work.module';
import { JsWorkModule } from './js-work/js-work.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CssWorkModule,
    HtmlWorkModule,
    JsWorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
