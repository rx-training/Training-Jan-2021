import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Admin } from './Models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private Url = 'https://localhost:44303/api/Admins'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  getNews(): Observable<Admin[]> {
    console.log("get called")
    return this.http.get<Admin[]>(this.Url)
      .pipe(catchError(this.handleError<Admin[]>('get Admin', [])));
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
