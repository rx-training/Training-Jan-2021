import { JavaScriptComponentComponent } from './java-script-component/java-script-component.component';
import { CSSComponentComponent } from './csscomponent/csscomponent.component';
import { HTMLComponentComponent } from './htmlcomponent/htmlcomponent.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' , component : HomeComponentComponent},
  {path : 'HTML', component : HTMLComponentComponent},
  {path : 'CSS' , component : CSSComponentComponent},
  {path : 'Javascript' , component :JavaScriptComponentComponent},
  {path : '**' , redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
