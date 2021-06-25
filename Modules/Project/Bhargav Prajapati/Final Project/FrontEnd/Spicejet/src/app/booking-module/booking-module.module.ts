import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingModuleRoutingModule } from './booking-module-routing.module';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { ReactiveFormsModule} from '@angular/forms'
import { CheckInComponent } from './check-in/check-in.component';
import { MenageBookingComponent } from './menage-booking/menage-booking.component';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import { SearchedFlightComponent } from './searched-flight/searched-flight.component';
import { BookingofFlightComponent } from './bookingof-flight/bookingof-flight.component';
import { CheckInDetailsComponent } from './check-in-details/check-in-details.component';
import { MenageBookingDetailsComponent } from './menage-booking-details/menage-booking-details.component';
import { StatusOfFlightComponent } from './status-of-flight/status-of-flight.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { ViewMoreHotelDetailsComponent } from './view-more-hotel-details/view-more-hotel-details.component';
import { BookingHotelComponent } from './booking-hotel/booking-hotel.component';
import { SearchHotelBookingComponent } from './search-hotel-booking/search-hotel-booking.component';
import { HotelBookinDetailsComponent } from './hotel-bookin-details/hotel-bookin-details.component';



@NgModule({
  declarations: [
    FlightStatusComponent,
    CheckInComponent,
    MenageBookingComponent,
    FlightComponent,
    HotelComponent,
    SearchedFlightComponent,
    BookingofFlightComponent,
    CheckInDetailsComponent,
    MenageBookingDetailsComponent,
    StatusOfFlightComponent,
    SearchHotelComponent,
    ViewMoreHotelDetailsComponent,
    BookingHotelComponent,
    SearchHotelBookingComponent,
    HotelBookinDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingModuleRoutingModule
  ]
})
export class BookingModuleModule { }
