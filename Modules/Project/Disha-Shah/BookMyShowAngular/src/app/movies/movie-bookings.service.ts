import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieBookings } from '../models/IMovieBookings';

@Injectable({
  providedIn: 'root'
})
export class MovieBookingsService {

  private movieBookingsUrl = 'https://localhost:44380/api/BookMyShow/MovieBookings';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getMovieBookings(): Observable<IMovieBookings[]> {
    return this.http.get<IMovieBookings[]>(this.movieBookingsUrl);
  }
}
