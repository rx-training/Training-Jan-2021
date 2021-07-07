import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelDetails } from 'src/app/ModelsSpicejet/HotelDetails';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailsService {

  constructor(private http:HttpClient) { }

  url:string="https://localhost:44326/api/HotelDetails"
  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }
  GetAllHotel():Observable<Array<HotelDetails>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
     return  this.http.get<Array<HotelDetails>>(this.url,httpOptions)
  }
  UpdateHotel(data:HotelDetails,hotelId:number):Observable<HotelDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.put<HotelDetails>(this.url+`/${hotelId}`,data,httpOptions);
  }
  DeleteHotel(hotelId:number):Observable<HotelDetails>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.delete<HotelDetails>(this.url+`/${hotelId}`,httpOptions);
  }

}
