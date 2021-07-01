import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelCostCurd } from 'src/app/Models/HotelCostCrud';

@Injectable({
  providedIn: 'root'
})
export class HotelCostCrudService {

  constructor(private http:HttpClient) { }

  url:string="https://localhost:44395/api/HotelCostCrud";
  getAllCost():Observable<HotelCostCurd[]>
  {
      return this.http.get<HotelCostCurd[]>(this.url);
  }
  UpdateCost(CostId:number,data:HotelCostCurd):Observable<HotelCostCurd>
  {
        return this.http.put<HotelCostCurd>(this.url+`/${CostId}`,data);
  }
  DeleteCost(CostId:number)
  {
    return this.http.delete<HotelCostCurd>(this.url+`/${CostId}`); 
  }
}
