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

  removeEventVenue(id: number){
    this.eventVenuesList = this.eventVenuesList.filter(h => h.eventVenueId !== id);
    this.eventVenuesService.deleteEventVenue(id).subscribe();
  }

  constructor(private eventVenuesService: EventVenuesService) { }

  ngOnInit(): void {
    this.getEventVenues();
  }

}
