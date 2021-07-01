import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import {ProductList} from './../ProductList';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { CartList } from '../CartList';
@Component({
  selector: 'app-men999',
  templateUrl: './men999.component.html',
  styleUrls: ['./men999.component.css']
})
export class Men999Component implements OnInit {

  dataSaved = false;
  ProductForm: any;
  allProductsMen999: any;
  productIdUpdate = 0;
  productDescription="";

  constructor(private formbuilder: FormBuilder, private productService: ProductsService,private cartService : CartService) { }

  ngOnInit() {
    this.loadAllProducts();  
    }

  loadAllProducts() {  
    this.productService.getAllProductsMen999().subscribe(data=>{ this.allProductsMen999 = data;console.log(data)});
   }  

   Search(allProductsWomen999 : any)
   {
     if(this.productDescription != "")
     {
       for(let product of this.allProductsMen999)
       {
         if(product.productDescription==this.productDescription)
         {
          this.allProductsMen999 = this.allProductsMen999.filter(x=>x.productDescription==this.productDescription);
          console.log(this.allProductsMen999);
         }
       }
     }
    }

    onFormSubmit(product : any) {  
      alert("hello");
  
     this.dataSaved = false;  
     const products = product;  
     alert(products.productCode);
     alert(products);
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