import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteDetails } from 'src/app/ModelsSpicejet/RouteDetails';

@Injectable({
  providedIn: 'root'
})
export class RouteDetailsService {

  constructor(private http:HttpClient)
   { }

   url:string="https://localhost:44326/api/RouteDetails";
  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }

  public GetAllRoute():Observable<Array<RouteDetails>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
      return this.http.get<Array<RouteDetails>>(this.url,httpOptions);
  }
  public InsertRoute(Data:RouteDetails):Observable<RouteDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.post<RouteDetails>(this.url,Data,httpOptions);
  }
  public UpdateRoute(Data:RouteDetails,RouteId:number)
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.put(this.url+`/${RouteId}`,Data,httpOptions);
  }
  public DeleteRoute(RouteId:number)
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.delete(this.url+`/${RouteId}`,httpOptions);
  }



   
}
