import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesPracticeApp';

  productList: Array<any> = [];

  constructor(){
    this.productList = [{ProductName: "Pen", ProductPrice: 30, ProductQuantity: 3},
    {ProductName: "Pencil", ProductPrice: 30, ProductQuantity: 30},
    {ProductName: "Pen-Pencil", ProductPrice: 30, ProductQuantity: 30},
    {ProductName: "Eraser", ProductPrice: 100, ProductQuantity: 100}];
  }

}
