import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SeatingComponent } from './seating/seating.component';
import { SelectDateComponent } from './select-date/select-date.component';
import { SelectShowTimeComponent } from './select-show-time/select-show-time.component';

const routes: Routes = [
  {
    path: '',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
