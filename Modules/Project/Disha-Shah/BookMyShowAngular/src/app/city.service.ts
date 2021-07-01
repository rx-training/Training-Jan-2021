import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICity } from './models/ICity';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citiesUrl = environment.baseUrl + 'api/BookMyShow/Cities';  // URL to web api

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
