import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.css']
})
export class ProductSpecComponent implements OnInit, OnDestroy {

  product : Product;
  id;
  sub : Subscription;
  
  constructor(private activatedRoute : ActivatedRoute, private router : Router, private productService : ProductService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.parent.params.subscribe(params =>{
      this.id = params['id'];
      let products = this.productService.getProducts();
      this.product = products.find(p => p.ID == this.id);
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
