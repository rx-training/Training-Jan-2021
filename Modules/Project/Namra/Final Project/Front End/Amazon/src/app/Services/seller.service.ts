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
}
