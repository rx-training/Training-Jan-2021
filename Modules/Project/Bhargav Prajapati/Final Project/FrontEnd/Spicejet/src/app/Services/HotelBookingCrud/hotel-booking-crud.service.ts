import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelBookingCrud } from 'src/app/Models/HotelBookingCrud';

@Injectable({
  providedIn: 'root'
})
export class HotelBookingCrudService {

  constructor(private http:HttpClient)
  {

  }

  url:string="https://localhost:44395/api/HotelBooking"

  GetAllHotelBooking():Observable<Array<HotelBookingCrud>>
  {
      return this.http.get<Array<HotelBookingCrud>>(this.url);
  }

  UpdateBooking(conformation:string,HotelBooking:HotelBookingCrud):Observable<HotelBookingCrud>
  {
    return this.http.put<HotelBookingCrud>(this.url+`/${conformation}`,HotelBooking);
  }
  DeleteBooking(conformation:string)
  {
    return this.http.delete<HotelBookingCrud>(this.url+`/${conformation}`)
  }
}
