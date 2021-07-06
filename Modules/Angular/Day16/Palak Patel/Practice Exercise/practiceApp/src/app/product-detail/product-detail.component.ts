import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id;
  sub;

  constructor(private activateRoute: ActivatedRoute,
    private router:Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.sub=this.activateRoute.params.subscribe(params=>{
      this.id=params['id'];
      let products=this.productService.getProducts();
      this.product=products.find(p=>p.productID==this.id);
    })
  }

  onBack():void {
    this.router.navigate(['product']);

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
