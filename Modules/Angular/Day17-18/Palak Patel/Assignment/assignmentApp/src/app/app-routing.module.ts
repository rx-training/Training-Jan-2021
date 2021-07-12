import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const appRoutes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'html', loadChildren: ()=> import('./html-page/html-module.module').then(m=>m.HtmlModuleModule)}, 
  // {path: 'html', component: HTMLComponent, children: [
  //     {path: 'day3a', component: Day3aComponent},
  //     {path: 'day3p', component: Day3pComponent}
  // ]},
  {path: 'css', loadChildren:()=>import('./css-page/css-module.module').then(m=>m.CssModuleModule)},
  {path: 'JS', loadChildren:()=>import('./js-page/js-module.module').then(m=>m.JsModuleModule)},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
