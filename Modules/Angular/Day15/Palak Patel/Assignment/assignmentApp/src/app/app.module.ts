import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HTMLComponent } from './html/html.component';
import { CSSComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { JQueryComponent } from './jquery/jquery.component';
import { MiniProjectComponent } from './mini-project/mini-project.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'html', component: HTMLComponent},
  {path: 'css', component: CSSComponent},
  {path: 'bootstrap', component: BootstrapComponent},
  {path: 'JS', component: JavaScriptComponent},
  {path: 'Jquery', component: JQueryComponent},
  {path: 'MiniProj', component: MiniProjectComponent}
]

@NgModule({
  declarations: [
    AppComponent,    
    HomePageComponent, 
    HTMLComponent, 
    CSSComponent, 
    BootstrapComponent, 
    JavaScriptComponent, 
    JQueryComponent, 
    MiniProjectComponent
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
