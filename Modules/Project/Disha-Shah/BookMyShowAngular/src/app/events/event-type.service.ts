import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventTypes } from '../models/IEventTypes';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {

  private eventTypesUrl = 'https://localhost:44380/api/BookMyShow/EventTypes';  // URL to web api

  getEventTypes(): Observable<IEventTypes[]> {
    return this.http.get<IEventTypes[]>(this.eventTypesUrl);
  }

  constructor(private http: HttpClient) { }
}
