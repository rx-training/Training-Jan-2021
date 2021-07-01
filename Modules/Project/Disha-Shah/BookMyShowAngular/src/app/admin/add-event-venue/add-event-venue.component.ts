import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/city.service';
import { EventVenuesService } from 'src/app/events/event-venues.service';
import { ICity } from 'src/app/models/ICity';
import { IShowTimings } from 'src/app/models/IShowTimings';
import { ShowTimingsService } from 'src/app/show-timings.service';

@Component({
  selector: 'app-add-event-venue',
  templateUrl: './add-event-venue.component.html',
  styleUrls: ['./add-event-venue.component.css']
})
export class AddEventVenueComponent implements OnInit, OnDestroy {

  addEventVenueForm;

  citiesList: Array<ICity> = [];
  showTimingsList: Array<IShowTimings> = [];

  getAllCitiesSub: Subscription;
  getAllShowTimingsSub: Subscription;

  constructor(
    private fb: FormBuilder, 
    private eventVenuesService: EventVenuesService,
    private citiesService: CityService,
    private showTimingsService: ShowTimingsService
    ) {
    this.addEventVenueForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      address: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      totalTickets: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      city:  ['', Validators.compose([Validators.required])],
      showTime: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.getCities();
    this.getShowTimings();
  }

  ngOnDestroy(){
    this.getAllCitiesSub.unsubscribe();
    this.getAllShowTimingsSub.unsubscribe();
  }

  eventVenueSubmit(){
    console.log(this.addEventVenueForm);

    var newEventVenue: any = {
      "name": this.addEventVenueForm.value.name,
      "address": this.addEventVenueForm.value.address,
      "totalTickets": parseInt(this.addEventVenueForm.value.totalTickets),
      "city": this.addEventVenueForm.value.city,
      "showTime": this.addEventVenueForm.value.showTime
    }

    console.log(newEventVenue);
    this.addVenue(newEventVenue);

    alert("Event Venue added successfully");

    this.addEventVenueForm.reset();

    window.location.reload();
  
  }

  addVenue(newEventVenue: any){
    this.eventVenuesService.addEventVenue(newEventVenue)
    .subscribe();
  }

  getCities(){
    this.getAllCitiesSub = this.citiesService.getCities()
    .subscribe(cities => {
      this.citiesList = cities
    })
  }

  getShowTimings(){
    this.getAllShowTimingsSub = this.showTimingsService.getShowTimings()
    .subscribe(showTimings => {
      this.showTimingsList = showTimings
    })
  }

}
