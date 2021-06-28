import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBookingService } from 'src/app/events/event-booking.service';
import { EventsService } from 'src/app/events/events.service';
import { IEventBookings } from 'src/app/models/IEventBookings';

@Component({
  selector: 'app-event-bookings',
  templateUrl: './event-bookings.component.html',
  styleUrls: ['./event-bookings.component.css']
})
export class EventBookingsComponent implements OnInit, OnDestroy {

  bookingsList: Array<IEventBookings> = [];

  getAllEventBookingsSub: Subscription;
  getEventsSub: Subscription;

  constructor(private bookingService: EventBookingService, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  ngOnDestroy(){
    this.getAllEventBookingsSub.unsubscribe();
    this.getEventsSub.unsubscribe();
  }

  getBookings(){
    this.getAllEventBookingsSub = this.bookingService.getEventBookings()
    .subscribe(bookings => {
      this.bookingsList = bookings,
      this.bookingsList.forEach(item => {
        this.getEventsSub = this.eventsService.getEvent(item.eventId)
        .subscribe(events => {
          item.event = events[0]
          item.event.dateOfEvent = new Date(item.event.dateOfEvent).getFullYear() + '-' + (new Date(item.event.dateOfEvent).getMonth() + 1) + '-' + new Date(item.event.dateOfEvent).getDate();
        })  
        
        item.bookingDate = new Date(item.bookingDate).getFullYear() + '-' + (new Date(item.bookingDate).getMonth() + 1) + '-' + new Date(item.bookingDate).getDate();
      })
      console.log(this.bookingsList)
    })
  }

}
