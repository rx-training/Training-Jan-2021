import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookNowCinemaComponent } from './book-now-cinema/book-now-cinema.component';
import { CinemasComponent } from './cinemas.component';

const routes: Routes = [{ path: '', component: CinemasComponent },
                        {path:'book-now/:movieid/:cinemacity/:cinemaname',component:BookNowCinemaComponent}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class CinemasRoutingModule { }
