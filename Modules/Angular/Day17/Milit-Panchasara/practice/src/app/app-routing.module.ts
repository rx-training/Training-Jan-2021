import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { FirstComponent } from './first/first.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  { path: 'first-component/:name', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: 'hero/:id/:name', component: HeroDetailComponent },
  { path: 'x',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'y',   redirectTo: '/heroes', pathMatch: 'prefix' }, // e.g. => /y/xyz 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    //  {enableTracing : true }
     )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
