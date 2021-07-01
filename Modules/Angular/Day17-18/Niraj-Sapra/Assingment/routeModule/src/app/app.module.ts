import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlModule } from './html/html.module';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';
import { Day15Component } from './js/day15/day15.component';
import { CssModule } from './css/css.module';
import { JsModule } from './js/js.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CssComponent,
    JsComponent,
    Day15Component,
  ],
  imports: [
    BrowserModule,
    HtmlModule,
    FormsModule,
    AppRoutingModule,
    CssModule,
    JsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
