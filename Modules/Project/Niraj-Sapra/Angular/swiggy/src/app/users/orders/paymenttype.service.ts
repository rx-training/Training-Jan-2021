import {paymenttype } from './paymenttype';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymenttypeService {
  url = "https://localhost:44391/api/Payment";
  //  url = environment.baseurl+'/Api/UserSignups';  
  
    constructor(private http: HttpClient) { }  
    getAll(): Observable<paymenttype[]> {  
      return this.http.get<paymenttype[]>(this.url);  
    }    
    delete(sid: number): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>(this.url + '/' +sid,  
   httpOptions);  
    }
}
