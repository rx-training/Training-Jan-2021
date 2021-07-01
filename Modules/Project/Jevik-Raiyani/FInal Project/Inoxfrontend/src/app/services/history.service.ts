import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IvHistory } from './IvHistory';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private apiServer = "http://20.198.103.48:1019/api/vhistory";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

   getAll(): Observable<IvHistory[]> {
    return this.httpClient.get<IvHistory[]>(this.apiServer)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
