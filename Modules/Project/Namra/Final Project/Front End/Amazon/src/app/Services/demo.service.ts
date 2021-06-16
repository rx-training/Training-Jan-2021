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
}
