import { Component, Input, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  Counter = 5;
  
  constructor() { }

  ngOnInit(): void {
  }

  countChangedHandler(count : number){
    this.Counter = count;
    console.log(count);
    
  }

  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
