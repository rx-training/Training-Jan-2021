import { Inject, Injectable,Input } from '@angular/core';
import {CartList} from './CartList';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = 'https://localhost:44327/api/Cart1';  

  constructor(private http: HttpClient) { }  
  getAllCarts(): Observable<CartList[]> {  
    return this.http.get<CartList[]>(this.url + '/AllCarts');  
  }  

  getBrandById(itemId : number): Observable<CartList> {  
    return this.http.get<CartList>(this.url + '/AllCartsById/'+itemId);  
  }  

  createCart(cart: CartList): Observable<CartList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<CartList>(this.url + '/InsertCartDetails/',  
    cart, httpOptions);  
  }    

  updateCart(itemId : number,cart: CartList): Observable<CartList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<CartList>( this.url + '/UpdateCartDetails/'+ itemId,  
    cart, httpOptions);  
  }  

  deleteCartById(itemId: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteCartDetails/' + itemId,  
 httpOptions);  
  }  


}
