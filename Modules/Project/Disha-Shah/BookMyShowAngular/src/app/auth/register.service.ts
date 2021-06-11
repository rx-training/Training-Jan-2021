import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IRegister } from '../models/IRegister';
import {map, catchError} from 'rxjs/operators';
import { ILogin } from '../models/ILogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private authenticateUrl = 'https://localhost:44380/api/Authenticate';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) {  }

  /** POST: add a new hero to the server */
  addUser(user: IRegister): Observable<IRegister> {
    const url = `${this.authenticateUrl}/register`;
    console.log(user);
    return this.http.post<IRegister>(url, user, this.httpOptions)
    .pipe(
      map((data: any) => {
        console.log(data);
        alert(data.message);
        return data;
      }), catchError(error => {
        alert(error.error.message);
        return throwError('Something went wrong');
      })
    );
  }

  loginUser(user: ILogin, otp: number): Observable<ILogin> {
    const url = `${this.authenticateUrl}/login?otp=${otp}`;
    console.log(user);
    return this.http.post<ILogin>(url, user, this.httpOptions)
    .pipe(
      map((data: any) => {
        console.log(data);
        if(data.role == 'User'){
          window.location.reload();
          this.router.navigate(['/home']);
          localStorage.logged_in_user = JSON.stringify(data);
        }
        if(data.role == 'Admin'){
          window.location.assign('/admin-dashboard');
          localStorage.logged_in_admin = JSON.stringify(data);
        }
        alert("Successfully logged in");
        return data;
      }), catchError(error => {
        console.log(error);
        alert(error.error.message);
        return throwError('Something went wrong');
      })
    );
  }

  logoutUser(): any {
    localStorage.removeItem('logged_in_user');
  }

  logoutAdmin(): any {
    localStorage.removeItem('logged_in_admin');
  }

  getUser(): any {
    return localStorage.getItem('logged_in_user');
  }

  getAdmin(): any {
    return localStorage.getItem('logged_in_admin');
  }

  isLoggedInUser(): boolean {
    return this.getUser() !== null;
  }

  isLoggedInAdmin(): boolean {
    return this.getAdmin() !== null;
  }
}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: RegisterService, useClass: RegisterService }
];