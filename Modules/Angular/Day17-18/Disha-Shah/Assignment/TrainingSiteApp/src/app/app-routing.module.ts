import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'html',
    loadChildren: () => import('./html_work/html.module').then(m => m.HtmlModule)
  },{
    path: 'css',
    loadChildren: () => import('./css_work/css.module').then(m => m.CssModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript_work/javascript.module').then(m => m.JavascriptModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
