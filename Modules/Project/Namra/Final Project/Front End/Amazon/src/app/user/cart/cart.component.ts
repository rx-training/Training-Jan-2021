import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Models/Cart';
import { ClassOrder } from 'src/app/Models/ClassOrder';
import { User } from 'src/app/Models/User';
import { Product } from 'src/app/Product';
import { CartService } from 'src/app/Services/cart.service';
import { DemoService } from 'src/app/Services/demo.service';
import { LoginService } from 'src/app/Services/login.service';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private orderService : OrderService,private router : Router,private route : ActivatedRoute,private cartService : CartService, private loginService : LoginService, private demoService : DemoService) { }
  user : User = {userId : 0,userFirstName : '', userMiddleName :'',userLastName : '', userContactNo : '', userEmail : '', userLogIn : '', userPassword : ''}
  carts : Cart[]= [];
  products : Product[] = [];
  Id : number = 0;
  CartLength : number = 0;
  ngOnInit(): void {
   this.GetCart();
  }
  GetCart()
  {
    
      this.loginService.GetUserDataByLogin(localStorage.getItem("UserName") as string).subscribe(data=>{
        this.user = data;
        this.Id = this.user.userId as number;
        this.cartService.GetCartByUser(this.user.userId as number).subscribe(data=>{
          this.carts = data;
          this.CartLength = this.carts.length;
         
        });
        this.cartService.GetProductByUser(this.user.userId as number).subscribe(data=>{
          this.products = data;
        });
      });
      

  }

  deleteCart(id : number, pId : number)
  {
    this.cartService.DeleteCart(id,pId).subscribe(data=>{
      if(data == true)
      {
        this.GetCart();
      }
      else
      {
        alert("Not deleted..");
      }
    });
  }
  cls : ClassOrder = {
    UserId : 0,
    ProductId : 0,
    Quantity : 1
  }
  imgPath(str : string)
  {
    if(str.startsWith('assets'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  AddOrder(uid : number,pid : number){
    this.cls.UserId = uid;
    this.cls.ProductId = pid;
    this.orderService.CreateOrder(this.cls).subscribe(data=>{
      if(data==0)
      {
        alert("Order is not moved to the bag..");
      }
      else{
        alert("Order is moved to the bag...");
      }
    });
  }
  clickProduct(id:number)
  {
    this.router.navigate(['../Product',id],{relativeTo : this.route});
  }
}
