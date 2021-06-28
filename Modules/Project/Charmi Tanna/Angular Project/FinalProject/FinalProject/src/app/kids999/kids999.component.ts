import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import {ProductList} from './../ProductList';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartList } from '../CartList';
@Component({
  selector: 'app-kids999',
  templateUrl: './kids999.component.html',
  styleUrls: ['./kids999.component.css']
})
export class Kids999Component implements OnInit {

  dataSaved = false;
  ProductForm: any;
  allProductsKids999: any;
  productIdUpdate = 0;
  productDescription : any;

  constructor(private formbuilder: FormBuilder,private productService: ProductsService,private cartService : CartService) { }

  ngOnInit() {
    this.loadAllProducts();  
    }

  loadAllProducts() {  
    this.productService.getAllProductsKids999().subscribe(data=>{ this.allProductsKids999 = data;console.log(data)});
   }  

   Search(allProductsKids : any)
   {
     if(this.productDescription != "")
     {
       for(let product of this.allProductsKids999)
       {
         if(product.productDescription==this.productDescription)
         {
          this.allProductsKids999 = this.allProductsKids999.filter(x=>x.productDescription==this.productDescription);
         console.log(this.allProductsKids999);
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
