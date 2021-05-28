import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 {
   path:'html',loadChildren:()=>import('./html/html.module').then(m=>m.HtmlModule),
   data:{preload:true}
 },
 {
  path:'css',loadChildren:()=>import('./css/css.module').then(m=>m.cssModule),
  data:{preload:true}
},
 {
  path:'js',loadChildren:()=>import('./javascript/javascript.module').then(m=>m.JsModule),
  data:{preload:true}
},
 
 
  { path: '',   redirectTo: '/html', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
