import { Component, OnInit } from '@angular/core';
import { EventVenuesService } from 'src/app/events/event-venues.service';
import { IEventVenues } from 'src/app/models/IEventVenues';

@Component({
  selector: 'app-event-venues',
  templateUrl: './event-venues.component.html',
  styleUrls: ['./event-venues.component.css']
})
export class EventVenuesComponent implements OnInit {

  eventVenuesList: Array<IEventVenues> = [];

  getEventVenues(){
    this.eventVenuesService.getEventVenues()
    .subscribe(eventVenues => {
      this.eventVenuesList = eventVenues
    })
  }

  constructor(private eventVenuesService: EventVenuesService) { }

  ngOnInit(): void {
    this.getEventVenues();
  }

}
