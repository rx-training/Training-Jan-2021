import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  
  public getProducts() {
    let products : Product[];

    products=[
      new Product(1, 'Memory Card', 500),
      new Product(2, 'CPU', 1000),
      new Product(2, 'Monitor', 500)
    ]

    return products;
  }

  public getProduct(id){
    let products:Product[]=this.getProducts();
    return products.find(p=>p.productID==id);
  }
}
