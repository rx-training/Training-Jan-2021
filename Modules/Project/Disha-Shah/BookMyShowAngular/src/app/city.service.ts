import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from './models/ICity';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citiesUrl = 'https://localhost:44380/api/BookMyShow/Cities';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(this.citiesUrl);
  }

  /** GET students from the server */
  getCity(id: number): Observable<ICity> {
    const url = `${this.citiesUrl}/${id}`; 
    return this.http.get<ICity>(url);
  }
}
