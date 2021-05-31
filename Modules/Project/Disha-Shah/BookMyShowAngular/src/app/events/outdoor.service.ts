import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOutdoors } from '../models/IOutdoors';

@Injectable({
  providedIn: 'root'
})
export class OutdoorService {

  private outdoorsUrl = 'https://localhost:44380/api/BookMyShow/Events/Outdoors';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getOutdoors(): Observable<IOutdoors[]> {
    return this.http.get<IOutdoors[]>(this.outdoorsUrl);
  }
}
