import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILanguages } from './models/ILanguages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  private languagesUrl = environment.baseUrl + 'api/BookMyShow/Languages';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getLanguages(): Observable<ILanguages[]> {
    return this.http.get<ILanguages[]>(this.languagesUrl);
  }

  getLanguage(id: number): Observable<ILanguages[]> {
    const url = `${this.languagesUrl}/${id}`; 
    return this.http.get<ILanguages[]>(url);
  }
}
