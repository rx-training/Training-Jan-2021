import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private httpClient : HttpClient) { }

  URL : string = 'https://localhost:44368/api/';
  getData() : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.URL+'Product/GetAll');
  }
  GetProductById(Id : number) : Observable<Product>
  {
    return this.httpClient.get<Product>(this.URL+'Product/GetById/'+Id);
  }
  UpdateProduct(l : Product) : Observable<boolean>
  {
    return this.httpClient.put<boolean>(this.URL+"Product/Update", l);
  }
  CreateProduct(l : Product) : Observable<number>
  {
    return this.httpClient.post<number>(this.URL+"Product/Create", l);
  }
  DeleteProduct(l : number) : Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.URL+"Product/Delete/"+l);
  }
}
