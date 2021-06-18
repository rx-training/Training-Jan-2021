import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventTypes } from '../models/IEventTypes';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {

  private eventTypesUrl = 'http://20.198.103.48:1005/api/BookMyShow/EventTypes';  // URL to web api

  getEventTypes(): Observable<IEventTypes[]> {
    return this.http.get<IEventTypes[]>(this.eventTypesUrl);
  }

  constructor(private http: HttpClient) { }
}
