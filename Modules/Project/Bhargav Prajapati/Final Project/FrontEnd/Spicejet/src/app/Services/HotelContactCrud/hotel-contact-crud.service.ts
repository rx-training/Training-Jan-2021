import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelContectCrud } from 'src/app/Models/HotelContectCrud';

@Injectable({
  providedIn: 'root'
})
export class HotelContactCrudService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:44395/api/HotelContactCrud"
  getAllContect():Observable<Array<HotelContectCrud>>
  {
      return this.http.get<Array<HotelContectCrud>>(this.url);
  }
  UpdateContact(id:number,data:HotelContectCrud):Observable<HotelContectCrud>
  {
    return this.http.put<HotelContectCrud>(this.url+`/${id}`,data);
  }
  DeleteContact(id:number):Observable<HotelContectCrud>
  {
    return this.http.delete<HotelContectCrud>(this.url+`/${id}`)
  }
}
