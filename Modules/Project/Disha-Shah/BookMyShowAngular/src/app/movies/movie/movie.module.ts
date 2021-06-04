import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie/movie.component';
import { SeatingComponent } from './seating/seating.component';
import { SelectDateComponent } from './select-date/select-date.component';
import { SelectShowTimeComponent } from './select-show-time/select-show-time.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MovieComponent,
    SeatingComponent,
    SelectDateComponent,
    SelectShowTimeComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
