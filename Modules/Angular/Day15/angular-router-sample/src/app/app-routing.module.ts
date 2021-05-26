import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisComponent } from './crisis/crisis.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path : '', component : HeroComponent
    
  },
  {
    path : 'crisis',component : CrisisComponent
  },
  {
    path : 'heroes', component : HeroComponent,
    children : [{path : ':id', component : HeroDetailComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
