import { Inject, Injectable,Input } from '@angular/core';
import { OrderList } from './OrderList';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  url = 'https://localhost:44327/api/Orders2';  

  constructor(private http: HttpClient) { }  
  getAllOrders(): Observable<OrderList[]> {  
    return this.http.get<OrderList[]>(this.url + '/AllOrders');  
  }  

  getOrderById(srId : number): Observable<OrderList> {  
    return this.http.get<OrderList>(this.url + '/AllOrdersById/'+srId);  
  }  

  createOrder(order: OrderList): Observable<OrderList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<OrderList>(this.url + '/InsertOrderDetails/',  
    order, httpOptions);  
  }    

  updateOrder(srId : number,order: OrderList): Observable<OrderList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<OrderList>( this.url + '/UpdateOrderDetails/'+ srId,  
    order, httpOptions);  
  }  

  deleteOrderById(srId: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteOrderDetails/' + srId,  
 httpOptions);  
  }  
}
