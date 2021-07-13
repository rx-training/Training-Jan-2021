import {usersingupdata } from './usersingupdata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  url = "https://localhost:44391/api/UserSignups";
//  url = environment.baseurl+'/Api/UserSignups';  

  constructor(private http: HttpClient) { }  
  getAllUsers(): Observable<usersingupdata[]> {  
    return this.http.get<usersingupdata[]>(this.url);  
  }  

//   getStudentById(sid: number): Observable<usersingupdata> {  
//     return this.http.get<usersingupdata>(this.url + '/AllStudentsById/'+sid);  
//   }  

  createUser(users: usersingupdata): Observable<usersingupdata> {
    console.log("signup");
      
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    console.log(this.url);
    return this.http.post<usersingupdata>(this.url,  
    users, httpOptions);  
  }  

  updateStudent(sid : number,users: usersingupdata): Observable<usersingupdata> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    console.log("updatess"); 
    console.log(this.url+"/"+sid); 
    return this.http.put<usersingupdata>( this.url + '/'+sid,  
    users, httpOptions);  
  }  

  deleteStudentById(sid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/' +sid,  
 httpOptions);  
  }  

}

