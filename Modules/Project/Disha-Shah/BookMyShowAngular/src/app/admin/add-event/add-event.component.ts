import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventTypeService } from 'src/app/events/event-type.service';
import { EventVenuesService } from 'src/app/events/event-venues.service';
import { EventsService } from 'src/app/events/events.service';
import { LanguageService } from 'src/app/language.service';
import { IEventTypes } from 'src/app/models/IEventTypes';
import { IEventVenues } from 'src/app/models/IEventVenues';
import { ILanguages } from 'src/app/models/ILanguages';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

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

  constructor(
    private fb: FormBuilder, 
    private eventsService: EventsService,
    private languagesService: LanguageService,
    private eventTypesService: EventTypeService,
    private eventVenuesService: EventVenuesService,
    private datepipe: DatePipe
    ) {
    this.addEventForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      ticketPrice: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      image: ['', Validators.required],
      time:  ['', Validators.compose([Validators.required])],
      dateOfEvent: ['', Validators.required],
      eventVenue: ['', Validators.required],
      showTime: ['', Validators.required],
      eventType: ['', Validators.required],
      minAge: [3, Validators.compose([Validators.required, Validators.pattern('[0-9]{1,3}')])],
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
    this.getLanguages();
    this.getEventTypes();
    this.getEventVenues();
  }

}
