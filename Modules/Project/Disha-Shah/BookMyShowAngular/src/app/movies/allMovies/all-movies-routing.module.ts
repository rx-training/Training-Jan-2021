import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';

const routes: Routes = [
  {
    path: '',
    component: AllMoviesComponent, children: [
      {
        path: 'filter',
        component: AllMoviesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllMoviesRoutingModule { }
