import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICinemas } from './ICinema';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {

  private apiServer = "http://20.198.103.48:1019/api/cinemas";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

   getAll(): Observable<ICinemas[]> {
    return this.httpClient.get<ICinemas[]>(this.apiServer)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  // getById(id): Observable<IMovies> {
  //   return this.httpClient.get<IMovies>(this.apiServer + '/' + id)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }


  // create(product): Observable<IMovies> {
  //   return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }  
 

 
  // update(id, product): Observable<Product> {
  //   return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // delete(id){
  //   return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
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
