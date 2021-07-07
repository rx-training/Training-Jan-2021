import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterAuthentication } from 'src/app/ModelsSpicejet/Authentication';
import { loginmodel } from 'src/app/ModelsSpicejet/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  url:string="https://localhost:44326/api/Authenticate/Register-User"
  RegisterUser(UserData:RegisterAuthentication):Observable<RegisterAuthentication>
  {
    return this.http.post<RegisterAuthentication>(this.url,UserData);
  }

  url1:string="https://localhost:44326/api/Authenticate/login";
  logInDetails(UserData:loginmodel):Observable<loginmodel>
  {
      return this.http.post<loginmodel>(this.url1,UserData);
  }
  url2:string="https://localhost:44326/api/Authenticate/Register-Admin";
  RegisterAdmin(AdminData:RegisterAuthentication):Observable<RegisterAuthentication>
  {
    return this.http.post<RegisterAuthentication>(this.url2,AdminData);
  }
  
}
