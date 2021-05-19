import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  productList : Array<any> = [];

  constructor() { 
    this.productList = [{Name : "Test1", Price : 30, Qty : 2},
      {Name : "Test2", Price : 120, Qty : 3},
      {Name : "Test3", Price : 20, Qty : 4},
      {Name : "Test4", Price : 12, Qty : 5}]
  }

  ngOnInit(): void {
  }

}
