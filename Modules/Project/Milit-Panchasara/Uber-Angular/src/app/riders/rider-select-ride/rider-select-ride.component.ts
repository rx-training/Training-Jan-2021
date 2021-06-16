import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LocationInterface } from 'src/app/models/Location';
import { RideTypeInterface } from 'src/app/models/RideType';
import { TripService } from 'src/app/services/trip.service';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-rider-select-ride',
  templateUrl: './rider-select-ride.component.html',
  styleUrls: ['./rider-select-ride.component.css']
})
export class RiderSelectRideComponent implements OnInit, OnDestroy {
  
  locationInput = 0;
  lat = 23.0225;
  lng = 72.5714;
  searching:boolean = false;

  source:LocationInterface;
  destination:LocationInterface;
  selectedType:RideTypeInterface;
  locationList:LocationInterface[]=[];
  rideTypes:RideTypeInterface[] = [];
  isSelected = false;
  searchTimeout;

  constructor(private tripService:TripService, private router:Router) { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.source = this.tripService.source;
    this.destination = this.tripService.destination;
    this.tripService.getRideTypes().subscribe(x => {
      this.rideTypes.push(...x);
    });
    this.initMap();
  }

  searchDriver() {
    this.searching =  true;
    this.tripService.setTempTrip();
    let tripAcceptedInterval = setInterval(()=> {
      this.tripService.getTrips().subscribe(x => {
        let tripExists = x.find(x => x.status == 'New' || x.status == 'Started');
        if(tripExists != undefined) {
          this.tripService.currentTrip = tripExists;
          clearInterval(tripAcceptedInterval);
          this.router.navigate(['/rider/current-trip']);
        }
      });
    }, 2000);

    this.searchTimeout = setTimeout(() => {
      this.tripService.removeTempTripFromRider(true);
      
      this.searching = false;
      
    },120*1000); //after 1 minute

    // this.tripService.setNewTrip()
    // .subscribe(x => {
    //   console.log(x);
    //   this.tripService.currentTrip = x;
    //   setTimeout(()=>{
    //     this.router.navigate(['/rider/current-trip']);
    //   }, 1500);
    // });
  }

  cancelTripSearch() {
    clearTimeout(this.searchTimeout);
    this.tripService.removeTempTripFromRider(false);
    this.searching = false;
  }

  // calculating distance using coordinates of source and destination.
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

  interval:any;
  isCentered = false;
  map: google.maps.Map;
  locationPoint: google.maps.Marker;
  infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow();

  initMap(): void {
    
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 23.0225, lng: 72.5714 },
      zoom: 12,
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

    new google.maps.Marker({
      position: new google.maps.LatLng(this.source.latitude, this.source.longitude),
      map: this.map
    });

    new google.maps.Marker({
      position: new google.maps.LatLng(this.destination.latitude, this.destination.longitude),
      map: this.map
    });

    this.map.setCenter(new google.maps.LatLng(this.destination.latitude, this.destination.longitude));
    
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var request:google.maps.DirectionsRequest = {
      origin: new google.maps.LatLng(this.source.latitude, this.source.longitude),
      destination: new google.maps.LatLng(this.destination.latitude, this.destination.longitude),
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request,(response, status) => {
      if (status == "OK") {
        directionsRenderer.setDirections(response);
      } else {
        console.log(status);
        // window.alert("Directions request failed due to " + status);
      }
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
