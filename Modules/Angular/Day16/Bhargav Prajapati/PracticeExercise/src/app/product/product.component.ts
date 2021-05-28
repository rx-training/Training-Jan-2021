import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../Product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

 constructor(private productservice:ProductService)
 {

 }
  Products:product[];
  ngOnInit(): void {

    this.Products=this.productservice.getProducts();
    
  }

}
