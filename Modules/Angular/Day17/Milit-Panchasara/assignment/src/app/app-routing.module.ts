import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component: WelcomeComponent},
  {path:"html", 
    loadChildren: () => import('./html-work/html-work.module').then(m => m.HtmlWorkModule)
  },
  {path:"css", 
    loadChildren: () => import('./css-work/css-work.module').then(m => m.CssWorkModule)
  },
  {path:"javascript",
  loadChildren: () => import('./js-work/js-work.module').then(m => m.JsWorkModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
