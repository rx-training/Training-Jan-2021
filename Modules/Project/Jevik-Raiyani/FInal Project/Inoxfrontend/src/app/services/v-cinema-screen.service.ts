import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IvCinemaScreen } from './IvCinemaScreen';

@Injectable({
  providedIn: 'root'
})
export class VCinemaScreenService {

  
  private apiServer = "http://20.198.103.48:1019/api/VCinemascreen";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

   getAll(): Observable<IvCinemaScreen[]> {
    return this.httpClient.get<IvCinemaScreen[]>(this.apiServer)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  // getById(id): Observable<IvCinemaScreen> {
  //   return this.httpClient.get<IvCinemaScreen>(this.apiServer + '/' + id)
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

  delete(id){
    return this.httpClient.delete<IvCinemaScreen>(this.apiServer + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
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
