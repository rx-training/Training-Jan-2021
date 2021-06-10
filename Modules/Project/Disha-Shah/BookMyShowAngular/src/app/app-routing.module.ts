import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './auth/admin.guard';
import { UserGuard } from './auth/user.guard';
import { HomeAllMoviesEventsComponent } from './home-all-movies-events/home-all-movies-events.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserBookingHistoryComponent } from './user-booking-history/user-booking-history.component';

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
    path: 'events',
    loadChildren: () => import('./events/event/event.module').then(m => m.EventModule)
  },
  {
    path: 'explore',
    component: SearchComponent
  },
  {
    path: 'bookinghistory',
    component: UserBookingHistoryComponent
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
