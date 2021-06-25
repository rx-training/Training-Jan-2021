import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirplaneBookingCrud } from 'src/app/Models/AirplaneBookingCrud';

@Injectable({
  providedIn: 'root'
})
export class AirplaneBookingCrudService {

  constructor(private http:HttpClient) { }

  url:string="https://localhost:44395/api/ViewBooking"

  GetAllBooking():Observable<AirplaneBookingCrud[]>
  {
      return this.http.get<AirplaneBookingCrud[]>(this.url)
  }
  DeleteBooking(pnrNumber:string):Observable<AirplaneBookingCrud>
  {
    return this.http.delete<AirplaneBookingCrud>(this.url+`/${pnrNumber}`)
  }
  UpdateBooking(PnrNumber:string,Data:AirplaneBookingCrud):Observable<AirplaneBookingCrud>
  {
      return this.http.put<AirplaneBookingCrud>(this.url+`/${PnrNumber}`,Data)
  }
}
