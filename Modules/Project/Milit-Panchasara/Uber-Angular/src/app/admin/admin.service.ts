import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GlobalConstants } from '../common/global-constants';
import * as CryptoJS from 'crypto-js';
import { RideTypeInterface } from '../models/RideType';
import { AdminAllData } from '../models/AdminAllData';
import { LoggedInUserInterface } from '../models/LoggedInUser';
import { BlockResponseInterface } from '../models/BlockResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  allData:AdminAllData = null;
  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<AdminAllData> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})
    return this.httpClient.get<AdminAllData>(GlobalConstants.apiBaseURL + "/admins/allusers", {headers:header});
  }

  blockUnblockRider(action:string, riderId:number):Observable<BlockResponseInterface> {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})

    let reqData = {
      action: action
    };

    return this.httpClient.post<BlockResponseInterface>(GlobalConstants.apiBaseURL + "/admins/" + user.id + "/rider/" + riderId, reqData, {headers:header});
  }

  addRideType(rideType:RideTypeInterface) {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})

    let reqData = {
      rideName: rideType.rideName,
      pricePerKm: rideType.pricePerKm,
      seatingCapacity: rideType.seatingCapacity,
    }

    return this.httpClient.post<RideTypeInterface>(GlobalConstants.apiBaseURL + "/ridetypes", reqData, {headers:header});
  }

  updateRideType(rideType:RideTypeInterface) {
    let decryptedUser:string = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})

    let reqData = {
      rideName: rideType.rideName,
      pricePerKm: rideType.pricePerKm,
      seatingCapacity: rideType.seatingCapacity,
      createdAt: rideType.createdAt
    }

    return this.httpClient.put<RideTypeInterface>(GlobalConstants.apiBaseURL + "/ridetypes/"+rideType.rideTypeId, reqData, {headers:header});
  }


}
