import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hotelcridenctial } from 'src/app/Models/HotelCridential';
import { Searchhotel } from 'src/app/Models/HotelSearch';
import { BookedHotelUserData } from 'src/app/Models/UserHotelBookingData';
import { UserHotelData } from 'src/app/Models/UserHotelDetails';

@Injectable({
  providedIn: 'root'
})
export class HotelBookingServiceService {


  Url:string="https://localhost:44395/api/HotelBooking";
  Data:Array<Searchhotel>;
  Data1:Array<hotelcridenctial>;
  constructor(private readonly http:HttpClient) { }

  SendData(data:Searchhotel)
  {
    this.Data=[];
    this.Data.push(data);
  }
  SendData1(data:hotelcridenctial)
  {
      this.Data1=[];
      this.Data1.push(data);
  }
  GetData()
  {
    return this.Data;
  }
  GetData1()
  {
    return this.Data1;
  }

  InsertData(data:UserHotelData):Observable<UserHotelData>
  {
    return this.http.post<UserHotelData>(this.Url,data);
  }

  GetUserByConformation(conformationNumber:string,Email:string):Observable<BookedHotelUserData>
  {
        return this.http.get<BookedHotelUserData>(this.Url+`/${conformationNumber}`+`/${Email}`);
  }

  DeleteData(conformationNumber:string):Observable<UserHotelData>
  {
      return this.http.delete<UserHotelData>(this.Url+`/${conformationNumber}`)
  }

  UpdateRecord(conformationNumber:string,data:UserHotelData):Observable<UserHotelData>
  {
      return this.http.put<UserHotelData>(this.Url+`/${conformationNumber}`,data);
  }







}
