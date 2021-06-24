import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventTypeService } from 'src/app/events/event-type.service';
import { EventVenuesService } from 'src/app/events/event-venues.service';
import { EventsService } from 'src/app/events/events.service';
import { LanguageService } from 'src/app/language.service';
import { IEventTypes } from 'src/app/models/IEventTypes';
import { IEventVenues } from 'src/app/models/IEventVenues';
import { ILanguages } from 'src/app/models/ILanguages';
import {DatePipe} from '@angular/common';
import { PastDateValidator } from 'src/app/Validators/PastDateValidator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {

  addEventForm;

  eventImage: string = '';
  bgImage: string = '';
  artistImage: string = '';

  languagesList: Array<ILanguages> = [];
  eventTypesList: Array<IEventTypes> = [];
  eventVenuesList: Array<IEventVenues> = [];
  showTimingsList: Array<any> = [];

  selectVenue:string = '';
  selectVenueId: number = 0;

  constructor(
    private fb: FormBuilder, 
    private eventsService: EventsService,
    private languagesService: LanguageService,
    private eventTypesService: EventTypeService,
    private eventVenuesService: EventVenuesService,
    private datepipe: DatePipe
    ) {
    this.addEventForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      ticketPrice: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      image: ['', Validators.compose([Validators.maxLength(1000)])],
      time:  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern('[0-9]{0,2}h [0-9]{0,2}m')])],
      dateOfEvent: ['', Validators.compose([Validators.required, PastDateValidator()])],
      eventVenue: ['', Validators.required],
      showTime: ['', Validators.required],
      eventType: ['', Validators.required],
      minAge: [3, Validators.compose([Validators.required, Validators.pattern('[0-9]{1,2}')])],
      backgroundImage: ['', Validators.compose([Validators.required, Validators.maxLength(1000)])],
      about: ['', Validators.compose([Validators.maxLength(5000)])],
      note: [''],
      artistName: ['', Validators.compose([Validators.maxLength(500)])],
      artistImage: ['', Validators.compose([Validators.maxLength(1000)])],
      disclaimer: [''],
      faQs: [''],
      termsAndConditions: [''],
      languages: this.fb.array([])
    });
   }

  ngOnInit(): void {
    this.getLanguages();
    this.getEventTypes();
    this.getEventVenues();
  }

  ngOnDestroy(){
    this.getLanguages();
    this.getEventTypes();
    this.getEventVenues();
  }

  eventSubmit(){
    console.log(this.addEventForm);

    var newEvent: any = {
      "name": this.addEventForm.value.name,
      "ticketPrice": this.addEventForm.value.ticketPrice,
      "image": "images/" + this.eventImage,
      "time": this.addEventForm.value.time,
      "dateOfEvent": this.addEventForm.value.dateOfEvent,
      "eventVenue": this.addEventForm.value.eventVenue,
      "showTime": this.addEventForm.value.showTime,
      "eventType": this.addEventForm.value.eventType,
      "minAge": this.addEventForm.value.minAge,
      "backgroundImage": "images/" + this.bgImage,
      "about": this.addEventForm.value.about,
      "note": this.addEventForm.value.note,
      "artistName": this.addEventForm.value.artistName,
      "artistImage": "images/" + this.artistImage,
      "disclaimer": this.addEventForm.value.disclaimer,
      "faQs": this.addEventForm.value.faQs,
      "termsAndConditions": this.addEventForm.value.termsAndConditions,
      "languages": this.addEventForm.value.languages
    }

    console.log(newEvent);
    this.addEvent(newEvent);

    alert("Event added successfully");

    this.addEventForm.reset();

    window.location.reload();
  
  }

  addEvent(newEvent: any){
    this.eventsService.addEvent(newEvent)
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
    this.eventImage = e.target.value.split('\\')[2];
  }

  getBgImage(e: any){
    console.log(e.target.value.split('\\')[2]);
    this.bgImage = e.target.value.split('\\')[2];
  }

  getArtistImage(e: any){
    console.log(e.target.value.split('\\')[2]);
    this.artistImage = e.target.value.split('\\')[2];
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

}
