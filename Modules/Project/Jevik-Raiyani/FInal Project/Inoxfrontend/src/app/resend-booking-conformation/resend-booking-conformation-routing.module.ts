import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResendBookingConformationComponent } from './resend-booking-conformation.component';

const routes: Routes = [{ path: '', component: ResendBookingConformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResendBookingConformationRoutingModule { }
