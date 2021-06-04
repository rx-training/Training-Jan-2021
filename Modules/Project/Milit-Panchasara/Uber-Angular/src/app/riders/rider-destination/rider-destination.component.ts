import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationInterface } from 'src/app/models/Location';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-rider-destination',
  templateUrl: './rider-destination.component.html',
  styleUrls: ['./rider-destination.component.css']
})
export class RiderDestinationComponent implements OnInit {

  locationInput = 0;
  lat = 23.0225;
  lng = 72.5714;

  source:LocationInterface;
  locationList:LocationInterface[]=[];

  constructor(private tripService:TripService, private router:Router) { }

  ngOnInit(): void {
    this.source = this.tripService.source;
    this.tripService.getLocationsForRider().subscribe(x => {
      x = x.filter(x => x.locationId != this.tripService.source.locationId)
      this.locationList.push(...x);
    });
  }

  setSourceAndRedirect() {

    if(this.locationInput == 0 || this.locationInput == null) {
      return;
    }
    this.tripService.destination = this.locationList.find(x => x.locationId == this.locationInput);
    // console.log(this.tripService.source);

    this.router.navigate(['/rider/choose-ride']);
  }

}
