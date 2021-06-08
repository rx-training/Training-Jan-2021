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
    UsersComponent
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
