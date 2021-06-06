import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/auth/user.guard';
import { ConfirmEventComponent } from './confirm-event/confirm-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':name/:id',
        component: EventDetailComponent
      },
      {
        path: ':name/:id/:numberOfSeats/confirmBooking',
        component: ConfirmEventComponent,
        canActivate: [UserGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
