import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { products } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() product! : any;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

}
