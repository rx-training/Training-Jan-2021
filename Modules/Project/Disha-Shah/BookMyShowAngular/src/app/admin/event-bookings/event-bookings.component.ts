import { Component, OnInit } from '@angular/core';
import { EventBookingService } from 'src/app/events/event-booking.service';
import { IEventBookings } from 'src/app/models/IEventBookings';

@Component({
  selector: 'app-event-bookings',
  templateUrl: './event-bookings.component.html',
  styleUrls: ['./event-bookings.component.css']
})
export class EventBookingsComponent implements OnInit {

  bookingsList: Array<IEventBookings> = [];

  getBookings(){
    this.bookingService.getEventBookings()
    .subscribe(bookings => {
      this.bookingsList = bookings,
      console.log(this.bookingsList)
    })
  }

  constructor(private bookingService: EventBookingService) { }

  ngOnInit(): void {
    this.getBookings();
  }
}
