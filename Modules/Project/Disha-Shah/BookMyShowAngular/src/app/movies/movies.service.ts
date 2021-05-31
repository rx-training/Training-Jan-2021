import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from '../models/IMovies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = 'https://localhost:44380/api/BookMyShow/Movies';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(this.moviesUrl);
  }
  
  // /** POST: add a new hero to the server */
  // addStudent(student: IStudent): Observable<IStudent> {
  //   return this.http.post<IStudent>(this.studentsUrl, student, this.httpOptions);
  // }

  // /** PUT: update the hero on the server */
  // updateStudent(student: any): Observable<any> {
  //   const url = `${this.studentsUrl}/${student.studentId}`;

  //   return this.http.put(url, student, this.httpOptions);
  // }

  // /** DELETE: delete the hero from the server */
  // deleteStudent(id: number): Observable<IStudent> {
  //   const url = `${this.studentsUrl}/${id}`;

  //   return this.http.delete<IStudent>(url, this.httpOptions);
  // }

}
