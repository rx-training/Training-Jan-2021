import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventBookings } from '../models/IEventBookings';

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {

  private eventBookingsUrl = 'https://localhost:44380/api/BookMyShow/EventBookings';  // URL to web api
  loginToken = '';

  getToken(){
    const tokenObj: any = JSON.parse(localStorage.getItem("logged_in_user"));
    this.loginToken = tokenObj.token;
    console.log(this.loginToken);
  }

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getEventBookings(): Observable<IEventBookings[]> {
    return this.http.get<IEventBookings[]>(this.eventBookingsUrl);
  }

  getEventBookingsByContact(contact: string): Observable<IEventBookings[]> {
    const url = `${this.eventBookingsUrl}/${contact}`; 
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };  
    return this.http.get<IEventBookings[]>(url, httpOptions);
  }

  /** POST: add a new hero to the server */
  addEventBooking(booking: any): Observable<any> {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };  
    console.log(httpOptions);
    return this.http.post<any>(this.eventBookingsUrl, booking, httpOptions);
  }
}
