import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: BehaviorSubject<boolean>;
  
  constructor(private http : HttpClient) { }

  login(email: String, password: String): Observable<boolean> {
    var body = {};
    body['email'] = email;
    body['password'] = password;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(environment.LOGIN_URL, body, {headers: headers}).pipe(
      map((response: any) => { 
        console.log(response);
        this.isLogged = response;
        console.log(this.isLogged);
        sessionStorage.setItem('loggedIn', JSON.stringify(this.isLogged));
        return response;
      })
    );
  }
  isLoggedIn() {
    return this.http.get(environment.LOGIN_URL, {withCredentials: true}).pipe(
      map((response: any) => {
        this.isLogged.next(response);
        sessionStorage.getItem('loggedIn');
        return response;
      })
    );
  }
}
