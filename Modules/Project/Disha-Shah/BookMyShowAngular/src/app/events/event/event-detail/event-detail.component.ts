import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  eventsList: Array<IActivities> = [];
  events: Array<IActivities> = [];
  event: IActivities = {address: "", city: "", cityId: 0, dateOfEvent: new Date(), event: "", eventId: 0, eventType: "", eventTypeId: 0, eventVenue: "", eventVenueId: 0, eventVenueShowTimingId: 0, image: "", language: "", languageId: 0, languages: [], showTime: "", showTimingId: 0, showTimings: [], ticketPrice: 0, time:"", totalTickets: 0};
  uniqueEventsList: Array<any> = [];
  eventBgImg: string = '';
  languagesList: Array<ILanguages> = [];
  languages: Array<any> = [];
  minAge: number = 0;
  dateToWatch: string = '';
  note: string = '';
  about: string = '';
  disclaimer: string = '';
  termsConditions: string = '';
  numberOfSeats: number = 1;

  constructor(private eventsService: EventsService, private languageService: LanguageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEvents();
    this.getUniqueEvents();
    this.getLanguages();
  }

  ngOnDestroy(){
    this.getEvents();
    this.getUniqueEvents();
    this.getLanguages();
  }

  getEvents(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.eventsService.getEvent(id)
    .subscribe(events => {
      this.eventsList = events
      
      this.events = this.eventsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.events.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.eventsList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime, "showTimeId": item.showTimingId});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))]
      })

      this.event = this.events[0];
      
      console.log(this.events)
      console.log(this.event)
      console.log(this.eventsList)
    })
  }

  getUniqueEvents(){
    this.eventsService.getUniqueEvents()
    .subscribe(events => {
      this.uniqueEventsList = events,
      console.log(this.uniqueEventsList)

      this.uniqueEventsList.forEach(item => {
        if(item.eventId == this.event.eventId){
          this.eventBgImg = item.backgroundImage
          this.minAge = item.minAge
          this.dateToWatch = new Date(this.event.dateOfEvent).getFullYear() + '-' + (new Date(this.event.dateOfEvent).getMonth() + 1) + '-' + new Date(this.event.dateOfEvent).getDate()
          this.note = item.note
          this.about = item.about
          this.disclaimer = item.disclaimer
          this.termsConditions = item.termsAndConditions
        }
      })

    })
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }

  noOfSeats(e: any){
    this.numberOfSeats = e.target.value;
  }
  
  doLogin(){
    if(!localStorage.logged_in_user){
      alert("Please login to book your show");
    }
  }

}
