import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassOrder, Order, OrderAll, PlacedOrder } from '../Models/ClassOrder';
import { Product } from '../Product';


@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private httpClient: HttpClient) { }

  URL: string = 'https://localhost:44368/api/';

  PlaceOrder(od: Order, AddressId : number): Observable<number> {
    return this.httpClient.post<number>(this.URL + "PlacedOrder/Create/"+AddressId, od);
  }
  
  GetPlacedOrderByUser(id : number) : Observable<PlacedOrder[]>
  {
    return this.httpClient.get<PlacedOrder[]>(this.URL+"PlacedOrder/GetOrderByUserId/"+id);
  }
 
  cls : ClassOrder = {UserId : 0, ProductId : 0, Quantity : 0};
  UpdatePlacedOrder(id : number, status : string) : Observable<boolean>
  {
    return this.httpClient.put<boolean>(this.URL+"PlacedOrder/Update/"+id+"/"+status,this.cls);
  }

  GetProductPlacedByUser(id : number) : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.URL+"PlacedOrder/GetPlacedOrderByUser/"+id);
  }

  PlaceOrders(orders : OrderAll, id : number) : Observable<boolean>
  {
    return this.httpClient.post<boolean>(this.URL+"PlacedOrder/Creates/"+id,orders);
  }

}
