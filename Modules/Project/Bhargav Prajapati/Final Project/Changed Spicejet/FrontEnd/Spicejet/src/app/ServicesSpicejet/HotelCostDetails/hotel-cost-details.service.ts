import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelCostDetails } from 'src/app/ModelsSpicejet/HotelCostDetails';

@Injectable({
  providedIn: 'root'
})
export class HotelCostDetailsService {

  constructor(private  http:HttpClient) { }
  url:string="https://localhost:44326/api/HotelCost";
  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }

 

  public GetAllCost():Observable<Array<HotelCostDetails>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.get<Array<HotelCostDetails>>(this.url,httpOptions);
  }
  public UpdateCost(CostId:number,Data:HotelCostDetails):Observable<HotelCostDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.put<HotelCostDetails>(this.url+`/${CostId}`,Data,httpOptions);
  }
  public DeleteCost(CostId:number):Observable<HotelCostDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.delete<HotelCostDetails>(this.url+`/${CostId}`,httpOptions);
  }

  


}
