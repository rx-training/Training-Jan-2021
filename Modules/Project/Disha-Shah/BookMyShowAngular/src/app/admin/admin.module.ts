import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import {DatePipe} from '@angular/common';
import { MovieBookingsComponent } from './movie-bookings/movie-bookings.component';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventBookingsComponent } from './event-bookings/event-bookings.component';
import { UsersComponent } from './users/users.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { EventsDetailComponent } from './events-detail/events-detail.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { AddNavbarComponent } from './add-navbar/add-navbar.component';
import { EventVenuesComponent } from './event-venues/event-venues.component';
import { EventVenuesDetailComponent } from './event-venues-detail/event-venues-detail.component';

@NgModule({
  declarations: [
    MoviesComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieBookingsComponent,
    EventsComponent,
    AddEventComponent,
    EditEventComponent,
    EventBookingsComponent,
    UsersComponent,
    MoviesDetailComponent,
    EventsDetailComponent,
    NavbarsComponent,
    AddNavbarComponent,
    EventVenuesComponent,
    EventVenuesDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [DatePipe]
})
export class AdminModule { }
