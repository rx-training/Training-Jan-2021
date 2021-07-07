import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchedHotelData } from 'src/app/ModelsSpicejet/SearchHotelData';
import { UserEnterHotelData } from 'src/app/ModelsSpicejet/UserEnterHotelData';
import { SearchFlightService } from '../SearchFlightService/search-flight.service';

@Injectable({
  providedIn: 'root'
})
export class SearchHotelServiceService {

  url:string="https://localhost:44326/api/ViewHotelSearch";
  Data:Array<UserEnterHotelData> =[]
  constructor(private http:HttpClient) { }

  GetHotel():Observable<SearchedHotelData[]>
  {
    return this.http.get<SearchedHotelData[]>(this.url);
  }

  StoringData(data:UserEnterHotelData)
  {
    
    this.Data=[];
    this.Data.push(data);
  }
  showdata()
  {
    return this.Data;
  }

}
