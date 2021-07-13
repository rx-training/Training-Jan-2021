import { Injectable } from '@angular/core';
import {Category } from './Category';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'https://localhost:44391/api/Category';  

  constructor(private http: HttpClient) { }  
  getAllproduct(): Observable<Category[]> {  
    return this.http.get<Category[]>(this.url);  
  }  

  //push data
  PushnewProduct(cityob: Category): Observable<Category> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Category>(this.url,  
    cityob, httpOptions);  
  }  

  //update data
  updateStudent(sid : number,users: Category): Observable<Category> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Category>( this.url+'/'+sid,  
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
