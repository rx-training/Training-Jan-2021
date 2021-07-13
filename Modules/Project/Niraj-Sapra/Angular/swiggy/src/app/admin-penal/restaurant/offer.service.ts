import { Injectable } from '@angular/core';
import {offer } from './offer';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  url = "https://localhost:44391/api/Offer";
  //url = environment.baseurl+'Offer';  


  constructor(private http: HttpClient) { }
  
  //Get all data
  getAll(): Observable<offer[]> {  
    return this.http.get<offer[]>(this.url);  
  }


  //push data
  PushnewData(cityob:offer): Observable<offer> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<offer>(this.url,  
    cityob, httpOptions);  
  }  

  //update data
  updateData(sid : number,users: offer): Observable<offer> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<offer>( this.url+'/'+sid,  
    users, httpOptions);  
  }  
  ​​
//delete data
  deleteDataById(sid: number): Observable<number> {  
    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url+'/'+sid,httpOptions).pipe(
      tap(_ => console.log(`deleted news id=${sid}`)));  
  }  
}
