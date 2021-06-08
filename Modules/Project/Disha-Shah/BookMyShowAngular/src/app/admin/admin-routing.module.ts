import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../auth/admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EventBookingsComponent } from './event-bookings/event-bookings.component';
import { EventsComponent } from './events/events.component';
import { MovieBookingsComponent } from './movie-bookings/movie-bookings.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          { path: '',
            component: AdminDashboardComponent 
          },
          { path: 'movies', 
            component: MoviesComponent
          },
          {
            path: 'movies/:name/:id',
            component: EditMovieComponent
          },
          { path: 'movie-bookings', 
            component: MovieBookingsComponent
          },
          { path: 'events', 
            component: EventsComponent
          },
          {
            path: 'events/:name/:id',
            component: EditEventComponent
          },
          { path: 'event-bookings', 
            component: EventBookingsComponent
          },
          { path: 'users', 
            component: UsersComponent
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
