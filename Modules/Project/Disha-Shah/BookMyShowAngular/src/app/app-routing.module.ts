import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllActivitiesComponent } from './events/all-activities/all-activities.component';
import { AllEventsComponent } from './events/all-events/all-events.component';
import { AllPlaysComponent } from './events/all-plays/all-plays.component';
import { AllSportsComponent } from './events/all-sports/all-sports.component';
import { HomeAllMoviesEventsComponent } from './home-all-movies-events/home-all-movies-events.component';
import { HomeComponent } from './home/home.component';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { MovieComponent } from './movies/movie/movie/movie.component';
import { SeatingComponent } from './movies/movie/seating/seating.component';
import { SelectDateComponent } from './movies/movie/select-date/select-date.component';
import { SelectShowTimeComponent } from './movies/movie/select-show-time/select-show-time.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent,children: [
    {
      path: '', // child route path
      component: HomeAllMoviesEventsComponent, // child route component that the router renders
    },
    {
      path: 'movies',
      component: AllMoviesComponent, children: [
        {
          path: 'filter',
          component: AllMoviesComponent
        }
      ]
    },
    {
      path: 'events',
      component: AllEventsComponent, children: [
        {
          path: 'filter',
          component: AllEventsComponent
        }
      ]
    },
    {
      path: 'plays',
      component: AllPlaysComponent, children: [
        {
          path: 'filter',
          component: AllPlaysComponent
        }
      ]
    },
    {
      path: 'sports',
      component: AllSportsComponent, children: [
        {
          path: 'filter',
          component: AllSportsComponent
        }
      ]
    },
    {
      path: 'activities',
      component: AllActivitiesComponent, children: [
        {
          path: 'filter',
          component: AllActivitiesComponent
        }
      ]
    }
  ]  },
  {
    path: 'movies',
    children: [
      {
        path: ':name/:id',
        component: MovieComponent
      },
      {
        path: ':name/:id/showTimings/:language/:category',
        component: SelectShowTimeComponent, children: [
          {
            path: ':date',
            component: SelectDateComponent
          }
        ]
      },
      {
        path: ':name/:id/showTimings/:language/:category/:date/:theatre/:theatreId/:showTime/:numberOfSeats',
        component: SeatingComponent
      }
    ]
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
