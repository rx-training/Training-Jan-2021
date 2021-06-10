import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductImage } from '../Models/ProductImage';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  URL : string = 'https://localhost:44368/api/';
  constructor(private httpClient : HttpClient) { }

  GetProductImages(Id : number) : Observable<ProductImage[]>
  {
    return this.httpClient.get<ProductImage[]>(this.URL + 'ProductImage/GetById/'+Id);
  }
}
