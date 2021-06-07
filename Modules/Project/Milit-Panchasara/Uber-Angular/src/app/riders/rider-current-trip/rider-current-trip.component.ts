import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiderTripInterface } from 'src/app/models/RiderTrip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-rider-current-trip',
  templateUrl: './rider-current-trip.component.html',
  styleUrls: ['./rider-current-trip.component.css']
})
export class RiderCurrentTripComponent implements OnInit {

  // coordinates for center of map in background.
  lat = 23.0225;
  lng = 72.5714;

  trip:RiderTripInterface;
  constructor(private tripService:TripService, private router:Router) { }

  ngOnInit(): void {
    //redirect if no current trip available.
    if(this.tripService.currentTrip == null) {
      this.router.navigate(['/rider/dashboard']);
    }
    
    this.trip = this.tripService.currentTrip;
    console.log(this.trip);

    // start and complete trip after 5 seconds and 10 seconds interval respectively.
    if(this.tripService.currentTrip.status == 'New') {
      setTimeout(() => {
        this.tripService.startNewTrip().subscribe(x => {
          this.trip = x;
          this.tripService.currentTrip = x;
          console.log(x);
          setTimeout(() => {
            this.tripService.completeTrip().subscribe(x => {
              console.log(x);
              this.trip = null;
              this.router.navigate(['/rider/trip-rating']);
            });
          }, 10000);
        });
      },5000);
    }
    else {
      setTimeout(() => {
        this.tripService.completeTrip().subscribe(x => {
          console.log(x);
          this.trip = null;
          this.router.navigate(['/rider/trip-rating']);
        });
      }, 10000);
    }
  }

  //cancelling trip.
  cancelTrip() {
    this.tripService.cancelTrip()
    .subscribe(x => {
      console.log(x);
      this.tripService.currentTrip = null;
      this.trip = null;
      alert('Trip has been cancelled successfully');
      this.router.navigate(['/rider/dashboard']);
    });
  }

}
