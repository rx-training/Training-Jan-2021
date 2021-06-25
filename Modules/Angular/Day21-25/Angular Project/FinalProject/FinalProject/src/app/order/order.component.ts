import { ProductList } from './../ProductList';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { CartList } from '../CartList';
import { OrderList } from '../OrderList';
import { OrderServiceService } from '../order-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dataSaved = false;
  carts : CartList[]=[];
  CartForm: any;
  allCarts: any;
  allOrders : any;
  cartIdUpdate = 0;
  cartDescription : any;
  TotalPrice = 0;
  FinalPrice = 0;
  j = 0;
  emailId : any;
  randomnumber :number=0;
  str_count = null;
  count =0;
  srIdUpdate = 0;

  constructor(private formbuilder: FormBuilder, private orderService : OrderServiceService,private cartService: CartService, private router: Router) { }

  ngOnInit() {

    this.emailId = localStorage.getItem('emailId');
      this.loadAllProducts();  
      this.loadAllOrders();
    }
  
  loadAllProducts() {  
    this.cartService.getAllCarts().subscribe(data=>{ this.allCarts = data;console.log(data)});
   }  
   loadAllOrders()
   {
     this.orderService.getAllOrders().subscribe(data=>{this.allOrders = data; console.log(data)});
   }
  //  loadAllOrders() {  
  //   this.orderService.getAllOrders().subscribe(data=>{ this.allOrders = data;console.log(data)});
  //   console.log(this.allOrders);
  // }  
  //  FuncTotalPrice()
  //  {
  //    for(let i of this.allCarts)
  //    {
  //      this.TotalPrice=i.productPrice+this.TotalPrice;
  //      this.j= this.j+1;
  //     if(this.j == this.allCarts.length)
  //     {
  //       this.FinalPrice = this.TotalPrice;
  //     }
  //    }
  //    return this.FinalPrice;
  //  }

   generateOrderNumber()
   {
    this.str_count = localStorage.getItem("count");
    if(this.str_count == null || this.str_count == "null")
    {
      this.count = 0;
    }
    else
    {
      this.count = parseInt(this.str_count);
    }
    this.count++;
    localStorage.setItem("count",this.count.toString());
    // var randNumber = 10;
    // localStorage.setItem("RandomNumber",randNumber.toString());
    // randNumber ++;
    // localStorage.getItem(randNumber.toString());
    // alert(this.randomnumber);
   }

   onFormSubmit() {  
    // alert("heelo")
    console.log(this.allCarts);
    this.generateOrderNumber();
    console.log(this.randomnumber);
    for(var j of this.allCarts)
    {
        var orders : OrderList={
        orderId : 0,
        emailId : "",
        productCode :"" ,
        productDescription  :"",
        productSize : 0,
        productPrice : 0
      };
        // alert(allOrders.srId);
        orders.orderId = this.count;
        orders.productCode = j.productCode;
        orders.productDescription = j.productDescription;
        orders.productSize = j.productSize;
        orders.productPrice = j.productPrice;
        orders.emailId = this.emailId;
        console.log(orders);
        this.CreateOrder(orders);  
    }
  }
    CreateOrder(order: OrderList) 
    {
           this.orderService.createOrder(order).subscribe(  
             () =>
              {  
                order.emailId = this.emailId;
                order.orderId = this.randomnumber;
                console.log(order);
                // this.generateOrderNumber();
                // for(var i of this.allOrders)
                // {
                //   i.orderId = this.randomnumber;
                // }
               this.dataSaved = true;   
               this.loadAllProducts();
              //  this.productIdUpdate = srId; 
              //  order.srId = srId;
             }
           );   
           this.router.navigate(['/payment']);
           }
          }
      // alert(j.productCode);
      // var i = 0 ;
      // alert(allOrders);
      // this.allOrders. 
      // allOrders.productCode[i]=j.productCode;
     
  
  // CreateOrder(srId :any,order: any) {
  //   alert("srId");
  //   // for(var i of order)
  //   // { 
  //   //   alert(i.productCode);
  //   // }
  //   alert(order);
  //   this.orderService.createOrder(order).subscribe(  
  //     () => {  
  //     alert("hello");

  //   });
      // alert("hello");
      //alert("srId");
      // this.dataSaved = true;  
      // alert('Record saved Successfully');  
      // this.loadAllBrands();
      // this.BrandIdUpdate = BrandId; 
      // brand.brandId = BrandId;
      // this.hello.reset();  

      // this.dataSaved = true; 
      // alert('Record saved Successfully');  
      // this.loadAllOrders();
      // this.srIdUpdate = srId;
      // srId=srId; 
    
  //}
    // this.loadAllOrders();
    // this.dataSaved = false;
    // for(var i of this.allCarts)
    // {
    //   alert(i.productCode);
      // for(var j of this.allOrders)
      // {
        // j.productCode = 
        
        // alert(j.productCode);
      //}

    //}  
  
  //   const products = allOrders;  
  //   for(var i of allCarts)
  //  {
  //   this.CreateOrder(i.srId,i);  
  //  }
 //}  

//  CreateOrder(srId :any,order: OrderList) {
//      this.orderService.createOrder(order).subscribe(  
//        () =>
//         {  
//           this.generateOrderNumber();
//           for(var i of this.allOrders)
//           {
//             i.orderId = this.randomnumber;
//           }
//          this.dataSaved = true;   
//          this.loadAllProducts();
//          this.productIdUpdate = srId; 
//          order.srId = srId;
//        }
//      );   
//      }
