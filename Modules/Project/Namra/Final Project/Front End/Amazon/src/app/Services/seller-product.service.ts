import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerProduct } from '../Models/Seller';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class SellerProductService {
  URL : string = 'https://localhost:44368/api/';
  constructor(private http:HttpClient) { }

  GetProductsSellerById(id : number) : Observable<Product[]>
  {
    return this.http.get<Product[]>(this.URL+"SellerProduct/GetProductsBySellerId/"+id);
  }
  CreateSellerProduct(sl : SellerProduct) : Observable<boolean>
  {
    return this.http.post<boolean>(this.URL+"SellerProduct/Create",sl);
  }
  DeleteSellerProduct(id : number) : Observable<boolean>
  {
    return this.http.delete<boolean>(this.URL+"SellerProduct/Delete/"+id);
  }

}
