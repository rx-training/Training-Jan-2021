import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEventTypes } from '../models/IEventTypes';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {

  private eventTypesUrl = environment.baseUrl + 'api/BookMyShow/EventTypes';  // URL to web api

  getEventTypes(): Observable<IEventTypes[]> {
    return this.http.get<IEventTypes[]>(this.eventTypesUrl);
  }

  constructor(private http: HttpClient) { }
}
