import { SaleList } from './../SaleList';
import { SalesService } from './../sales.service';
import { Router } from '@angular/router';
import { OrderServiceService } from './../order-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  dataSaved = false;
  CartForm: any;
  allCarts: any;
  allOrders : any;
  productIdUpdate = 0;
  cartDescription : any;
  TotalPrice = 0;
  FinalPrice = 0;
  j = 0;
  randomnumber = 0;

  srIdUpdate = 0;
  constructor(private formbuilder: FormBuilder, private orderService : OrderServiceService,private router: Router,private saleService : SalesService) { }

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders()
  {
    this.orderService.getAllOrders().subscribe(data=>{this.allOrders = data; console.log(data)});
  }

  onFormSubmit(order : any) {  
    this.dataSaved = false;  
    const sales = order;  
    this.CreateSale(sales.productCode,sales);  
 
  }  

  CreateSale(productCode :any,sale: SaleList) {  
    
    this.saleService.createSale(sale).subscribe(  
      () =>
       {  
        this.dataSaved = true;  
        alert('Record added to Sales Successfully');  
        this.loadAllOrders();
        this.productIdUpdate = productCode; 
        sale.productCode = productCode;
      }
    );   
    }
}


