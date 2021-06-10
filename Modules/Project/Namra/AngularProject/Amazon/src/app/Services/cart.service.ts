import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../Models/Cart';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient : HttpClient) { }
  URL : string = 'https://localhost:44368/api/';

  GetProductByUser(id : number) : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.URL+"Cart/GetProductByUser/"+id);
  }
  GetCartByUser(id:number): Observable<Cart[]>
  {
    return this.httpClient.get<Cart[]>(this.URL+"Cart/GetByUser/"+id);
  }
  DeleteCart(id:number, pid : number) : Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.URL+"Cart/Delete/"+id+"/"+pid);
  }
  AddCart(cart : Cart) : Observable<boolean>
  {
    return this.httpClient.post<boolean>(this.URL+"Cart/Create", cart);
  }
}
