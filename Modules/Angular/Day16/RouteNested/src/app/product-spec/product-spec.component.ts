import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.css']
})
export class ProductSpecComponent implements OnInit {

  product:Product;
  id;
  sub;
  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }
  ngOnInit() {

    this.sub = this._Activatedroute.parent.params.subscribe(params => {
      this.id = params['id'];
      let products = this._productService.getProducts();
      this.product = products.find(p => p.productID == this.id);

    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
