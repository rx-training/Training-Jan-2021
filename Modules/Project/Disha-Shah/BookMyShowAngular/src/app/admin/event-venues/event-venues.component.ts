import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventVenuesService } from 'src/app/events/event-venues.service';
import { IEventVenues } from 'src/app/models/IEventVenues';

@Component({
  selector: 'app-event-venues',
  templateUrl: './event-venues.component.html',
  styleUrls: ['./event-venues.component.css']
})
export class EventVenuesComponent implements OnInit, OnDestroy {

  eventVenuesList: Array<IEventVenues> = [];

  constructor(private eventVenuesService: EventVenuesService) { }

  ngOnInit(): void {
    this.getEventVenues();
  }

  ngOnDestroy(){
    this.getEventVenues();
  }

  getEventVenues(){
    this.eventVenuesService.getEventVenues()
    .subscribe(eventVenues => {
      this.eventVenuesList = eventVenues
    })
  }

  removeEventVenue(id: number){
    var c = confirm("Are you sure you want to delete?");
    if(c==true)
    {
      this.eventVenuesList = this.eventVenuesList.filter(h => h.eventVenueId !== id);
      this.eventVenuesService.deleteEventVenue(id).subscribe();
    }
  }

}
