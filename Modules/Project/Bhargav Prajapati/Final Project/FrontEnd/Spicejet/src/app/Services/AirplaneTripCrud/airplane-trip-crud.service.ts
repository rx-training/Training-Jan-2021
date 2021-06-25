import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirplaneTripCrud } from 'src/app/Models/AirplaneTripCrud';

@Injectable({
  providedIn: 'root'
})
export class AirplaneTripCrudService {

  constructor(private http:HttpClient) { }
  
  url:string="https://localhost:44395/api/AirplaneTripCrud"

  GetAllFlightTrip():Observable<AirplaneTripCrud[]>
  {
    return  this.http.get<AirplaneTripCrud[]>(this.url)
  }
  DeleteTrip(TravelId:number):Observable<AirplaneTripCrud>
  {
    return this.http.delete<AirplaneTripCrud>(this.url+`/${TravelId}`);
  }
  UpdateTrip(TravelId:number,data:AirplaneTripCrud):Observable<AirplaneTripCrud>
  {
    return this.http.put<AirplaneTripCrud>(this.url+`/${TravelId}`,data);
  }
  InsertTrip(data:AirplaneTripCrud):Observable<AirplaneTripCrud>
  {
        return this.http.post<AirplaneTripCrud>(this.url,data);
  }
}
