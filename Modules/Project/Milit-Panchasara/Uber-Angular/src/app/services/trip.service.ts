import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import * as CryptoJS from 'crypto-js';
import { LoggedInUserInterface } from '../models/LoggedInUser';
import { RideTypeInterface } from '../models/RideType';
import { LocationInterface } from '../models/Location';
import { Observable } from 'rxjs';
import { RiderTripInterface } from '../models/RiderTrip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  source:LocationInterface;
  destination:LocationInterface;
  rideType:RiderTripInterface;
  selectedType = null;

  currentTrip:RiderTripInterface = null;

  constructor(private httpClient: HttpClient) { }

  getLocationsForRider():Observable<LocationInterface[]> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});
    return this.httpClient.get<LocationInterface[]>(GlobalConstants.apiBaseURL + "/locations", {headers:header});
  }

  getRideTypesForRider():Observable<RideTypeInterface[]> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});
    return this.httpClient.get<RideTypeInterface[]>(GlobalConstants.apiBaseURL + "/rideTypes", {headers:header});
  }

  setNewTrip(): Observable<RiderTripInterface> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      DestinationId: this.source.locationId,
      SourceId: this.destination.locationId,
      RideTypeId: this.selectedType.rideTypeId
    };

    return this.httpClient.post<RiderTripInterface>(GlobalConstants.apiBaseURL + "/rider/"+ user.id +"/trips", body, {headers:header});
  }

  getTrips() {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);

    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.get<RiderTripInterface[]>(GlobalConstants.apiBaseURL + "/rider/" + user.id + "/trips", {headers:header});
  }

  startNewTrip(): Observable<RiderTripInterface> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      TripId: this.currentTrip.tripId,
      RiderId: user.id,
      Action: "TripStarted" 
    };

    return this.httpClient.put<RiderTripInterface>(GlobalConstants.apiBaseURL + "/rider/"+ user.id +"/trips/" + this.currentTrip.tripId, body, {headers:header});
  }

  completeTrip(): Observable<RiderTripInterface> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let body = {
      TripId: this.currentTrip.tripId,
      RiderId: user.id,
      Action: "TripCompleted",
      PaymentMethod: "Cash"
    };

    return this.httpClient.put<RiderTripInterface>(GlobalConstants.apiBaseURL + "/rider/"+ user.id +"/trips/" + this.currentTrip.tripId, body, {headers:header});
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
}
