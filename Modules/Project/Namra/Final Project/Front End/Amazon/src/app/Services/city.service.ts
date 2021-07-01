import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Models/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient : HttpClient) { }

  URL : string = 'https://localhost:44368/api/';

  GetAll() : Observable<City[]>
  {
    return this.httpClient.get<City[]>(this.URL+"City/GetAll");
  }
  GetByStateId(StateId : number) : Observable<City[]>
  {
    return this.httpClient.get<City[]>(this.URL+"City/GetByStateId/"+StateId);
  }
  GetByCityName(name : string) : Observable<City>
  {
    return this.httpClient.get<City>(this.URL+"City/GetByCityName/"+name);
  }
  GetIdByCityName(name : string) : Observable<number>
  {
    return this.httpClient.get<number>(this.URL+"City/GetIdByCityName/"+name);
  }
}
