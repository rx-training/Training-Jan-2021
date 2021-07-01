import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'

import { Student } from './Student';
@Injectable({
  providedIn: 'root'
})
export class StudentCrudService {
  url:string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient:HttpClient) {
    this.url = "https://localhost:44352/api/students"
   }
   
  public getStudent() : Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.url)
  }
  getStudentById(id): Observable<Student> {
    return this.httpClient.get<Student>(this.url+ '/'  + id)
  }

  postStudent(student): Observable<Student> {
    return this.httpClient.post<Student>(this.url , JSON.stringify(student), this.httpOptions)

  } 

  putStudent(id,Student): Observable<Student> {
    return this.httpClient.put<Student>(this.url + '/' + id, JSON.stringify(Student), this.httpOptions)
  }

  
  deleteStudent(id){
    return this.httpClient.delete<Student>(this.url + '/' + id, this.httpOptions);
  }
}
