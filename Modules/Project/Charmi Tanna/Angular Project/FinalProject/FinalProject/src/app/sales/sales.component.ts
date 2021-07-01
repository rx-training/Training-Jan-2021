import { SaleList } from './../SaleList';
import { SalesService } from './../sales.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import {ProductList} from './../ProductList';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartList } from '../CartList';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  dataSaved = false;
  ProductForm: any;
  allSales: any;
  productIdUpdate = 0;
  productDescription : any;
  constructor(private formbuilder: FormBuilder,private productService: ProductsService,private saleService : SalesService) { }

  ngOnInit() {
    this.loadAllSales();  
    }

  loadAllSales() {  
    this.saleService.getAllSales().subscribe(data=>{ this.allSales = data;console.log(data)});
   }  
//    onFormSubmit(sale : any) {  
//    this.dataSaved = false;  
//    const sales = sale;  
//    this.CreateSale(sales.productCode,sales);  

//  }  

//  CreateSale(productCode :any,sale: SaleList) {  
    
//      this.saleService.createSale(sale).subscribe(  
//        () =>
//         {  
//          this.dataSaved = true;  
//          alert('Record added to Sales Successfully');  
//          this.loadAllSales();
//          this.productIdUpdate = productCode; 
//          sale.productCode = productCode;
//        }
//      );   
//      }

}
