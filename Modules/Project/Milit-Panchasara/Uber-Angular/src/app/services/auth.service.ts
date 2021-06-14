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

  registerDriver(userData):Observable<LoggedInUserInterface> {

    let requestData = {
      FirstName:userData.firstName,
      LastName:userData.surName,
      Email: userData.email,
      ContactNumber: userData.contactNumber,
      Password: userData.password,
      RideTypeId: userData.rideTypeId,
      VehicleBrand: userData.vehicleBrand,
      VehicleName: userData.vehicleName,
      RegistrationNo: userData.registrationNo,
      VehicleType: userData.vehicleType
    }

    return this.httpClient.post<LoggedInUserInterface>(GlobalConstants.apiBaseURL + '/Auth/register/driver', requestData);
  }

  loginAdmin():Observable<LoggedInUserInterface> {
    return this.httpClient.post<LoggedInUserInterface>(GlobalConstants.apiBaseURL + '/Auth/login/admin', {contactnumber: this.loginContactNumber, password: this.loginPassword});
  }

  loginDriver():Observable<LoggedInUserInterface> {
    return this.httpClient.post<LoggedInUserInterface>(GlobalConstants.apiBaseURL + '/Auth/login/driver', {contactnumber: this.loginContactNumber, password: this.loginPassword});
  }

}
