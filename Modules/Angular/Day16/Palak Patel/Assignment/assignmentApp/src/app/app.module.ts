import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HTMLComponent } from './html-page/html/html.component';
import { CSSComponent } from './css-page/css/css.component';
import { BootstrapComponent } from './bootstrap-page/bootstrap/bootstrap.component';
import { JavaScriptComponent } from './js-page/java-script/java-script.component';
import { JQueryComponent } from './jquery-page/jquery/jquery.component';
import { MiniProjectComponent } from './mini-project/mini-project.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Day3aComponent } from './html-page/Day3/day3a/day3a.component';
import { Day3pComponent } from './html-page/Day3/day3p/day3p.component';



@NgModule({
  declarations: [
    AppComponent,    
    HomePageComponent, 
    HTMLComponent, 
    CSSComponent, 
    BootstrapComponent, 
    JavaScriptComponent, 
    JQueryComponent, 
    MiniProjectComponent, Day3aComponent, Day3pComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
