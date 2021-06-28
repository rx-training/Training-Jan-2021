import { CartService } from './../cart.service';
import { CartList } from './../CartList';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  dataSaved = false;
  carts : CartList[]=[];
  CartForm: any;
  allCarts: any;
  cartIdUpdate = 0;
  cartDescription : any;
  TotalPrice=0;
  color1 : any;

  constructor(private formbuilder: FormBuilder, private cartService: CartService) { }

  ngOnInit() {
    this.loadAllProducts();  
    }
  
  loadAllProducts() {  
    this.cartService.getAllCarts().subscribe(data=>{ this.allCarts = data;console.log(data)});
    this.color();
  }  

   FuncTotalPrice()
   {
    for(let i of this.allCarts)
    {
      this.TotalPrice = this.TotalPrice + i.productPrice;
      console.log(this.TotalPrice);
    }
   }
   deleteCart(itemId: number) {  
     alert("hello");
    if (confirm("Are you sure you want to delete this ?")) {   
    this.cartService.deleteCartById(itemId).subscribe(() => {  
      this.dataSaved = true;  
      alert('Record Deleted Succefully');  
      this.loadAllProducts();  
      this.cartIdUpdate = 0;  
    });  
  }  
}  
delete()
{
  alert("hello");
}
color()
{
  alert("hello");
  console.log(this.allCarts);
  for(var i of this.allCarts)
  {
    // alert(productDescription);
    if(i.productDescription != " ")
    {
      this.color1 = i.productDescription;
    }
  }
}
}
