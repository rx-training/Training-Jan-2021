import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInModel } from '../Models/LoginModel';
import { loginResponse } from '../Models/LoginResponse';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }
  URL : string = 'https://localhost:44368/api/';

  LogIN(log : LogInModel) : Observable<loginResponse>
  {
    return this.httpClient.post<loginResponse>(this.URL+"Authenticate/Login", log);
  }
  ResetLogin()
  {
    localStorage.setItem('token','');
    localStorage.setItem('UserName','');
    localStorage.setItem('Expiration','');
  }
  GetUserDataByLogin(Login : string) : Observable<User>
  {
    return this.httpClient.get<User>(this.URL+"User/GetByUserLogin/"+Login);
  }
}
