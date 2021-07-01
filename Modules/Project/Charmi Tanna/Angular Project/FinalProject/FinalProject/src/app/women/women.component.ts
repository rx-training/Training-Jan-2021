import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import {ProductList} from './../ProductList';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { CartList } from '../CartList';


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  dataSaved = false;
  ProductForm: any;
  allProductsWomen: any;
  productIdUpdate = 0;
  productDescription="";

  constructor(private formbuilder: FormBuilder, private productService: ProductsService,private cartService : CartService) { }

  ngOnInit() {
    this.loadAllProducts();  
    }

  loadAllProducts() {  
    this.productService.getAllProductsWomen().subscribe(data=>{ this.allProductsWomen = data;console.log(data)});
   }  

   Search(allProductsWomen : any)
   {
     if(this.productDescription != "")
     {
       for(let product of this.allProductsWomen)
       {
         if(product.productDescription==this.productDescription)
         {
          this.allProductsWomen = this.allProductsWomen.filter(x=>x.productDescription==this.productDescription);
          console.log(this.allProductsWomen);
         }
       }

     }
   }

   onFormSubmit(product : any) {  
    alert("hello");

   this.dataSaved = false;  
   const products = product;  
   this.CreateProduct(products.productCode,products);  

 }  

 CreateProduct(productCode :any,cart: CartList) {  
    
     this.cartService.createCart(cart).subscribe(  
       () =>
        {  
          alert("welcome");
         this.dataSaved = true;  
         alert('Record saved Successfully');  
         this.loadAllProducts();
         this.productIdUpdate = productCode; 
         cart.productCode = productCode;
       }
     );   
     }
}
