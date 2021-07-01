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
  CreateImage(pi : ProductImage):Observable<boolean>
  {
    return this.httpClient.post<boolean>(this.URL+"ProductImage/Create",pi);
  }
  DeleteImage(id : number) : Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.URL+"ProductImage/Delete/"+id);
  }
}