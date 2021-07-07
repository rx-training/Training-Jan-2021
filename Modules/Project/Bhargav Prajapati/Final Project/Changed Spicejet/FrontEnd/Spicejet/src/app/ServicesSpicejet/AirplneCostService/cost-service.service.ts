import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CostDetails } from 'src/app/ModelsSpicejet/CostDetails';

@Injectable({
  providedIn: 'root'
})
export class CostServiceService {

  constructor(private http:HttpClient) { }

  
loginToken='';
getToken(){
  const tokenObj: any = sessionStorage.getItem("token");
  this.loginToken = tokenObj;
}
url:string="https://localhost:44326/api/AirplaneCostDetails"

public GetAllCost():Observable<Array<CostDetails>>
{
   this.getToken();
    const httpOptions =
      {
             headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
      };
        return this.http.get<Array<CostDetails>>(this.url,httpOptions);
  }
  public UpdateCost(Cost:CostDetails,costid:number):Observable<CostDetails>
  {
     this.getToken();
    const httpOptions =
      {
             headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
      };

      return this.http.put<CostDetails>(this.url + `/${costid}`,Cost,httpOptions);

  }
  public InsertCost(Cost:CostDetails):Observable<CostDetails>
  {
    this.getToken();
    const httpOptions =
      {
             headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
      };
      return this.http.post<CostDetails>(this.url,Cost,httpOptions);
  }
  public DeleteCost(CostId:number)
  {
    this.getToken();
    const httpOptions =
      {
             headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
      };
      return this.http.delete<CostDetails>(this.url+`/${CostId}`,httpOptions);
  }
}

