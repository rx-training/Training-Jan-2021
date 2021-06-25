import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from '../Models/Seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  URL : string = 'https://localhost:44368/api/';

  constructor( private http : HttpClient) { }

  GetSellerByProduct(id : number) : Observable<Seller[]>
  {
    return this.http.get<Seller[]>(this.URL+"Seller/GetByProduct/"+id);
  }
  GetAllSellers() : Observable<Seller[]>
  {
    return this.http.get<Seller[]>(this.URL+"Seller/GetAll");
  }
  GetSellerById(id : number) : Observable<Seller>
  {
    return this.http.get<Seller>(this.URL+"Seller/GetById/"+id);
  }
  GetSellerBySellerName(id : string) : Observable<Seller[]>
  {
    return this.http.get<Seller[]>(this.URL+"Seller/GetBySellerName/"+id);
  }
  GetSellerByCompanyName(name : string) : Observable<Seller[]>
  {
    return this.http.get<Seller[]>(this.URL+"Seller/GetByCompanyName/"+name);
  }
  CreateSeller(l : Seller) : Observable<number>
  {
    return this.http.post<number>(this.URL+"Seller/Create", l);
  }
  UpdateSeller(l : Seller) : Observable<boolean>
  {
    return this.http.put<boolean>(this.URL+"Seller/Update",l);
  }
  DeleteSeller(id : number) : Observable<boolean>
  {
    return this.http.delete<boolean>(this.URL+"Seller/Delete/"+id);
  }
}
