import { Injectable } from '@angular/core';
import {usersingupdata } from '../../login-singup/usersingupdata';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://localhost:44391/api/UserSignups';  

  constructor(private http: HttpClient) { }  
  getAllUsers(): Observable<usersingupdata[]> {  
    return this.http.get<usersingupdata[]>(this.url);  
  }  

//   getStudentById(sid: number): Observable<usersingupdata> {  
//     return this.http.get<usersingupdata>(this.url + '/AllStudentsById/'+sid);  
//   }  

  createUser(users: usersingupdata): Observable<usersingupdata> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<usersingupdata>(this.url,  
    users, httpOptions);  
  }  

  updateStudent(sid : number,users: usersingupdata): Observable<usersingupdata> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<usersingupdata>( this.url + '/'+sid,  
    users, httpOptions);  
  }  

  deleteStudentById(sid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/' +sid,  
 httpOptions);  
  }  

}
