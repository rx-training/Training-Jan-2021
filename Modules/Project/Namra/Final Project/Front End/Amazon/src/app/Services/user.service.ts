import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInModel } from '../Models/LoginModel';
import { RegisterResponse } from '../Models/RegisterResponse';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL : string = 'https://localhost:44368/api/';
  constructor(private httpClient : HttpClient) { }
  loginModel : LogInModel = {
    Username : '',
    Password : '' 
  }
  CreateUser(user : User): Observable<number>
  {
    var lag = this.httpClient.post<number>(this.URL+"User/Create",user);
    
    setTimeout(() => {
      
    }, 1000);
   
    return lag;
  }
  RegisterUser(user : User)
  {
    setTimeout(() => {
      
    }, 1000);
    this.loginModel.Username = user.userLogIn;
    this.loginModel.Password = user.userPassword as unknown as string;
    this.loginModel.Email = user.userEmail;
    return this.httpClient.post<RegisterResponse>(this.URL+"authenticate/register",this.loginModel);
  }
}
