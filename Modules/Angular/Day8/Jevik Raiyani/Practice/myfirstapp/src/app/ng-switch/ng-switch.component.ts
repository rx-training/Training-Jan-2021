import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  
  productList : Array<any> = [];
  num:number = 0;
  constructor() { 
    this.productList =[{ProductName:"pan","ProductPrice":30,"ProductQuantity":50,"rating":1},
                   {ProductName:"Pencil","ProductPrice":15,"ProductQuantity":25,"rating":2},
                   {ProductName:"X","ProductPrice":15,"ProductQuantity":25,"rating":1},
                   {ProductName:"Y","ProductPrice":15,"ProductQuantity":25,"rating":2}];
  }

  ngOnInit(): void {
  }

}
