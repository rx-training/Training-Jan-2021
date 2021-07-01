import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url : string = 'https://localhost:44334/api/student';
  constructor(private httpClient : HttpClient) { }

  getStudents() : Observable<Student[]>
  {
    return this.httpClient.get<Student[]>(this.url+'/GetAll');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  AddStudent(std : Student) : Observable<boolean>
  {
     return this.httpClient.post<boolean>(this.url+'/Create', std, this.httpOptions);
  }
  DeleteStudent(Id : number) : Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.url+'/Delete/'+Id, this.httpOptions);
  }
  SearchById(Id : number) : Observable<Student>
  {
    return this.httpClient.get<Student>(this.url+'/GetById/'+Id, this.httpOptions);
  }
  UpdateStudent(std : Student) : Observable<string>
  {
    return this.httpClient.put<string>(this.url+'/Update',std, this.httpOptions);
  }
}
