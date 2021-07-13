import {payment } from './payment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url = "https://localhost:44391/api/Paymenttables";
//  url = environment.baseurl+'/Api/UserSignups';  

  constructor(private http: HttpClient) { }  
  getAll(): Observable<payment[]> {  
    return this.http.get<payment[]>(this.url);  
  }  


  Adddata(data: payment): Observable<payment> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<payment>(this.url,  
    data, httpOptions);  
  }  

  updatedata(sid : number,data: payment): Observable<payment> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    console.log("updatess"); 
    console.log(this.url+"/"+sid); 
    return this.http.put<payment>( this.url + '/'+sid,  
    data, httpOptions);  
  }  

  delete(sid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/' +sid,  
 httpOptions);  
  }  
}
