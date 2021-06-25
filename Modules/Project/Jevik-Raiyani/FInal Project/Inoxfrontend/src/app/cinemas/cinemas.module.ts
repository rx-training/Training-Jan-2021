import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemasRoutingModule } from './cinemas-routing.module';
import { CinemasComponent } from './cinemas.component';
import { BookNowCinemaComponent } from './book-now-cinema/book-now-cinema.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CinemasComponent,
    BookNowCinemaComponent
  ],
  imports: [
    CommonModule,
    CinemasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class CinemasModule { }
