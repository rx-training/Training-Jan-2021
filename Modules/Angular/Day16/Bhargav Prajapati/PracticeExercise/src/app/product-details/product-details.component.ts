import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _Activerought:ActivatedRoute,private _router:Router,private _Productservice:ProductService) { }

  product:product;
  id;
  sub;
  ngOnInit(): void {
      this.sub=this._Activerought.paramMap.subscribe(params =>{
        console.log(params);
        this.id=params.get('id');
        let product=this._Productservice.getProducts();
        this.product=product.find(p=>p.ProductId==this.id);
        
      })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this._router.navigate(['Product']);
 }
}
