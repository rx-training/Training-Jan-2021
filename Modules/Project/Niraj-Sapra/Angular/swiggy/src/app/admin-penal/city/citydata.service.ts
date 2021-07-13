import { Injectable } from '@angular/core';
import {Citymodel } from './Citymodel';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitydataService {
  url = "https://localhost:44391/api/Cities";
  //environment.baseurl+'Cities';  


  constructor(private http: HttpClient) { }
  
  //Get all data
  getAllCity(): Observable<Citymodel[]> {  
    return this.http.get<Citymodel[]>(this.url);  
  }


  //push data
  PushnewCity(cityob: Citymodel): Observable<Citymodel> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Citymodel>(this.url,  
    cityob, httpOptions);  
  }  

  //update data
  updateStudent(sid : number,users: Citymodel): Observable<Citymodel> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Citymodel>( this.url+'/'+sid,  
    users, httpOptions);  
  }  
  ​​
//delete data
  deletecityById(sid: number): Observable<number> {  
    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url+'/'+sid,httpOptions).pipe(
      tap(_ => console.log(`deleted news id=${sid}`)));  
  }  
}
