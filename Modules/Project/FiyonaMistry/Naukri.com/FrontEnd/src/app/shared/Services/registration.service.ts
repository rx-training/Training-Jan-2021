import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJobSeeker } from '../Models/INaukri/IJobSeeker';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  httpUrl = "https://localhost:44302/api/Authenticate/register";
  eventValue : string = '';
  JobSeeker : Array<IJobSeeker>;
  registeredJobSeeker : Array<IJobSeeker>;

  constructor(private http : HttpClient) { }

  eventChange(event : string){
    this.eventValue = event;
  }

  get geteventValue(){
    return this.eventValue;
  }

  get getjobSeekerDetails(){
    return this.JobSeeker;
  }

  registered(registered : Array<IJobSeeker>){
    this.registeredJobSeeker = registered;
  }

  get getRegisteredJobSeeker(){
    return this.registeredJobSeeker;
  }

  jobSeekerDetails(js : Array<IJobSeeker>){
    this.JobSeeker = js;
  }

  registerJobSeeker(JobSeeker : any) : Observable<IJobSeeker>{
    return this.http.post<IJobSeeker>(`${this.httpUrl}/jobSeeker`, JobSeeker);
  }
}
