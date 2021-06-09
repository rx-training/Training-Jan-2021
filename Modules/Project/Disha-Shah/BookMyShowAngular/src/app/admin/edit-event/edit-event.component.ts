import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypeService } from 'src/app/events/event-type.service';
import { EventVenuesService } from 'src/app/events/event-venues.service';
import { EventsService } from 'src/app/events/events.service';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { IEventTypes } from 'src/app/models/IEventTypes';
import { IEventVenues } from 'src/app/models/IEventVenues';
import { ILanguages } from 'src/app/models/ILanguages';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  addEventForm;

  eventImage: string = '';
  bgImage: string = '';
  artistImage: string = '';

  eventsList: Array<IActivities> = [];
  events: Array<IActivities> = [];
  event: IActivities = {address: "", city: "", cityId: 0, dateOfEvent: new Date(), event: "", eventId: 0, eventType: "", eventTypeId: 0, eventVenue: "", eventVenueId: 0, eventVenueShowTimingId: 0, image: "", language: "", languageId: 0, languages: [], showTime: "", showTimingId: 0, showTimings: [], ticketPrice: 0, time:"", totalTickets: 0};
  uniqueEventsList: Array<any> = [];
  eventBgImg: string = '';
  languages: Array<any> = [];
  minAge: number = 0;
  note: string = '';
  about: string = '';
  disclaimer: string = '';
  termsConditions: string = ''; 
  artistName: string = '';
  selectedLanguages: Array<string> = [];
  faQs: string = '';

  languagesList: Array<ILanguages> = [];
  eventTypesList: Array<IEventTypes> = [];
  eventVenuesList: Array<IEventVenues> = [];
  showTimingsList: Array<any> = [];

  selectVenue:string = '';
  selectVenueId: number = 0;

  id: number = 0;

  eventSubmit(){
    console.log(this.addEventForm);

    let selectedLanguages: Array<string> = [];

    this.languagesList.forEach(element => {
      const ele = document.getElementById(element.language1) as unknown as HTMLInputElement;
      if(ele.checked == true){
        selectedLanguages.push(ele.value)
      }
    })

    console.log(selectedLanguages)

    var newEvent: any = {
      "eventId": this.id,
      "name": this.addEventForm.value.name,
      "ticketPrice": this.addEventForm.value.ticketPrice,
      "image": this.eventImage,
      "time": this.addEventForm.value.time,
      "dateOfEvent": this.addEventForm.value.dateOfEvent,
      "eventVenue": this.addEventForm.value.eventVenue,
      "showTime": this.addEventForm.value.showTime,
      "eventType": this.addEventForm.value.eventType,
      "minAge": this.addEventForm.value.minAge,
      "backgroundImage": this.bgImage,
      "about": this.addEventForm.value.about,
      "note": this.addEventForm.value.note,
      "artistName": this.addEventForm.value.artistName,
      "artistImage": this.artistImage,
      "disclaimer": this.addEventForm.value.disclaimer,
      "faQs": this.addEventForm.value.faQs,
      "termsAndConditions": this.addEventForm.value.termsAndConditions,
      "languages": selectedLanguages
    }

    console.log(newEvent);
    this.updateEvent(newEvent);

    alert("Event updated successfully");

    this.addEventForm.reset();

    this.router.navigate(['/admin-dashboard/events']);
  
  }

  updateEvent(newEvent: any){
    this.eventsService.updateEvent(newEvent)
    .subscribe();
  }

  selectLanguage(i: number, e: any){
    const languages: FormArray = this.addEventForm.get('languages') as FormArray;

    if (e.target.checked) {

      languages.push(new FormControl(e.target.value));

    } else {

       const index = languages.controls.findIndex(x => x.value === e.target.value);

       languages.removeAt(index);

    }
  }

  getImage(e: any){
    console.log(e.target.value.split('\\')[2]);
    this.eventImage ="images/" +  e.target.value.split('\\')[2];
  }

  getBgImage(e: any){
    console.log(e.target.value.split('\\')[2]);
    this.bgImage ="images/" +  e.target.value.split('\\')[2];
  }

  getArtistImage(e: any){
    console.log(e.target.value.split('\\')[2]);
    this.artistImage ="images/" +  e.target.value.split('\\')[2];
  }

  getLanguages(){
    this.languagesService.getLanguages()
    .subscribe(languages => {
      this.languagesList = languages
    })
  }

  getEventTypes(){
    this.eventTypesService.getEventTypes()
    .subscribe(eventTypes => {
      this.eventTypesList = eventTypes
    })
  }

  getEventVenues(){
    this.eventVenuesService.getEventVenues()
    .subscribe(eventVenues => {
      this.eventVenuesList = eventVenues
    })
  }

  getShowTiming(){
    this.eventVenuesList.forEach(item => {
      if(item.name == this.selectVenue){
        this.selectVenueId = item.eventVenueId
      }
    })
    this.eventVenuesService.getShowTimingsByEventVenue(this.selectVenueId)
    .subscribe(showTimings => {
      this.showTimingsList = showTimings
    })
  }

  getEvents(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.eventsService.getEvent(this.id)
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

      this.event = this.events[0],

      console.log(this.event)
      
    })
  }

  getUniqueEvents(){
    this.eventsService.getUniqueEvents()
    .subscribe(events => {
      this.uniqueEventsList = events,

      this.uniqueEventsList.forEach(item => {
        if(item.eventId == this.event.eventId){
          this.eventBgImg = item.backgroundImage
          this.minAge = item.minAge
          this.note = item.note
          this.about = item.about
          this.disclaimer = item.disclaimer
          this.termsConditions = item.termsAndConditions
          this.artistImage = item.artistImage
          this.artistName = item.artistName
          this.faQs = item.faQs
        }
      }),

      
      this.event.languages.forEach(item => {
        this.selectedLanguages.push(item)
      }),

      this.addEventForm.patchValue({
        name: this.event.event,
        time:  this.event.time,
        image: this.event.image,
        dateOfEvent: this.datepipe.transform(this.event.dateOfEvent, 'yyyy-MM-dd'),
        about: this.about,
        backgroundImage: this.eventBgImg,
        artistImage: this.artistImage,
        artistName: this.artistName,
        ticketPrice: this.event.ticketPrice,
        eventType: this.event.eventType,
        eventVenue: this.event.eventVenue,
        showTime: this.event.showTime.hours + ':' + this.event.showTime.minutes,
        minAge: this.minAge,
        note: this.note,
        disclaimer: this.disclaimer,
        faQs: this.faQs,
        termsAndConditions: this.termsConditions
      }),

      this.eventImage = this.addEventForm.value.image,
      this.bgImage = this.addEventForm.value.backgroundImage,

      this.selectedLanguages.forEach(item => {
        this.languagesList.forEach(element => {
          if(item == element.language1){
            const ele = document.getElementById(element.language1) as unknown as HTMLInputElement;
            ele.checked = true;
          }
        })
      }),

      console.log(this.addEventForm)
      console.log(this.bgImage)
      console.log(this.selectedLanguages)

    })
  }

  constructor(
    private fb: FormBuilder, 
    private eventsService: EventsService,
    private languagesService: LanguageService,
    private eventTypesService: EventTypeService,
    private eventVenuesService: EventVenuesService,
    private route: ActivatedRoute,
    private datepipe: DatePipe,
    private router: Router
    ) {
    this.addEventForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      ticketPrice: [0, Validators.required],
      image: ['', Validators.required],
      time:  ['', Validators.compose([Validators.required])],
      dateOfEvent: ['', Validators.required],
      eventVenue: ['', Validators.required],
      showTime: ['', Validators.required],
      eventType: ['', Validators.required],
      minAge: [3, Validators.required],
      backgroundImage: ['', Validators.required],
      about: ['', Validators.required],
      note: ['', Validators.required],
      artistName: [''],
      artistImage: [''],
      disclaimer: [''],
      faQs: [''],
      termsAndConditions: [''],
      languages: this.fb.array([])
    });
   }

  ngOnInit(): void {
    this.getEvents();
    this.getUniqueEvents();
    this.getLanguages();
    this.getEventTypes();
    this.getEventVenues();
  }

}
