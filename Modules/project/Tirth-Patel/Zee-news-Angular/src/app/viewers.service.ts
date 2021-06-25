import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Viewer } from './Models/Viewer';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ViewersService {
  private Url = 'http://20.198.103.48:1006/api/Viewers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  getViewers(): Observable<Viewer[]> {
    console.log("get called")
    return this.http.get<Viewer[]>(this.Url)
      .pipe(catchError(this.handleError<Viewer[]>('getViewers', [])) );
  }
  addViewer(view: Viewer): Observable<Viewer> {
    console.log(view);
    return this.http.post<Viewer>(this.Url, view,this.httpOptions).pipe(
      tap(_ => console.log(`Added new Viewer ${view.Name}`)),
      catchError(this.handleError<Viewer>('Add Viewer'))
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
