import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShowTimings } from './models/IShowTimings';

@Injectable({
  providedIn: 'root'
})
export class ShowTimingsService {

  private showTimingsUrl = 'https://localhost:44380/api/BookMyShow/ShowTimings';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getShowTimings(): Observable<IShowTimings[]> {
    return this.http.get<IShowTimings[]>(this.showTimingsUrl);
  }
}
