import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILanguages } from './models/ILanguages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  private languagesUrl = 'http://localhost/BookMyShow/api/BookMyShow/Languages';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getLanguages(): Observable<ILanguages[]> {
    return this.http.get<ILanguages[]>(this.languagesUrl);
  }
}
