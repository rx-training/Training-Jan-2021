import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAddress } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  URL : string = 'https://localhost:44368/api/';
  constructor(private httpClient : HttpClient) { }

  GetAddressByUser(id : number) : Observable<UserAddress[]>
  {
    return this.httpClient.get<UserAddress[]>(this.URL+"UserAddress/GetAddressById/"+id);
  }
  AddAddress(address : UserAddress) : Observable<number>
  {
    return this.httpClient.post<number>(this.URL+"UserAddress/Create", address);
  }
  Update(address : UserAddress) : Observable<boolean>
  {
    return this.httpClient.put<boolean>(this.URL +"UserAddress/Update", address);
  }
  Delete(id : number): Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.URL+"UserAddress/Delete/"+id);
  }
}
