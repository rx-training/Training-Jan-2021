//import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  product:Product;
  id;
  sub;

  constructor(private activatedRoute:ActivatedRoute, 
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.parent.params.subscribe(params =>{
      this.id = params['id'];
      let products = this.productService.getProducts();
      this.product=products.find(p=>p.productID==this.id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
