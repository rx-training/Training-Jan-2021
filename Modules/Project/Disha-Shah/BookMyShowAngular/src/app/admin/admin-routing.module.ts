import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../auth/admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EventBookingsComponent } from './event-bookings/event-bookings.component';
import { EventsDetailComponent } from './events-detail/events-detail.component';
import { EventsComponent } from './events/events.component';
import { MovieBookingsComponent } from './movie-bookings/movie-bookings.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarsComponent } from './navbars/navbars.component';
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
            path: 'movies/detail/:name/:id',
            component: MoviesDetailComponent
          },
          {
            path: 'movies/edit/:name/:id',
            component: EditMovieComponent
          },
          { path: 'movie-bookings', 
            component: MovieBookingsComponent
          },
          { path: 'events', 
            component: EventsComponent
          },
          {
            path: 'events/detail/:name/:id',
            component: EventsDetailComponent
          },
          {
            path: 'events/edit/:name/:id',
            component: EditEventComponent
          },
          { path: 'event-bookings', 
            component: EventBookingsComponent
          },
          { path: 'users', 
            component: UsersComponent
          },
          { path: 'navbar-components', 
            component: NavbarsComponent
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
