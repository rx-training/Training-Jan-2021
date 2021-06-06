import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/auth/user.guard';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
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
      },
      {
        path: ':name/:id/showTimings/:language/:category/:date/:theatre/:theatreId/:showTime/:numberOfSeats/confirmBooking',
        component: ConfirmBookingComponent,
        canActivate: [UserGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
