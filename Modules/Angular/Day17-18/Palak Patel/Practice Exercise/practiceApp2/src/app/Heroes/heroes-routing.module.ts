import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const HeroRoutes: Routes = [
  {path: 'heroes', component: HeroListComponent, data: { animation: 'heroes'}},
  {path: 'hero/:id', component: HeroDetailComponent, data: {animation: 'hero'}}
];

@NgModule({
  imports: [RouterModule.forChild(HeroRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }

