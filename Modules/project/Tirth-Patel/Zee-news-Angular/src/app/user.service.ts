
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url = 'https://localhost:44303/api/Users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private list:User[] = [];

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    console.log("get called")
    return this.http.get<User[]>(this.Url)
      .pipe(catchError(this.handleError<User[]>('getViewers', [])) );
  }

  addUser(view: User): Observable<User> {
    console.log(view);
    return this.http.post<User>(this.Url, view,this.httpOptions).pipe( 
      tap(_ => console.log(`Added new User ${view.userid}`)),
      
      catchError(this.handleError<User>('Add User'))
    );}
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
