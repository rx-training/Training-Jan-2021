import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Models/Cart';
import { User } from 'src/app/Models/User';
import { Product } from 'src/app/Product';
import { CartService } from 'src/app/Services/cart.service';
import { DemoService } from 'src/app/Services/demo.service';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router : Router,private route : ActivatedRoute,private cartService : CartService, private loginService : LoginService, private demoService : DemoService) { }
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
    setTimeout(() => {
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
      
      this.GetCart();
    }, 1000);
  }

  deleteCart(id : number, pId : number)
  {
    this.cartService.DeleteCart(id,pId).subscribe(data=>{
      if(data == true)
      {
        alert("Deleted successfully");
      }
      else
      {
        alert("Not deleted..");
      }
    });
  }
  clickProduct(id:number)
  {
    this.router.navigate(['../Product',id],{relativeTo : this.route});
  }
}
