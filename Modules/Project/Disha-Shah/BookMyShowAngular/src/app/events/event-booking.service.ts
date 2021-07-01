import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEventBookings } from '../models/IEventBookings';

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {

  private eventBookingsUrl = environment.baseUrl + 'api/BookMyShow/EventBookings';  // URL to web api
  loginToken = '';
  adminLoginToken = '';

  getToken(){
    const tokenObj: any = JSON.parse(localStorage.getItem("logged_in_user"));
    this.loginToken = tokenObj.token;
  }

  getAdminToken(){
    const tokenObj: any = JSON.parse(localStorage.getItem("logged_in_admin"));
    this.adminLoginToken = tokenObj.token;
  }

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getEventBookings(): Observable<IEventBookings[]> {
    this.getAdminToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.adminLoginToken}` })
    };  
    return this.http.get<IEventBookings[]>(this.eventBookingsUrl, httpOptions);
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
