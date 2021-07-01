import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidInfoComponent } from '../covid-info/covid-info.component';
import { BookingHotelComponent } from './booking-hotel/booking-hotel.component';
import { BookingModuleComponent } from './booking-module.component';
import { BookingofFlightComponent } from './bookingof-flight/bookingof-flight.component';
import { CheckInDetailsComponent } from './check-in-details/check-in-details.component';
import { CheckInComponent } from './check-in/check-in.component';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { FlightComponent } from './flight/flight.component';
import { HotelBookinDetailsComponent } from './hotel-bookin-details/hotel-bookin-details.component';
import { HotelComponent } from './hotel/hotel.component';
import { MenageBookingDetailsComponent } from './menage-booking-details/menage-booking-details.component';
import { MenageBookingComponent } from './menage-booking/menage-booking.component';
import { SearchHotelBookingComponent } from './search-hotel-booking/search-hotel-booking.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { StatusOfFlightComponent } from './status-of-flight/status-of-flight.component';
import { ViewMoreHotelDetailsComponent } from './view-more-hotel-details/view-more-hotel-details.component';
const routes: Routes = [
  {path:"Booking",component:BookingModuleComponent,children:
  [
    {path:'',redirectTo:'Flight',pathMatch:'full'},
    {path:"flightstatus",component:FlightStatusComponent},
    {path:"Statusofflight",component:StatusOfFlightComponent},
    {path:"check-in",component:CheckInComponent},
    {path:"check-in-Details",component:CheckInDetailsComponent},
    {path:"MenageBooking",component:MenageBookingComponent},
    {path:"MenageBookingDetails",component:MenageBookingDetailsComponent},
    {path:"Flight",component:FlightComponent},
    {path:"BookingFlight/:id",component:BookingofFlightComponent},
    {path:"Hotel",component:HotelComponent},
    {path:"viewMore/:id",component:ViewMoreHotelDetailsComponent},
    {path:"Searchhotel",component:SearchHotelComponent},
    {path:"Covid-19",component:CovidInfoComponent},
    {path:"HotelBooking",component:BookingHotelComponent},
    {path:"SearchBooking",component:SearchHotelBookingComponent},
    {path:"UserBookingHotel",component:HotelBookinDetailsComponent}
    
      

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingModuleRoutingModule { }
