import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivities } from '../models/IActivities';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsUrl = 'https://localhost:44380/api/BookMyShow/Events';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getEvents(): Observable<IActivities[]> {
    return this.http.get<IActivities[]>(this.eventsUrl);
  }

  getUniqueEvents(): Observable<any[]> {
    const url = `${this.eventsUrl}/UniqueEvents`;
    return this.http.get<any[]>(url);
  } 

  getEvent(id: number): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/${id}`; 
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getActivities(): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Activities`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getComedies(): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Comedies`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getOutdoors(): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Outdoors`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getPlays(): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Plays`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getPopulars(): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Populars`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getSports(): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Sports`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getActivitiesByPrice(min: number, max: number): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Activities/Price/${min}/${max}`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getComediesByPrice(min: number, max: number): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Comedies/Price/${min}/${max}`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getOutdoorsByPrice(min: number, max: number): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Outdoors/Price/${min}/${max}`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getPlaysByPrice(min: number, max: number): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Plays/Price/${min}/${max}`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getPopularsByPrice(min: number, max: number): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Populars/Price/${min}/${max}`;
    return this.http.get<IActivities[]>(url);
  }

  /** GET students from the server */
  getSportsByPrice(min: number, max: number): Observable<IActivities[]> {
    const url = `${this.eventsUrl}/Sports/Price/${min}/${max}`;
    return this.http.get<IActivities[]>(url);
  }
}
