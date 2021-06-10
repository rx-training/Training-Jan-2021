import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassOrder, Order } from '../Models/ClassOrder';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient : HttpClient) { }
  URL : string = 'https://localhost:44368/api/Order/';

  GetOrdersByUser(id : number) : Observable<Order[]>
  {
    return this.httpClient.get<Order[]>(this.URL+"GetOrderByUserId/"+id);
  }
  GetProductByUser(id : number) : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.URL+"GetProductByUser/"+id);
  }
  CreateOrder(clsOrder : ClassOrder) : Observable<number>
  {
    return this.httpClient.post<number>(this.URL+"CreateOrder",clsOrder);
  }
  UpdateOrder(orderId:number, clsOrder : ClassOrder):Observable<boolean>
  {
    return this.httpClient.put<boolean>(this.URL+"UpdateOrder/"+orderId, clsOrder);
  }
  DeleteOrder(orderId : number) : Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.URL+"DeleteOrder/"+orderId);
  }
}
