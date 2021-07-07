import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripDetails } from 'src/app/ModelsSpicejet/TripDetails';

@Injectable({
  providedIn: 'root'
})
export class TripDetailsService {

  constructor(private http:HttpClient) { }
  // TripDetails

  url:string="https://localhost:44326/api/AirplaneTripDetails"
  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }
  public GetAllTrip():Observable<Array<TripDetails>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
      return this.http.get<Array<TripDetails>>(this.url,httpOptions);
  }
  public InsertTrip(Trip:TripDetails):Observable<TripDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.post<TripDetails>(this.url,Trip,httpOptions);
  }
  public UpdateTrip(Trip:TripDetails,TripId:number):Observable<TripDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.put<TripDetails>(this.url+`/${TripId}`,Trip,httpOptions);
  }
  public DeleteTrip(TripId:number):Observable<TripDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.delete<TripDetails>(this.url+`/${TripId}`,httpOptions);
  }
}

