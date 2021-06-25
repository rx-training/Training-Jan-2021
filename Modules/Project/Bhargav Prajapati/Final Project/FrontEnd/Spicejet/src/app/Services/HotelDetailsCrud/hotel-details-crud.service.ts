import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelDetailsCrud } from 'src/app/Models/HotelDetailsCrud';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailsCrudService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:44395/api/HotelInfoCrud";
  GetAllHotel():Observable<Array<HotelDetailsCrud>>
  {
      return this.http.get<Array<HotelDetailsCrud>>(this.url)
  }
  UpdateHotel(HotelId:number,data:HotelDetailsCrud):Observable<HotelDetailsCrud>
  {
      return this.http.put<HotelDetailsCrud>(this.url+`/${HotelId}`,data);
  }
  DeleteHotel(HotelId:number):Observable<HotelDetailsCrud>
  {
    return this.http.delete<HotelDetailsCrud>(this.url+`/${HotelId}`)
  }
}
