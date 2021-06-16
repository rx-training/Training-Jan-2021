import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import * as CryptoJS from 'crypto-js';
import { LoggedInUserInterface } from '../models/LoggedInUser';
import { RideTypeInterface } from '../models/RideType';
import { LocationInterface } from '../models/Location';
import { Observable, Subject } from 'rxjs';
import { RiderTripInterface } from '../models/RiderTrip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  source:LocationInterface;
  destination:LocationInterface;
  rideType:RiderTripInterface;
  selectedType = null;
  locations:LocationInterface[] = [];
  rideTypes:RideTypeInterface[] = [];

  currentTrip:RiderTripInterface = null;

  tempTripSubject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  getLocations():Observable<LocationInterface[]> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});
    return this.httpClient.get<LocationInterface[]>(GlobalConstants.apiBaseURL + "/locations", {headers:header});
}

  getRideTypes():Observable<RideTypeInterface[]> {
    return this.httpClient.get<RideTypeInterface[]>(GlobalConstants.apiBaseURL + "/rideTypes");
  }

  // setNewTrip(): Observable<RiderTripInterface> {
  //   let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
  //   let user:LoggedInUserInterface = JSON.parse(decryptedUser);
  //   let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

  //   let body = {
  //     SourceId: this.source.locationId,
  //     DestinationId: this.destination.locationId,
  //     RideTypeId: this.selectedType.rideTypeId
  //   };

  //   return this.httpClient.post<RiderTripInterface>(GlobalConstants.apiBaseURL + "/rider/"+ user.id +"/trips", body, {headers:header});
  // }

  getTrips() {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);

    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.get<RiderTripInterface[]>(GlobalConstants.apiBaseURL + "/rider/" + user.id + "/trips", {headers:header});
  }

  getTripsForDriver() {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);

    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.get<RiderTripInterface[]>(GlobalConstants.apiBaseURL + "/driver/" + user.id + "/trips", {headers:header});
  }

  getCurrentTrip(tripId) {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);

    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.get<RiderTripInterface>(GlobalConstants.apiBaseURL + "/rider/" + user.id + "/trips/"+tripId, {headers:header});
  }
  
  startNewTrip(): Observable<RiderTripInterface> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      TripId: this.currentTrip.tripId,
      RiderId: this.currentTrip.riderId,
      Action: "TripStarted" 
    };

    return this.httpClient.put<RiderTripInterface>(GlobalConstants.apiBaseURL + "/driver/"+ user.id +"/trips/" + this.currentTrip.tripId, body, {headers:header});
  }

  completeTrip(): Observable<RiderTripInterface> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      TripId: this.currentTrip.tripId,
      RiderId: this.currentTrip.riderId,
      Action: "TripCompleted",
      PaymentMethod: "Cash"
    };

    return this.httpClient.put<RiderTripInterface>(GlobalConstants.apiBaseURL + "/driver/"+ user.id +"/trips/" + this.currentTrip.tripId, body, {headers:header});
  }

  cancelTrip(): Observable<RiderTripInterface> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      TripId: this.currentTrip.tripId,
      RiderId: user.id,
      Action: "TripCancelled",
      PaymentMethod: "Cash",
      CancelledBy: "Rider"
    };

    return this.httpClient.put<RiderTripInterface>(GlobalConstants.apiBaseURL + "/rider/"+ user.id +"/trips/" + this.currentTrip.tripId, body, {headers:header});
  }

  cancelTripFromDriver(): Observable<RiderTripInterface> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      TripId: this.currentTrip.tripId,
      RiderId: this.currentTrip.riderId,
      Action: "TripCancelled",
      PaymentMethod: "Cash",
      CancelledBy: "Driver"
    };

    return this.httpClient.put<RiderTripInterface>(GlobalConstants.apiBaseURL + "/driver/"+ user.id +"/trips/" + this.currentTrip.tripId, body, {headers:header});
  }

  setRatings(rating:number) {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      TripId: this.currentTrip.tripId,
      RiderId: user.id,
      DriverId: this.currentTrip.driverId,
      Comments: "",
      MediaAttached:"",
      RatingOfRider: rating
    };

    return this.httpClient.post<any>(GlobalConstants.apiBaseURL + "/rider/"+ user.id +"/ratings/", body, {headers:header});
  }

  setTempTrip() {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      SourceId: this.source.locationId,
      DestinationId: this.destination.locationId,
      RideTypeId: this.selectedType.rideTypeId
    };
    console.log(body);
    

    this.httpClient.post<any>(GlobalConstants.apiBaseURL + "/rider/"+ user.id +"/trips/search", body, {headers:header}).subscribe(x => {
      console.log(x);
      if(x == null)
      this.tempTripSubject.next("RIDE coming");
    });
  }

  removeTempTripFromRider(isTimedOut:boolean) {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    this.httpClient.delete<any>(GlobalConstants.apiBaseURL + "/rider/"+ user.id +"/trips/search", {headers:header}).subscribe(x => {
      console.log(x);
      if(x == null)
      this.tempTripSubject.next("RIDE coming");
      else {
        if(isTimedOut)
          alert(x.message);
      }
    }, error => {
      alert(error.error.message)
    });
  }
}
