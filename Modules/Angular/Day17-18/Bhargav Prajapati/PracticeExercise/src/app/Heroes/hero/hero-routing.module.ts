import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { HeroesDetailsComponent } from '../heroes-details/heroes-details.component';

const routes: Routes =
 [
    {path:'hero',component:HeroListComponent},
    {path:'hero/:id',component:HeroesDetailsComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
