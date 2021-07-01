import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { student } from './Student';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
private Url = 'https://localhost:44352/api/students';
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http:HttpClient ) {}
  getStudents():Observable<student[]>{
    return this.http.get<student[]>(this.Url)
    .pipe(catchError(this.handleError<student[]>('getStudents',[]))

    );
  }
  addStudent(stud: student): Observable<student> {
    console.log(stud);
    return this.http.post<student>(this.Url, stud,this.httpOptions).pipe(
      
      catchError(this.handleError<student>('addHero'))
    );
  }
  deleteStudent(id: number): Observable<student> {
    const url = `${this.Url}/${id}`;

    return this.http.delete<student>(url, this.httpOptions).pipe(
      catchError(this.handleError<student>('deleteHero'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
