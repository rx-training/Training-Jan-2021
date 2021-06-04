import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationInterface } from 'src/app/models/Location';
import { RideTypeInterface } from 'src/app/models/RideType';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-rider-select-ride',
  templateUrl: './rider-select-ride.component.html',
  styleUrls: ['./rider-select-ride.component.css']
})
export class RiderSelectRideComponent implements OnInit {
  
  locationInput = 0;
  lat = 23.0225;
  lng = 72.5714;

  source:LocationInterface;
  destination:LocationInterface;
  selectedType:RideTypeInterface;
  locationList:LocationInterface[]=[];
  rideTypes:RideTypeInterface[] = [];
  isSelected = false;

  constructor(private tripService:TripService, private router:Router) { }

  ngOnInit(): void {
    this.source = this.tripService.source;
    this.destination = this.tripService.destination;
    this.tripService.getRideTypesForRider().subscribe(x => {
      this.rideTypes.push(...x);
    });
  }

  createTripAndRedirect() {
    
    this.tripService.setNewTrip()
    .subscribe(x => {
      console.log(x);
      this.tripService.currentTrip = x;
      setTimeout(()=>{
        this.router.navigate(['/rider/current-trip']);
      }, 1500);
    });
    // console.log(this.tripService.source);
  }

  calculateDistance() {
    return parseFloat((this.getDistanceFromLatLonInKm(this.source.latitude, this.source.longitude, this.destination.latitude, this.destination.longitude)).toFixed(2));
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
     
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
    }

    deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  setRideType(rideId) {
    for(var i=1; i <= this.rideTypes.length; i++)
    {
        if(this.rideTypes[i-1].rideTypeId == rideId) {
            document.getElementById('ride_' + this.rideTypes[i-1].rideTypeId).style.background = 'rgb(224, 235, 255)';
            document.getElementById('ride_' + this.rideTypes[i-1].rideTypeId).classList.add("active");
            // document.getElementById('bookRide-btn').disabled = false;
            this.isSelected=true;
            this.selectedType = this.rideTypes[i-1];
            this.tripService.selectedType = this.selectedType

        }
        else {
            document.getElementById('ride_' + this.rideTypes[i-1].rideTypeId).style.background = 'white';
            document.getElementById('ride_' + this.rideTypes[i-1].rideTypeId).classList.remove("active");
        }
    }
  }

}
