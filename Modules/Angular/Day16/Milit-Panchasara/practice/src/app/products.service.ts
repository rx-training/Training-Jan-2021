import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList = [
    {
      id:1,
      name:"item1",
      description:"this is item1.",
      price: 1000
    },
    {
      id:2,
      name:"item2",
      description:"this is item2.",
      price: 2000
    },
    {
      id:3,
      name:"item3",
      description:"this is item3.",
      price: 2222
    },
    {
      id:4,
      name:"item4",
      description:"this is item4.",
      price: 500
    }
  ];
  constructor() { }
}
