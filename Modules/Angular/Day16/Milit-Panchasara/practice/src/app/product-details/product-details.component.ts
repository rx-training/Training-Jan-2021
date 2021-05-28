import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  
  // @Input() productList;

  id;
  sub;
  product = null;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private productService:ProductsService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.product = this.productService.productList.find(x => x.id == this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
}

}
