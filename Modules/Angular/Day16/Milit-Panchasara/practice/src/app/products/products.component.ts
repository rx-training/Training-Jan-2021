import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit {

  productsList = [];

  constructor(private productService: ProductsService) {
    this.productsList = this.productService.productList;
  }

  ngOnInit(): void {
  }

}
