import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchBooking } from 'src/app/ModelsSpicejet/SearchBooking';
import { SearchedUserData } from 'src/app/ModelsSpicejet/SearchedUserDate';

@Injectable({
  providedIn: 'root'
})
export class SearchBookingService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:44326/api/ViewBookingFlight";
  UserData:Array<SearchedUserData>=[]

  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }
  public StoreData(data:SearchedUserData)
  {
      this.UserData.push(data);
  }
  public ShowData()
  {
    return this.UserData;
  }
  public GetBookingByPnrNumber(PnrNumber:string):Observable<Array<SearchBooking>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
      return this.http.get<Array<SearchBooking>>(this.url +`/${PnrNumber}`,httpOptions);
  }
 
}
