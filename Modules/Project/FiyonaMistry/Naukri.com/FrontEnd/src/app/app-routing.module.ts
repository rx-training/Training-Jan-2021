import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuestGuard } from './shared/Guard/guest.guard';
import { LoggedInGuard } from './shared/Guard/logged-in.guard';

const routes: Routes = [
  { path : '', loadChildren : () => import('./HomePage/home-page.module').then(m => m.HomePageModule), canActivate : [GuestGuard] },
  { path : 'registerNow', loadChildren : () => import('./RegisterNow/register-now.module').then(m => m.RegisterNowModule), canActivate : [GuestGuard] },
  { path : 'login', component : LoginComponent, canActivate : [GuestGuard] },
  { path : 'searchJobResult', loadChildren : () => import('./SearchJobResults/search-job-results.module').then(m => m.SearchJobResultsModule) },
  { path : 'home', loadChildren : () => import('./LoginHomePage/login-home-page.module').then(m => m.LoginHomePageModule) },
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
