import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IStudent } from './IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  httpUrl : string;
  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'appication/json' })
  };
  selectedStudent : IStudent;
  selectedStudentId : number;

  constructor(private http : HttpClient) { 
    this.httpUrl = "https://localhost:44382/api/StudentDetails"; 
  }

  get getselectedStudent(){
    return this.selectedStudent;
  }
  get getselectedStudentId(){
    return this.selectedStudentId;
  }

  clearSelectedStudent(){
    this.selectedStudent = undefined;
  }
  
  clearSelectedStudentId(){
    this.selectedStudentId = undefined;
  }

  getStudents() : Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.httpUrl);
  }

  getStudent(id : number) : Observable<IStudent>{
    return this.http.get<IStudent>(`${this.httpUrl}/${id}`);
  }

  addStudent(student : IStudent) : Observable<IStudent>{
    return this.http.post(this.httpUrl, student).pipe(
      tap((student : IStudent) => console.log(`New Student : ${student}`)),
      catchError(this.handleError<IStudent>('addStudent'))
    );
  }

  updateStudent(id : number, student : IStudent) : Observable<any>{
    student.studentId = id;
    return this.http.put(`${this.httpUrl}/${id}`, student).pipe(
      catchError(this.handleError<IStudent>('updateStudent'))
    );
  }

  editStudent(st : IStudent, i : number){
    this.selectedStudent = st;
    console.log(i);
    this.getStudent(i).subscribe(data => {this.selectedStudentId = data.studentId});
    console.log(this.selectedStudentId);
  }

  deleteStudent(id : number) : Observable<IStudent>{
    return this.http.delete<IStudent>(`${this.httpUrl}/${id}`).pipe(
      catchError(this.handleError<IStudent>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'opeartion', result? : T){
    return (error : any) : Observable<T> => {
      console.error(error);
      console.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    }
  }

}

