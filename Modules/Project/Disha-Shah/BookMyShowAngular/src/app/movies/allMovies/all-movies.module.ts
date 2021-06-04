import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMoviesRoutingModule } from './all-movies-routing.module';

import { AllMoviesComponent } from './all-movies/all-movies.component';


@NgModule({
  declarations: [
    AllMoviesComponent
  ],
  imports: [
    CommonModule,
    AllMoviesRoutingModule
  ]
})
export class AllMoviesModule { }
