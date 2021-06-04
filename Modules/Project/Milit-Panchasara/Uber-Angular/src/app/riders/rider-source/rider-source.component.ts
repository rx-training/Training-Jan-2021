import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationInterface } from 'src/app/models/Location';
import { TripService } from 'src/app/services/trip.service';
import { RiderService } from '../rider.service';

@Component({
  selector: 'app-rider-source',
  templateUrl: './rider-source.component.html',
  styleUrls: ['./rider-source.component.css']
})
export class RiderSourceComponent implements OnInit {
  locationInput = 0;
  lat = 23.0225;
  lng = 72.5714;

  locationList:LocationInterface[]=[];

  constructor(private tripService:TripService,private riderService:RiderService, private router:Router) { }

  ngOnInit(): void {
    this.tripService.getLocationsForRider().subscribe(x => {
      this.locationList.push(...x);
    },
    error => {
      if(error.status == 0) {
        // alert("Something went wrong!");
        this.router.navigate(['/']);
      }
    });
    
  }

  setSourceAndRedirect() {

    if(this.locationInput == 0 || this.locationInput == null) {
      return;
    }
    this.tripService.source = this.locationList.find(x => x.locationId == this.locationInput);

    this.router.navigate(['/rider/choose-destination']);
  }

}
