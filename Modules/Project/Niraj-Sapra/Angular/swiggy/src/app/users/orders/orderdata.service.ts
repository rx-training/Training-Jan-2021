import {orders } from './orders';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderdataService {
  url = "https://localhost:44391/api/Ordertables";
//  url = environment.baseurl+'/Api/UserSignups';  

  constructor(private http: HttpClient) { }  
  getAll(): Observable<orders[]> {  
    return this.http.get<orders[]>(this.url);  
  }  


  Adddata(users: orders): Observable<orders> {  
    console.log("enter");
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    console.log("enter");
    console.log("this.url");
    console.log(users);
    return this.http.post<orders>(this.url,  
    users, httpOptions);  
  }  

  updatedata(sid : number,users: orders): Observable<orders> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    console.log("updatess"); 
    console.log(this.url+"/"+sid); 
    return this.http.put<orders>( this.url + '/'+sid,  
    users, httpOptions);  
  }  

  delete(sid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/' +sid,  
 httpOptions);  
  }  


}
