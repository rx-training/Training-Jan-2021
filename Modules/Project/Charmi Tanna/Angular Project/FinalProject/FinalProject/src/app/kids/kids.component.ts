import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import {ProductList} from './../ProductList';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartList } from '../CartList';


@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  dataSaved = false;
  ProductForm: any;
  allProductsKids: any;
  productIdUpdate = 0;
  productDescription : any;

  constructor(private formbuilder: FormBuilder,private productService: ProductsService,private cartService : CartService) { }

  ngOnInit() {
    this.loadAllProducts();  
    }

  loadAllProducts() {  
    this.productService.getAllProductsKids().subscribe(data=>{ this.allProductsKids = data;console.log(data)});
   }  

   Search(allProductsKids : any)
   {
     if(this.productDescription != "")
     {
       for(let product of this.allProductsKids)
       {
         if(product.productDescription==this.productDescription)
         {
          this.allProductsKids = this.allProductsKids.filter(x=>x.productDescription==this.productDescription);
         console.log(this.allProductsKids);
         }
       }

     }
   }
   onFormSubmit(product : any) {  
   this.dataSaved = false;  
   const products = product;  
   this.CreateProduct(products.productCode,products);  

 }  

 CreateProduct(productCode :any,cart: CartList) {  
    
     this.cartService.createCart(cart).subscribe(  
       () =>
        {  
         this.dataSaved = true;  
         alert('Record added to cart Successfully');  
         this.loadAllProducts();
         this.productIdUpdate = productCode; 
         cart.productCode = productCode;
       }
     );   
     }
}



