import { Component, OnInit, ViewChild } from '@angular/core';
import { InputOutputPracticeComponent } from './input-output-practice/input-output-practice.component';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Counter = 5;

  eventEmitter = null;

  title = 'Day13PracticeApp';

  products = [];

  listData = [];  ​

   AddData(arr:any[]){  ​

      this.listData=arr;  ​

   }  ​

  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
  }

  @ViewChild(ViewChildComponent) child: ViewChildComponent

  increment(){
    this.child.increment();
  }

  decrement(){
    this.child.decrement();
  }

  countChangedHandler(count: number){
    this.Counter = count;
    console.log(count);
  }

  productToUpdate: any;
  changeStockValue(p) {
      this.productToUpdate = this.products.find(this.findProducts, [p.id]);
      this.productToUpdate.stock = this.productToUpdate.stock + p.updatdstockvalue;
  }
  findProducts(p) {
      return p.id === this[0];
  }

  onOpen(eventEmitter){

  }

  onClose(eventEmitter){

  }

  ngOnInit() {
    this.products = this.getProducts();
  } 
}
