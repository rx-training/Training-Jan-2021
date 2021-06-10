import { LoggerServiceService} from './logger-service.service';
import { Inject, Injectable,Input } from '@angular/core';
import {StudentList } from './StudentList';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

  
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  url = 'https://localhost:44390/api/StudentAdmissionTables';  

  constructor(private http: HttpClient) { }  
  getAllStudents(): Observable<StudentList[]> {  
    return this.http.get<StudentList[]>(this.url + '/AllStudents');  
  }  

  getStudentById(sid: number): Observable<StudentList> {  
    return this.http.get<StudentList>(this.url + '/AllStudentsById/'+sid);  
  }  

  createStudent(student: StudentList): Observable<StudentList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<StudentList>(this.url + '/InsertStudentDetails/',  
    student, httpOptions);  
  }  

  updateStudent(sid : number,student: StudentList): Observable<StudentList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<StudentList>( this.url + '/UpdateStudentDetails/'+sid,  
    student, httpOptions);  
  }  

  deleteStudentById(sid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteStudentDetails/' +sid,  
 httpOptions);  
  }  

}
