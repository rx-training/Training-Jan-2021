import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob } from '../Models/INaukri/IJob';
import { debounceTime } from 'rxjs/operators';
import { IJobSeeker } from '../Models/INaukri/IJobSeeker';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {

  httpUrl = "https://localhost:44302/api/JobSeekers";
  searchedResult;
  profile;
  selectedEducation : number = -1;

  constructor(private http : HttpClient) { }



  searchJobResult(result : any){
    this.searchedResult = result;
  }

  get getsearchJobResult(){
    return this.searchedResult;
  }

  particularProfile(profile){
    this.profile = profile;
  }

  get getparticularProfile(){
    return this.profile;
  }

  searchJobs(job : string) : Observable<IJob> {
    const url = `${this.httpUrl}/jobOpenings/search/${job}`;
    return this.http.get<IJob>(url).pipe(
      debounceTime(300)
    );
  }

  bestPlaces() : Observable<any[]>{
    return this.http.get<any[]>(`${this.httpUrl}/bestPlaces`);
  }

  applyForJob(jsid : number, compid : number, jobid : number, token : string) : Observable<any>{
    let header = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(`${this.httpUrl}/${jsid}/ApplyFor/${compid}/${jobid}`, {}, {headers:header});
  }

  getJobSeeker(id : number, token : string) : Observable<IJobSeeker>{
    let header = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.get<IJobSeeker>(`${this.httpUrl}/${id}`, {headers:header});
  }

  updateJobSeeker(id : number, updatedData : any, token : string) : Observable<IJobSeeker>{
    let header = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.put<IJobSeeker>(`${this.httpUrl}/${id}`, updatedData, {headers:header});
  }

  addJobSeekerEducation(id : number, newEducation : any, token : string) : Observable<any>{
    let header = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post<any>(`${this.httpUrl}/educationDetails/${id}`, newEducation, {headers:header});
  }
}
