import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import {ProductList} from './../ProductList';
import { FormBuilder, Validators, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CartList } from '../CartList';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  dataSaved = false;
  products : ProductList[]=[];
  ProductForm: any;
  allProductsMen: any;
  productIdUpdate = 0;
  productDescription : any;


  constructor(private formbuilder: FormBuilder, private productService: ProductsService,private cartService : CartService) { }

  ngOnInit() : void{
    this.loadAllProducts(); 
    }
  
  loadAllProducts() {  
    this.productService.getAllProductsMen().subscribe(data=>{ this.allProductsMen = data;console.log(data)});
   }  

   Search(allProductsMen : any)
   {
     if(this.productDescription != "")
     {
       for(let product of this.allProductsMen)
       {
         if(product.productDescription==this.productDescription)
         {
          this.allProductsMen = this.allProductsMen.filter(x=>x.productDescription==this.productDescription);
          console.log(this.allProductsMen);
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
          alert('Record saved Successfully');  
          this.loadAllProducts();
          this.productIdUpdate = productCode; 
          cart.productCode = productCode;
        }
      );   
      }
}


