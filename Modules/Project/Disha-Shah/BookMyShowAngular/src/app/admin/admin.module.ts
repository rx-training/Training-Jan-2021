import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    MoviesComponent,
    AddMovieComponent,
    EditMovieComponent
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
