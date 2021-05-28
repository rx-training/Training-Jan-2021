import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'crisis-center', component : CrisisListComponent },
  { path : 'heroes', component : HeroListComponent },
  { path : '', redirectTo : '/heroes', pathMatch : 'full' },   //  the router should select the route to the HeroListComponent only when the entire URL matches ''
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
