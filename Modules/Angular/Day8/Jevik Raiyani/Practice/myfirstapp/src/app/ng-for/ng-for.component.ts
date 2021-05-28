import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  productList : Array<any> = [];


  constructor() { 
    this.productList =[{ProductName:"pan","ProductPrice":30,"ProductQuantity":50},
                   {ProductName:"Pencil","ProductPrice":15,"ProductQuantity":25}]
  }


  ngOnInit(): void {
  }

}
