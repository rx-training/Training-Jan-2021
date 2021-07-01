import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightBooking } from 'src/app/Models/BookingFlight';
import { Data } from 'src/app/Models/CheckInDetails';

@Injectable({
  providedIn: 'root'
})
export class UserBookedFlightCrudService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:44395/api/FlightBooking";

  UserData:Array<Data>=[];

  StoringData(data: Data)
  {
    console.log(data);
    //this.UserData=[];
    this.UserData.push(data);
    console.log(this.UserData);
    
  }

  showdata()
  {
    return this.UserData;
  }



  GetUsers():Observable<FlightBooking[]>
  {
      return this.http.get<FlightBooking[]>(this.url);   
  }

  StoreUsers(data:FlightBooking):Observable<FlightBooking>
  {
      return this.http.post<FlightBooking>(this.url,data);   
  }
  GetDataById(PnrNumber:string,Email:string):Observable<any>
  {
      return this.http.get<any>(this.url + `/${PnrNumber}`+`/${Email}` );
  }
 
  DeleteByPnrNumber(PnrNumber:string):Observable<FlightBooking>
  {
      return this.http.delete<FlightBooking>(this.url + `/${PnrNumber}`);
  }

  UpdateUser(PnrNumber:string,data:FlightBooking):Observable<FlightBooking>
  {
      return this.http.put<FlightBooking>(this.url + `/${PnrNumber}`,data);
  }

}
