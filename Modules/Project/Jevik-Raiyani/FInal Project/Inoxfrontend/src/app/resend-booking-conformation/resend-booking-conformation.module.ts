import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResendBookingConformationRoutingModule } from './resend-booking-conformation-routing.module';
import { ResendBookingConformationComponent } from './resend-booking-conformation.component';


@NgModule({
  declarations: [
    ResendBookingConformationComponent
  ],
  imports: [
    CommonModule,
    ResendBookingConformationRoutingModule
  ]
})
export class ResendBookingConformationModule { }
