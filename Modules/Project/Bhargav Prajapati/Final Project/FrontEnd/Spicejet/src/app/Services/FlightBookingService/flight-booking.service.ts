import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightDetails } from 'src/app/Models/FlightSearchModel';
import { FlightStatus } from 'src/app/Models/FLightStatus';
import { PassengerDetails } from 'src/app/Models/PassengerDetails';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingService {

  constructor(private readonly http:HttpClient)
   {


   }

url:string="https://localhost:44395/api/SearchFlight";
Data:Array<PassengerDetails>;
Data1:Array<FlightStatus>;

  GetFlight():Observable<FlightDetails[]>
  {
      return this.http.get<FlightDetails[]>(this.url);
     
  }

  StoringData(data:PassengerDetails)
  {
    
    this.Data=[];
    this.Data.push(data);
    console.log(this.Data);
    
  }

  storingData1(data1:FlightStatus)
  {
    this.Data1=[];
    this.Data1.push(data1);
  }

  showdata()
  {
    return this.Data;
  }
  showdata1()
  {
    return this.Data1;
  }

  
}
