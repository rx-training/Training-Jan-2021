import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap-page/bootstrap/bootstrap.component';
import { CSSComponent } from './css-page/css/css.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Day3aComponent } from './html-page/Day3/day3a/day3a.component';
import { Day3pComponent } from './html-page/Day3/day3p/day3p.component';
import { HTMLComponent } from './html-page/html/html.component';
import { JQueryComponent } from './jquery-page/jquery/jquery.component';
import { JavaScriptComponent } from './js-page/java-script/java-script.component';
import { MiniProjectComponent } from './mini-project/mini-project.component';

export const appRoutes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'html', component: HTMLComponent, 
  children:[
    {path: 'day3Assignment', component: Day3aComponent},
    {path: 'day3Practice', component: Day3pComponent}
  ]},
  {path: 'css', component: CSSComponent},
  {path: 'bootstrap', component: BootstrapComponent},
  {path: 'JS', component: JavaScriptComponent},
  {path: 'Jquery', component: JQueryComponent},
  {path: 'MiniProj', component: MiniProjectComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
