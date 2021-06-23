import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICertifications } from '../models/ICertifications';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private certificationsUrl = 'http://localhost/BookMyShow/api/BookMyShow/Certifications';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getCertifications(): Observable<ICertifications[]> {
    return this.http.get<ICertifications[]>(this.certificationsUrl);
  }
}
