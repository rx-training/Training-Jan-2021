import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirplaneCostCrud} from 'src/app/Models/AirplaneCostCrud';

@Injectable({
  providedIn: 'root'
})
export class AirplaneCostCrudService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:44395/api/AirplaneCost";

  getAllAirplaneCost():Observable<AirplaneCostCrud[]>
  {
      return this.http.get<AirplaneCostCrud[]>(this.url)
  }
  InsertCost(data:AirplaneCostCrud):Observable<AirplaneCostCrud>
  {
      return this.http.post<AirplaneCostCrud>(this.url,data);
  }
  UpdateCost(costId:number,data:AirplaneCostCrud):Observable<AirplaneCostCrud>
  {
    return this.http.put<AirplaneCostCrud>(this.url+`/${costId}`,data)
  }

  DeleteCost(costId:number):Observable<AirplaneCostCrud>

  {
    return this.http.delete<AirplaneCostCrud>(this.url+`/${costId}`)
  }
 



}
