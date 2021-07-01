import { Injectable } from '@angular/core';
import {product } from './product';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  url = 'https://localhost:44391/api/Product';  

  constructor(private http: HttpClient) { }  
  getAllproduct(): Observable<product[]> {  
    return this.http.get<product[]>(this.url);  
  }  

  //push data
  PushnewProduct(cityob: product): Observable<product> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<product>(this.url,  
    cityob, httpOptions);  
  }  

  //update data
  updateStudent(sid : number,users:product): Observable<product> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    console.log("updates");
    console.log(this.url);
    console.log("updates");
    console.log(users);
    return this.http.put<product>( this.url+'/'+sid,  
    users, httpOptions).pipe(
      tap(_ => console.log(`deleted news id=${sid}`)));  
  }  
  ​​
  //delete data
  deletecityById(sid: number): Observable<number> {      
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url+'/'+sid,httpOptions).pipe(
      tap(_ => console.log(`deleted news id=${sid}`)));  
  }

}
