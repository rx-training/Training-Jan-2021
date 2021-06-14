import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RiderTripInterface } from 'src/app/models/RiderTrip';
import { TripService } from 'src/app/services/trip.service';
import { LocationInterface } from 'src/app/models/Location';

@Component({
  selector: 'app-rider-current-trip',
  templateUrl: './rider-current-trip.component.html',
  styleUrls: ['./rider-current-trip.component.css']
})
export class RiderCurrentTripComponent implements OnInit, OnDestroy {

  // coordinates for center of map in background.
  lat = 23.0225;
  lng = 72.5714;

  locations:LocationInterface[] = [];
  source:LocationInterface;
  destination:LocationInterface;

  trip:RiderTripInterface;
  constructor(private tripService:TripService, private router:Router) { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    //redirect if no current trip available.
    if(this.tripService.currentTrip == null) {
      this.router.navigate(['/rider/dashboard']);
    }

    this.trip = this.tripService.currentTrip;

    this.tripService.getLocations().subscribe(x => {
      this.tripService.locations = x;
      this.locations = x;
      this.source = this.locations.find(x => x.locationName == this.trip.sourceLocation);
      this.destination = this.locations.find(x => x.locationName == this.trip.destinationLocation);
    })
    
    this.initMap();

    // start and complete trip after 5 seconds and 10 seconds interval respectively.
    let interval = setInterval(()=> {
        this.tripService.getCurrentTrip(this.tripService.currentTrip.tripId).subscribe(x => {
          // let tripExists = x.find(x => x.status == 'New');
          console.log(x);
          
          if(x != null) {
            if(x.status == 'New' || x.status == 'Started'){
              this.tripService.currentTrip = x;
              this.trip = x;
            }
            else {
              this.trip = null;
              clearInterval(interval);
              if(x.status == "Cancelled"){
                alert("Trip has been cancelled by the driver.");
              }
              else {
                alert("Your trip is completed.");
              }
              this.router.navigate(['/rider/trip-rating']);
            }
          }
        });
    }, 2000);
  }

  //cancelling trip.
  cancelTrip() {
    this.tripService.cancelTrip()
    .subscribe(x => {
      console.log(x);
      this.tripService.currentTrip = null;
      this.trip = null;
      clearInterval(this.interval);
      alert('Trip has been cancelled successfully');
      this.router.navigate(['/rider/dashboard']);
    });
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

            new google.maps.Marker({
              position: new google.maps.LatLng(this.source.latitude, this.source.longitude),
              map: this.map
            });
        
            new google.maps.Marker({
              position: new google.maps.LatLng(this.destination.latitude, this.destination.longitude),
              map: this.map
            });
            
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
    }, 3000);
  }
}
