import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService } from 'src/app/events/events.service';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  eventsList: Array<IActivities> = [];
  events: Array<IActivities> = [];
  uniqueEventsList: Array<any> = [];
  languagesList: Array<ILanguages> = [];
  languages: Array<any> = [];

  constructor(private eventsService: EventsService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getEvents();
    this.getLanguages();
  }

  ngOnDestroy(){
    this.getEvents();
    this.getLanguages();
  }

  getEvents(){
    this.eventsService.getEvents()
    .subscribe(events => {
      this.eventsList = events,
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
      }),

      this.eventsService.getUniqueEvents()
      .subscribe(events => {
        this.uniqueEventsList = events,
        this.events.forEach(item => {
          this.uniqueEventsList.forEach(element => {
            if(item.eventId == element.eventId){
              item.about = element.about,
              item.artistImage = element.artistImage,
              item.artistName = element.artistName,
              item.backgroundImage = element.backgroundImage,
              item.disclaimer = element.disclaimer,
              item.faqs = element.faQs,
              item.minAge = element.minAge,
              item.note = element.note,
              item.termsAndConditions = element.termsAndConditions
            }
          })
        })
      }),
      
      console.log(this.events)
    })
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }

  removeEvent(id: number){
    var c = confirm("Are you sure you want to delete?");
    if(c==true)
    {
      this.events = this.events.filter(h => h.eventId !== id);
      this.eventsService.deleteEvent(id).subscribe();
    }
  }

}
