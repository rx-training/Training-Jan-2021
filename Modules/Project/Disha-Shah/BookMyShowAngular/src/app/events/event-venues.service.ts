import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventVenues } from '../models/IEventVenues';

@Injectable({
  providedIn: 'root'
})
export class EventVenuesService {

  private eventVenuesUrl = 'https://localhost:44380/api/BookMyShow/EventVenues';  // URL to web api

  getEventVenues(): Observable<IEventVenues[]> {
    return this.http.get<IEventVenues[]>(this.eventVenuesUrl);
  }

  getShowTimingsByEventVenue(id: number): Observable<any[]> {
    const url = `${this.eventVenuesUrl}/${id}/ShowTimings`;
    return this.http.get<any[]>(url);
  }

  constructor(private http: HttpClient) { }
}
