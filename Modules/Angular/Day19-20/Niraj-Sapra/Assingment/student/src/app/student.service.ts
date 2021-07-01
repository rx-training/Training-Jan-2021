import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { studentdata} from './studentdata'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string;
  constructor(private http:HttpClient) {
    this.url = "https://localhost:44343/api/StudentAddmitiondatums";  // URL to web api

   }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /** GET heroes from the server */
  getStudentData(): Observable<studentdata[]> {
    return  this.http.get<studentdata[]>(this.url);  
  }

  /** GET heroes from the server */
  // InsertStudent(student:studentdata): Observable<studentdata[]> {
  //   return  this.http.post<studentdata[]>(this.url,JSON.stringify(student),this.httpOptions);  
  // }

  postStudent(studentdata): Observable<studentdata> {
    return this.http.post<studentdata>(this.url , JSON.stringify(studentdata), this.httpOptions)
  } 
  /** GET heroes from the server */
  UpdateStudent(id:number,student:studentdata): Observable<studentdata[]> {
    return  this.http.post<studentdata[]>(this.url+`/${id}`,student);  
  }

}