import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDescription } from '../Models/ProductDescription';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductDescriptionService {

  constructor(private httpClient : HttpClient) { }
  URL : string = 'https://localhost:44368/api/';

  GetDescriptionById(id : number) : Observable<ProductDescription>
  {
    return this.httpClient.get<ProductDescription>(this.URL+'ProductDescription/GetByProductId/'+id);
  }
  GetProductByRelatedCategory(category : string) : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>("https://localhost:44368/api/ProductDescription/GetProductByRelatedCategory/"+category);
  }
  GetProductsByDescription(dis : string) : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.URL+'ProductDescription/GetProductByDescription/'+dis);
  }
}
