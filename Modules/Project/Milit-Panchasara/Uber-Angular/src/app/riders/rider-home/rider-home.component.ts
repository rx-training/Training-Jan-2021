import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiderProfile, RiderProfileInterface } from 'src/app/models/RiderProfile';
import { TripService } from 'src/app/services/trip.service';
import { RiderService } from '../rider.service';

@Component({
  selector: 'app-rider-home',
  templateUrl: './rider-home.component.html',
  styleUrls: ['./rider-home.component.css'],
  // providers: [RiderService]
})
export class RiderHomeComponent implements OnInit {
  profileData: RiderProfileInterface = new RiderProfile();
  constructor(private riderService: RiderService, private tripService:TripService, private router:Router) { }

  restrictedRoutes = [
    '/rider',
    '/rider/choose-destination',
    '/rider/choose-ride',
    '/rider/current-trip',
  ];

  ngOnInit(): void {
    if(this.restrictedRoutes.filter(x => x == this.router.url).length != 0) {
      this.router.navigate(['/rider/dashboard'])
    }
    document.getElementsByTagName('body')[0].hidden = true;
    setTimeout(()=>{
      document.getElementsByTagName('body')[0].hidden = false;
    }, 1000);

    this.riderService.profileSub.subscribe(x => {
      this.profileData = x;
    })

    this.riderService.getProfileData().subscribe(x => {
      this.profileData = x as RiderProfile;
      this.riderService.setData(x);
    }, 
    error => {
      if(error.status == 0) {
        // alert("Something went wrong!");
        this.router.navigate(['/']);
      }
    });
    this.tripService.getTrips()
    .subscribe(x => {
      this.tripService.currentTrip = x.find(x => x.status == 'Started' || x.status == 'New');
      if(this.tripService.currentTrip != null) {
        this.router.navigate(['/rider/current-trip']);
      }
    },
    error => {
      if(error.status == 0) {
        // alert("Something went wrong!");
        this.router.navigate(['/']);
      }
    });
    // console.clear();
  }

}
