import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirPlaneDetails } from 'src/app/ModelsSpicejet/AirplaneDetails';

@Injectable({
  providedIn: 'root'
})
export class AirplaneServiceService {

  constructor(private http:HttpClient) { }
  //AirPlaneDetails
  url:string="https://localhost:44326/api/AirplaneDetails";
  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }

  public GetAllPlane():Observable<Array<AirPlaneDetails>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.get<Array<AirPlaneDetails>>(this.url,httpOptions);
  }
  public InsertAirplane(data:AirPlaneDetails):Observable<AirPlaneDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.post<AirPlaneDetails>(this.url,data,httpOptions)
  }
  public UpdateAirplane(data:AirPlaneDetails,AirplaneId:number):Observable<AirPlaneDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.put<AirPlaneDetails>(this.url+`/${AirplaneId}`,data,httpOptions);
  } 
  public DeleteAirplane(AirplaneId:number):Observable<AirPlaneDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.delete<AirPlaneDetails>(this.url+`/${AirplaneId}`,httpOptions);
  }
}
