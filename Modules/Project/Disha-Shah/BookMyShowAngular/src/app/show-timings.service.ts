import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IShowTimings } from './models/IShowTimings';

@Injectable({
  providedIn: 'root'
})
export class ShowTimingsService {

  private showTimingsUrl = environment.baseUrl + 'api/BookMyShow/ShowTimings';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getShowTimings(): Observable<IShowTimings[]> {
    return this.http.get<IShowTimings[]>(this.showTimingsUrl);
  }

  getShowTiming(id: number): Observable<IShowTimings[]> {
    const url = `${this.showTimingsUrl}/${id}`; 
    return this.http.get<IShowTimings[]>(url);
  }
}
