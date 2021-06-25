import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
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

  // routes to restrict user from accessing directly.
  restrictedRoutes = [
    '/rider',
    '/rider/choose-destination',
    '/rider/choose-ride',
    '/rider/current-trip',
  ];

  ngOnInit(): void {
    // redirecting if one of above routes is used directly without completing all steps.
    if(this.restrictedRoutes.filter(x => x == this.router.url).length != 0) {
      this.router.navigate(['/rider/dashboard'])
    }
    //delay to hide page for 1 second.
    // document.getElementsByTagName('body')[0].hidden = true;
    // setTimeout(()=>{
    //   document.getElementsByTagName('body')[0].hidden = false;
    // }, 1000);

    this.riderService.profileSub.subscribe(x => {
      this.profileData = x;
    })

    //fetching profile data from api.
    this.riderService.getProfileData().subscribe(x => {
      this.profileData = x as RiderProfile;
      this.riderService.setData(x);
    }, 
    error => {
      console.log(error);
      if(error.status == 0) {

        this.router.navigate(['/']);
      }
      else if(error.status == 500){       // if server error returns, terminate user session and redirect.
        localStorage.removeItem('user');
        localStorage.removeItem('session');
        this.router.navigate(['/']);
        alert(error.error.message);
      }
    });

    //get trips to check for ongoing trip.
    this.tripService.getTrips()
    .subscribe(x => {
      this.tripService.currentTrip = x.find(x => x.status == GlobalConstants.tripStatus.Started || x.status == GlobalConstants.tripStatus.New);
      if(this.tripService.currentTrip != null) {
        this.router.navigate(['/rider/current-trip']);
      }
    },
    error => {
      if(error.status == 0) {

        this.router.navigate(['/']);
      }
    });
    // console.clear();
  }

}
