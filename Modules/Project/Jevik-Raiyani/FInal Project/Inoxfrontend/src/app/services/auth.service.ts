import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _Url = "http://20.198.103.48:1019/api/authenticate";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' 
    })
  }
  constructor(private httpClient: HttpClient) { }


  login(data): Observable<any> {
    return this.httpClient.post<any>(this._Url + '/login', JSON.stringify(data), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }  

  Register(data,userTypeUrl): Observable<any> {
    return this.httpClient.post<any>(this._Url + '/register'+ userTypeUrl, JSON.stringify(data), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }  

  GmailVerification(gmail):Observable<any>{
    return this.httpClient.get<any>(this._Url + '/current/' + gmail)
  }

  GmailVerificationCinemaAdmin(gmail):Observable<any>{
    return this.httpClient.get<any>(this._Url + '/current-cinemaadmin/' + gmail)
    // .pipe(
    //       catchError(this.errorHandler)
    //     )
  }


  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
 

 
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
