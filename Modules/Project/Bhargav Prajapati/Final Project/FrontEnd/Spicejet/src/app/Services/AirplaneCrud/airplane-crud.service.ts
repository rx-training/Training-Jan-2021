import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirPLaneCrud } from 'src/app/Models/AirplaneCrud';

@Injectable({
  providedIn: 'root'
})
export class AirplaneCrudService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:44395/api/AirplaneCrud";

  getAllAirplane():Observable<AirPLaneCrud[]>
  {
      return this.http.get<AirPLaneCrud[]>(this.url)
  }
  InsertPlane(data:AirPLaneCrud):Observable<AirPLaneCrud>
  {
    return this.http.post<AirPLaneCrud>(this.url,data);
  }
  UpdatePane(AirplaneId:number,data:AirPLaneCrud):Observable<AirPLaneCrud>
  {
    return this.http.put<AirPLaneCrud>(this.url+`/${AirplaneId}`,data);
  }
  DeletePlane(AirplaneId:number):Observable<AirPLaneCrud>
  {
    return this.http.delete<AirPLaneCrud>(this.url+`/${AirplaneId}`);
  }
}
