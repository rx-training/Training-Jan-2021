import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import * as CryptoJS from 'crypto-js';
import { RiderProfileInterface } from '../models/RiderProfile';
import { Observable, Subject } from 'rxjs';
import { LoggedInUserInterface } from '../models/LoggedInUser';

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  profileSub = new Subject<RiderProfileInterface>();

  profileData:RiderProfileInterface;
  constructor(private httpClient:HttpClient) { }

  setData(value:RiderProfileInterface) {
    this.profileData = value;
    this.profileSub.next(value);
  }

  getProfileData():Observable<RiderProfileInterface> {
    let decryptedUser = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user:LoggedInUserInterface = JSON.parse(decryptedUser);
    
    let header:HttpHeaders = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.get<RiderProfileInterface>(GlobalConstants.apiBaseURL + "/rider/" + user.id + "/profile", {headers:header});
  }

  sendVerificationMail() {
    let decryptedUser = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    let user = JSON.parse(decryptedUser);

    let header = new HttpHeaders({"Authorization":"Bearer " + user.token})

    return this.httpClient.get<any>(GlobalConstants.apiBaseURL + "/Auth/rider/sendEmail/" + user.id, {headers:header}).subscribe(x => {console.log(x);
    });
  }
  
}
