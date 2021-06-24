import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/city.service';
import { EventVenuesService } from 'src/app/events/event-venues.service';
import { ICity } from 'src/app/models/ICity';
import { IEventVenues } from 'src/app/models/IEventVenues';

@Component({
  selector: 'app-edit-event-venue',
  templateUrl: './edit-event-venue.component.html',
  styleUrls: ['./edit-event-venue.component.css']
})
export class EditEventVenueComponent implements OnInit, OnDestroy {

  addEventVenueForm;
  id: number = 0;
  cityName: string = '';
  eventVenue: IEventVenues = {address:'',cityId:0,name:'',totalTickets:0};
  citiesList: Array<ICity> = [];

  constructor(
    private fb: FormBuilder, 
    private eventvenuesService: EventVenuesService, 
    private cityService: CityService, 
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.addEventVenueForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      address: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      totalTickets: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      city:  ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.getEventVenue();
    this.getCities();
  }

  ngOnDestroy(){
    this.getEventVenue();
    this.getCities();
  }

  getEventVenue(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.eventvenuesService.getEventVenue(this.id)
    .subscribe(eventVenue => {
      this.eventVenue = eventVenue,
      this.getCity(eventVenue.cityId)
    })
  }

  getCity(id: number){
    this.cityService.getCity(id)
    .subscribe(city => {
      this.cityName = city.name,

      this.addEventVenueForm.patchValue({
        name: this.eventVenue.name,
        address: this.eventVenue.address,
        totalTickets: this.eventVenue.totalTickets,
        city:  this.cityName
      })
    })
  }

  getCities(){
    this.cityService.getCities()
    .subscribe(cities => {
      this.citiesList = cities
    })
  }

  eventVenueSubmit(){
    console.log(this.addEventVenueForm);

    var newEventVenue: any = {
      "eventVenueId": this.id,
      "name": this.addEventVenueForm.value.name,
      "address": this.addEventVenueForm.value.address,
      "totalTickets": parseInt(this.addEventVenueForm.value.totalTickets),
      "city": this.addEventVenueForm.value.city,
    }

    console.log(newEventVenue);
    this.updateVenue(newEventVenue);

    alert("Event Venue updated successfully");

    this.addEventVenueForm.reset();

    this.router.navigate(['/admin-dashboard/event-venues']);
  
  }

  updateVenue(newEventVenue: any){
    this.eventvenuesService.updateEventVenue(newEventVenue)
    .subscribe();
  }

}
