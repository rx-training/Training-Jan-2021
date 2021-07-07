import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightStatus } from 'src/app/ModelsSpicejet/FlightStatus';
import { PassengerDetails } from 'src/app/ModelsSpicejet/PassengerDetails';
import { SearchFlight } from 'src/app/ModelsSpicejet/SearchFlight';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {

  constructor(private http:HttpClient) { }

  url:string="https://localhost:44326/api/ViewSearchedFlight";

  Data:Array<PassengerDetails>;
  Data1:Array<FlightStatus>

  GetAllFlight():Observable<Array<SearchFlight>>
  {
      return this.http.get<Array<SearchFlight>>(this.url);
  }
  StoringData(data:PassengerDetails)
  {
    this.Data=[];
    this.Data.push(data);

  }
  ShowData()
  {
    return this.Data;
  }
  storingData1(data:FlightStatus)
  {
    this.Data1=[];
    this.Data1.push(data);

  }
  showData1()
  {
    return this.Data1
  }
}
