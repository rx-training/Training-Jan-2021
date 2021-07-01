import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriversService } from '../drivers.service';
import { LocationInterface } from 'src/app/models/Location';
import { RideTypeInterface } from 'src/app/models/RideType';
import { TripService } from 'src/app/services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent implements OnInit,OnDestroy {
  lat = 23.0225;
  lng = 72.5714;
  tempTrips = [];
  
  localDriverService:DriversService;
  constructor(private driverService: DriversService, private tripService:TripService, private router:Router) { 
    this.localDriverService = this.driverService;
  }

  ngOnInit(): void {
    this.initMap();
    this.tempTrips = this.driverService.tempTrips;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


  getLocationName(locationId) {
    return this.tripService.locations.find(x => x.locationId == locationId).locationName;
  }

  acceptTrip(riderId) {
    let acceptTempTripsSub = this.driverService.acceptTempTrips(riderId).subscribe(x => {
      console.log(x);
      if(x != null) {
        this.tripService.currentTrip = x;
        let removeTempTripsSub = this.driverService.removeTempTrips(riderId).subscribe(x => {
          console.log(x);
          removeTempTripsSub.unsubscribe();
        });
        this.driverService.tempTrips.splice(this.driverService.tempTrips.findIndex(x => x.key.item2 == riderId), 1);
        this.tripService.currentTrip = x;
        this.router.navigate(['/driver/current-trip']);
      }
      acceptTempTripsSub.unsubscribe();
    });
  }

  rejectTrip(riderId) {
    let removeTempTripsSub = this.driverService.removeTempTrips(riderId).subscribe(x => {
      console.log(x);
      removeTempTripsSub.unsubscribe();
    });
  }

  interval:any;
  isCentered = false;
  map: google.maps.Map;
  
  locationPoint: google.maps.Marker

  infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow();
  initMap(): void {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 23.0225, lng: 72.5714 },
      zoom: 15,
      fullscreenControl: false,
      rotateControl:true
    });

    this.locationPoint = new google.maps.Marker({
      position:  { lat: 23.0225, lng: 72.5714 },
      icon:{
        url: "../../../assets/img/live_location_marker.png",
        scaledSize: new google.maps.Size(40, 40,"px","px"), // scaled size
      },
      map: this.map
    });

    this.interval = setInterval(() => { 
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.locationPoint.setPosition( new google.maps.LatLng(pos.lat, pos.lng));
          
            if(!this.isCentered)
              this.map.setCenter(pos);
            this.isCentered = true;
          },
          () => {
            this.infoWindow.setPosition(this.map.getCenter()!);
            this.infoWindow.setContent(
              false
              ? "Error: The Geolocation service failed."
              : "Error: Your browser doesn't support geolocation."
            );
            this.infoWindow.open(this.map);
            // this.handleLocationError(true, this.infoWindow, );
          }
        );
      } else {
        // Browser doesn't support Geolocation
        this.infoWindow.setPosition(this.map.getCenter()!);
          this.infoWindow.setContent(
            false 
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
          );
          this.infoWindow.open(this.map);
        // this.handleLocationError(false, this.infoWindow, this.map.getCenter()!);
      }
    }, 2000);
  }

}
