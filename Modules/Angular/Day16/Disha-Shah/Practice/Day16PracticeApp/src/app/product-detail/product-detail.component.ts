import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product | undefined;
   id: any;
   
   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private _productService:ProductService){
   }
   
   sub: Subscription | undefined;
 
   ngOnInit() {
 
      this.sub=this._Activatedroute.paramMap.subscribe(params => { 
         console.log(params);
          this.id = params.get('id'); 
          let products=this._productService.getProducts();
          this.product=products.find(p => p.productID==this.id);    
      });
 
   }
 
   ngOnDestroy() {
     this.sub?.unsubscribe();
   }
   
   onBack(): void {
      this._router.navigate(['product']);
   }
}
