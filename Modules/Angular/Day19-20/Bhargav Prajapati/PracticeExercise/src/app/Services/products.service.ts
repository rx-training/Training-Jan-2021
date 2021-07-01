import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient) { }

  url='https://products-47327-default-rtdb.firebaseio.com/product.json'
  saveproduct(product:any[])
  {
    return this.http.put(this.url,product)
  }
  fetchProduct()
  {
    return this.http.get(this.url);
  }
}
