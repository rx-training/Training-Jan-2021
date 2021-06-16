import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../Models/State';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private httpClient : HttpClient) { }
  URL : string = 'https://localhost:44368/api/';

  GetAll() : Observable<State[]>
  {
    return this.httpClient.get<State[]>(this.URL+"State/GetAll");
  }
}
