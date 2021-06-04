import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../common/global-constants';
import { LoggedInUserInterface } from '../models/LoggedInUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginContactNumber = null;
  loginPassword;

  constructor(private httpClient:HttpClient) { }

  loginRider():Observable<LoggedInUserInterface> {
    return this.httpClient.post<LoggedInUserInterface>(GlobalConstants.apiBaseURL + '/Auth/login/rider', {contactNumber: this.loginContactNumber, password: this.loginPassword});
  }

  registerRider(userData):Observable<LoggedInUserInterface> {

    let requestData = {
      FirstName:userData.firstName,
      LastName:userData.surName,
      Email: userData.email,
      ContactNumber: userData.contactNumber,
      Password: userData.password
    }

    return this.httpClient.post<LoggedInUserInterface>(GlobalConstants.apiBaseURL + '/Auth/register/rider', requestData);
  }

  loginAdmin():Observable<LoggedInUserInterface> {
    return this.httpClient.post<LoggedInUserInterface>(GlobalConstants.apiBaseURL + '/Auth/login/admin', {contactnumber: this.loginContactNumber, password: this.loginPassword});
  }

}
