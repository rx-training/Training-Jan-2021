import { Injectable } from '@angular/core';
import { payment } from './payment';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url = 'https://localhost:44391/api/Payment';  


  constructor(private http: HttpClient) { }
  
  //Get all data
  getAll(): Observable<payment[]> {  
    return this.http.get<payment[]>(this.url);  
  }


  //push data
  PushnewData(cityob:payment): Observable<payment> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<payment>(this.url,  
    cityob, httpOptions);  
  }  

  //update data
  updateData(sid : number,users: payment): Observable<payment> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<payment>( this.url+'/'+sid,  
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
