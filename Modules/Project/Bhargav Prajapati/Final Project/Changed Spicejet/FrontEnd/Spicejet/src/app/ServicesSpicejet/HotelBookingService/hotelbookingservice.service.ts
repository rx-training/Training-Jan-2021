import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManageHotelUserData } from 'src/app/ModelsSpicejet/MenageHotelUserData';
import { SearchedHotelData } from 'src/app/ModelsSpicejet/SearchHotelData';
import { UserBookingData } from 'src/app/ModelsSpicejet/UserHotelBookingDetails';
import { viewhotelbooking } from 'src/app/ModelsSpicejet/viewHotelBooking';

@Injectable({
  providedIn: 'root'
})
export class HotelbookingserviceService {

  constructor(private http:HttpClient) { }
  Data:Array<SearchedHotelData>=[];
  Data1:Array<ManageHotelUserData>=[];

  StroreData(data:SearchedHotelData)
  {
      this.Data=[];
      this.Data.push(data);
  }
  SendData()
  {
    return this.Data;
  }
  storedata1(data:ManageHotelUserData)
  {
        this.Data1=[];
        this.Data1.push(data);
        //console.log(this.Data1)
  }
  sendData1()
  {
    return this.Data1;
  }

  loginToken='';
  getToken(){
    const tokenObj: any = sessionStorage.getItem("token");
    this.loginToken = tokenObj;
  }
  url:string="https://localhost:44326/api/UserHotelBooking"

  public InsertBooking(UserData:UserBookingData):Observable<UserBookingData>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
      return this.http.post<UserBookingData>(this.url,UserData,httpOptions);     
  }

  url1:string="https://localhost:44326/api/ViewHotelBooking"
  public GetUserByConformation(Conformation:string):Observable<viewhotelbooking>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
      return this.http.get<viewhotelbooking>(this.url1+ `/${Conformation}`,httpOptions);
  }
  public UpdateBooking(UserData:UserBookingData,useid:number):Observable<UserBookingData>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.put<UserBookingData>(this.url+`/${useid}`,UserData,httpOptions);
  }
  public DeleteBooking(userid:number):Observable<UserBookingData>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.delete<UserBookingData>(this.url+`/${userid}`,httpOptions);
  }
  public GetAllBooking():Observable<Array<UserBookingData>>
  {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.get<Array<UserBookingData>>(this.url,httpOptions);
  }




}
