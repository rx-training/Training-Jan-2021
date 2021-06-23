import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITheatre } from '../models/ITheatre';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {

  private theatresUrl = 'http://localhost/BookMyShow/api/BookMyShow/Theatres';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getTheatres(): Observable<ITheatre[]> {
    return this.http.get<ITheatre[]>(this.theatresUrl);
  }

  getTheatre(id: number): Observable<ITheatre[]> {
    const url = `${this.theatresUrl}/${id}`; 
    return this.http.get<ITheatre[]>(url);
  }
}
