import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(){
    let products : Product[];
    products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 200),
      new Product(3, 'Power Bank', 1500)
    ]
    return products;
  }

  getProduct(id){
    let products : Product[] = this.getProducts();
    return products.find(p => p.ID == id);
  }
}
