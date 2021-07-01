import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriverProfileInterface, DriverProfile } from 'src/app/models/DriverProfile';
import { DriversService } from '../drivers.service';
import { TripService } from 'src/app/services/trip.service';
import { Router } from '@angular/router';
import { LocationInterface } from 'src/app/models/Location';
import { RideTypeInterface } from 'src/app/models/RideType';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.css']
})
export class DriverHomeComponent implements OnInit, OnDestroy {
  profileData: DriverProfileInterface = new DriverProfile();
  tempTripInterval;
  ischanged:boolean = false;
  tempTrips = [];
  // locations:LocationInterface[] = [];
  // rideTypes:RideTypeInterface[] = [];

  constructor(private driverService: DriversService, private tripService:TripService, private router:Router) { 
    
  }
  ngOnDestroy(): void {
    clearInterval(this.tempTripInterval);
  }

  // routes to restrict user from accessing directly.
  restrictedRoutes = [
    '/driver',
    '/driver/choose-destination',
    '/driver/choose-ride',
    '/driver/current-trip',
  ];

  ngOnInit(): void {
    let getLocationsSub = this.tripService.getLocations().subscribe(x => {
      // this.locations = x;
      this.tripService.locations = x;
      getLocationsSub.unsubscribe();
    });

    let getRideTypesSub = this.tripService.getRideTypes().subscribe(x => {
      // this.rideTypes = x;
      this.tripService.rideTypes = x;
      getRideTypesSub.unsubscribe();
    });

    let getTempTripsSub = this.driverService.getTempTrips().subscribe(x => {
      console.log(x);
      if(x != null) {
        this.tempTrips = x;
        this.driverService.tempTrips = x;
      }
      else {
        this.driverService.tempTrips = [];
        this.tempTrips = [];
      }
      getTempTripsSub.unsubscribe();
    });

    this.tempTripInterval = setInterval(()=>{
      let getTempTripsSub = this.driverService.getTempTrips().subscribe(x => {
          if(x != null) {
            this.tempTrips = x;
            this.driverService.tempTrips = x;
          }
          else {
            this.driverService.tempTrips = [];
            this.tempTrips = [];
          }
        getTempTripsSub.unsubscribe();
      });
    }, 2000);

    // redirecting if one of above routes is used directly without completing all steps.
    if(this.restrictedRoutes.filter(x => x == this.router.url).length != 0) {
      this.router.navigate(['/driver/dashboard'])
    }

    this.driverService.profileSub.subscribe(x => {
      this.profileData = x;
    })

    //fetching profile data from api.
    let getProfileDataSub = this.driverService.getProfileData().subscribe(x => {
      this.profileData = x as DriverProfile;
      this.driverService.setData(x);
      getProfileDataSub.unsubscribe();
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
      getProfileDataSub.unsubscribe();
    });

    //get trips to check for ongoing trip.
    let getTripsForDriverSub = this.tripService.getTripsForDriver()
    .subscribe(x => {
      this.tripService.currentTrip = x.find(x => x.status == GlobalConstants.tripStatus.Started || x.status == GlobalConstants.tripStatus.New);
      if(this.tripService.currentTrip != null) {
        this.router.navigate(['/driver/current-trip']);
      }
      getTripsForDriverSub.unsubscribe();
    },
    error => {
      if(error.status == 0) {
        this.router.navigate(['/']);
      }
      getTripsForDriverSub.unsubscribe();
    });
    // console.clear();
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('session');
    this.router.navigate(['/']);
  }


}
