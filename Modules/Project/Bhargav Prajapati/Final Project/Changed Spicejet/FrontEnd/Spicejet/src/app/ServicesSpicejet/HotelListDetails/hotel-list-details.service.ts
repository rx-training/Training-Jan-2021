import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotellistDetails } from 'src/app/ModelsSpicejet/HotelListDetails';

@Injectable({
  providedIn: 'root'
})
export class HotelListDetailsService {

  constructor(private http:HttpClient) { }
  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }
  url:string="https://localhost:44326/api/ListofHotel";

  GetAllList():Observable<Array<HotellistDetails>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };

    return this.http.get<Array<HotellistDetails>>(this.url,httpOptions)

  }
  UpdateList(listId:number,data:HotellistDetails):Observable<HotellistDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.put<HotellistDetails>(this.url+`/${listId}`,data,httpOptions);
  }
  DeleteList(listId:number):Observable<HotellistDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.delete<HotellistDetails>(this.url+`/${listId}`,httpOptions);
  }

}
