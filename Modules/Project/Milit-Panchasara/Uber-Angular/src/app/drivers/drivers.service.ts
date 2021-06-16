import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DriverProfileInterface } from '../models/DriverProfile';
import { GlobalConstants } from '../common/global-constants';
import { LoggedInUserInterface } from '../models/LoggedInUser';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  tempTrips = [];
  
  profileSub = new Subject<DriverProfileInterface>();

  profileData:DriverProfileInterface;
  constructor(private httpClient:HttpClient) { }

  setData(value:DriverProfileInterface) {
    this.profileData = value;
    this.profileSub.next(value);
  }

  getProfileData():Observable<DriverProfileInterface> {
    let decryptedUser = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    
    let header:HttpHeaders = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.get<DriverProfileInterface>(GlobalConstants.apiBaseURL + "/driver/" + user.id + "/profile", {headers:header});
  }

  getTempTrips() {
    let decryptedUser = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    
    let header:HttpHeaders = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.get<any>(GlobalConstants.apiBaseURL + "/driver/" + user.id + "/trips/search", {headers:header});
  }

  removeTempTrips(riderId) {
    let decryptedUser = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    
    let header:HttpHeaders = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.delete<any>(GlobalConstants.apiBaseURL + "/driver/" + user.id + "/trips/search/"+ riderId, {headers:header});
  }

  acceptTempTrips(riderId) {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token});

    let trip = this.tempTrips.find(x => x.key.item2 == riderId);
    if(trip == undefined)return null;
    let body = {
      RiderId: riderId,
      DestinationId: trip.value.destinationId,
      SourceId: trip.value.sourceId,
      RideTypeId: trip.value.rideTypeId
    };

    return this.httpClient.post<any>(GlobalConstants.apiBaseURL + "/driver/"+ user.id +"/trips", body, {headers:header});
  }
}
