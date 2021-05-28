import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSSComponent } from './css/css.component';
import { HTMLComponent } from './html/html.component';
import { JSComponent } from './js/js.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'html', component : HTMLComponent },
  { path : 'css', component : CSSComponent },
  { path : 'js', component : JSComponent },
  { path : '', redirectTo : '/html', pathMatch : 'full' },
  { path : 'not-found', component : PageNotFoundComponent },
  { path : '**', redirectTo : 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
