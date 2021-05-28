import { Injectable } from '@angular/core';
import { product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts()
  {
  let products:product[];
  products=[ 
    new product(1,"Memory card",500),
    new product(2,"computer",50000),
    new product(3, "CPU",200000),
    new product(4,"Moblie",20000),
    new product(5,"AC",800000)
  ]
  return products;
  }
  // public getProduct(id)
  // {
  //   let products:product[]=this.getProducts();
  //   return products.find(s=>s.ProductId==id);
  // }
 
}
