import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../auth/admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'movies', component: MoviesComponent},
          {
            path: 'movies/:name/:id',
            component: EditMovieComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
