import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookNowComponent } from './book-now/book-now.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { UserDetailOfSeatComponent } from './book-seat/user-detail-of-seat/user-detail-of-seat.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'booknow/:id', component: BookNowComponent },
  { path: 'booknow/BookSeat/:id', component: BookSeatComponent },

  {
    path: 'booknow/BookSeat/UserDetail/:id/:SeatArray',
    component: UserDetailOfSeatComponent,
    canActivate: [AuthGuard]
  },

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  { path: 'ResendBookingConformation', loadChildren: () => import('./resend-booking-conformation/resend-booking-conformation.module').then(m => m.ResendBookingConformationModule) },

  { path: 'cinemas', loadChildren: () => import('./cinemas/cinemas.module').then(m => m.CinemasModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
