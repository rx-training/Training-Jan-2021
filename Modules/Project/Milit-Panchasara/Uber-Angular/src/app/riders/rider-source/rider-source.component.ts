import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LocationInterface } from 'src/app/models/Location';
import { TripService } from 'src/app/services/trip.service';
import { RiderService } from '../rider.service';

@Component({
  selector: 'app-rider-source',
  templateUrl: './rider-source.component.html',
  styleUrls: ['./rider-source.component.css']
})
export class RiderSourceComponent implements OnInit, OnDestroy {
  locationInput = 0;
  lat = 23.0225;
  lng = 72.5714;

  locationList:LocationInterface[]=[];

  constructor(private tripService:TripService,private riderService:RiderService, private router:Router) { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.initMap();
    this.tripService.getLocations().subscribe(x => {
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

  interval:any;
  isCentered = false;
  map: google.maps.Map;
  locationPoint: google.maps.Marker;
  infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow();
  initMap(): void {

    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 23.0225, lng: 72.5714 },
      zoom: 15,
      fullscreenControl:false
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
    }, 5000);
  }
}
