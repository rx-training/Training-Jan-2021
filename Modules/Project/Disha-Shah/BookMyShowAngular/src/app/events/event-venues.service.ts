import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventVenues } from '../models/IEventVenues';

@Injectable({
  providedIn: 'root'
})
export class EventVenuesService {

  private eventVenuesUrl = 'http://20.198.103.48:1005/api/BookMyShow/EventVenues';  // URL to web api

  loginToken: string = '';

  getToken(){
    const tokenObj: any = JSON.parse(localStorage.getItem("logged_in_admin"));
    this.loginToken = tokenObj.token;
  }

  getEventVenues(): Observable<IEventVenues[]> {
    return this.http.get<IEventVenues[]>(this.eventVenuesUrl);
  }

  getEventVenue(id: number): Observable<IEventVenues> {
    const url = `${this.eventVenuesUrl}/${id}`;
    return this.http.get<IEventVenues>(url);
  }

  getShowTimingsByEventVenue(id: number): Observable<any[]> {
    const url = `${this.eventVenuesUrl}/${id}/ShowTimings`;
    return this.http.get<any[]>(url);
  }

  /** POST: add a new hero to the server */
  addEventVenue(eventVenue: any): Observable<any> {
    this.getToken();  
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    console.log(httpOptions);
    return this.http.post<any>(this.eventVenuesUrl, eventVenue, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteEventVenue(id: number): Observable<any> {
    const url = `${this.eventVenuesUrl}/${id}`;
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    }; 
    return this.http.delete<any>(url, httpOptions);
  }

  /** PUT: update the hero on the server */
  updateEventVenue(eventVenue: any): Observable<any> {
    const url = `${this.eventVenuesUrl}/${eventVenue.eventVenueId}`;
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    }; 
    return this.http.put(url, eventVenue, httpOptions);
  }

  /** POST: add a new hero to the server */
  addShowTiming(id: number, showtime: string): Observable<any> {
    const url = `${this.eventVenuesUrl}/${id}/ShowTimings`;
    this.getToken();  
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    console.log(httpOptions);
    return this.http.post<any>(url, showtime, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteShowTiming(id: number, showtime: string): Observable<any> {
    const url = `${this.eventVenuesUrl}/${id}/ShowTiming/${showtime}`;
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    }; 
    return this.http.delete<any>(url, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
