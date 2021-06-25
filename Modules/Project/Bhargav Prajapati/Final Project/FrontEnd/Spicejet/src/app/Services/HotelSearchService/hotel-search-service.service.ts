import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Searchhotel } from 'src/app/Models/HotelSearch';
import { SearchedHotelData } from 'src/app/Models/searchedhoteldata';

@Injectable({
  providedIn: 'root'
})
export class HotelSearchServiceService {

  constructor(private readonly http:HttpClient) { }

  url:string="https://localhost:44395/api/HotelSearch";
  Data:Array<SearchedHotelData>;

  GetHotel():Observable<Searchhotel[]>
  {
      return this.http.get<Searchhotel[]>(this.url);
     
  }

  StoringData(data:SearchedHotelData)
  {
    
    this.Data=[];
    this.Data.push(data);
    
  }

  showdata()
  {
    return this.Data;
  }

 


}
