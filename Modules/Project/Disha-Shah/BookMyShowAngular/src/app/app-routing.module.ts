import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAllMoviesEventsComponent } from './home-all-movies-events/home-all-movies-events.component';
import { HomeComponent } from './home/home.component';
import { MoviesSearchComponent } from './movies/movies-search/movies-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent,children: [
    {
      path: '', // child route path
      component: HomeAllMoviesEventsComponent, // child route component that the router renders
    },
    {
      path: 'movies',
      loadChildren: () => import('./movies/allMovies/all-movies.module').then(m => m.AllMoviesModule)
    },
    {
      path: 'events',
      loadChildren: () => import('./events/allEvents/all-events.module').then(m => m.AllEventsModule)
    },
    {
      path: 'plays',
      loadChildren: () => import('./events/allPlays/all-plays.module').then(m => m.AllPlaysModule)
    },
    {
      path: 'sports',
      loadChildren: () => import('./events/allSports/all-sports.module').then(m => m.AllSportsModule)
    },
    {
      path: 'activities',
      loadChildren: () => import('./events/allActivities/all-activities.module').then(m => m.AllActivitiesModule)
    }
  ]  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'explore',
    component: MoviesSearchComponent
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
