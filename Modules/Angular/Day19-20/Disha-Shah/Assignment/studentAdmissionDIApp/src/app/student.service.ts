import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggerService } from './logger.service';
import { IStudent } from './models/IStudent';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'https://localhost:44320/api/Students';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  studentList: Array<IStudent> = [];

  constructor(private logger: LoggerService, private http: HttpClient) {  }

  /** GET students from the server */
  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.studentsUrl);
  }
  
  /** POST: add a new hero to the server */
  addStudent(student: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this.studentsUrl, student, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  updateStudent(student: any): Observable<any> {
    const url = `${this.studentsUrl}/${student.studentId}`;

    return this.http.put(url, student, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteStudent(id: number): Observable<IStudent> {
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<IStudent>(url, this.httpOptions);
  }

}
