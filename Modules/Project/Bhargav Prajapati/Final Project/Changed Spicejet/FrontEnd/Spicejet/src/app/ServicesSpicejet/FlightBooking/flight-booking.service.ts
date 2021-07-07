import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/ModelsSpicejet/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingService {

  constructor(private http:HttpClient) { }
  
  url:string="https://localhost:44326/api/UserFlightBooking";

  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }
  public GetAllBooking():Observable<Array<UserDetails>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.get<Array<UserDetails>>(this.url,httpOptions);
  }

  public InserBooking(data:UserDetails):Observable<UserDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
      return this.http.post<UserDetails>(this.url,data,httpOptions);
  }
  public DeleteBooking(UserId:number):Observable<UserDetails>
  {

    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.delete<UserDetails>(this.url+`/${UserId}`,httpOptions)

  }
  public UpdateBooking(UserId:number,UserData:UserDetails):Observable<UserDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.put<UserDetails>(this.url+`/${UserId}`,UserData,httpOptions);
  }

 

}
