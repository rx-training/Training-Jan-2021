import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';
import { Cart } from '../Models/Cart';
import { ClassOrder } from '../Models/ClassOrder';
import { ProductDescription } from '../Models/ProductDescription';
import { ProductImage } from '../Models/ProductImage';
import { Product } from '../Product';
import { CartService } from '../Services/cart.service';
import { LoginService } from '../Services/login.service';
import { OrderService } from '../Services/order.service';
import { ProductDescriptionService } from '../Services/product-description.service';
import { ProductImageService } from '../Services/product-image.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private orderService : OrderService,private router : Router,private cartSer: CartService, private loginSer: LoginService, private DescritionService: ProductDescriptionService, private ImageService: ProductImageService, private service: DemoService, private route: ActivatedRoute) { }
  PId: number = 0;
  productDetail: Product = { productId: 0, productName: '', brandId: 0, productPrice: 0, categoryId: 0, produtValidity: 0, imgPath: '', offer: 0 }
  Images: ProductImage[] = [];
  related: string = '';
  public productDescription: ProductDescription = { productId: 0, productDescription1: '', productDescriptionId: 0, extraDescription: '', relatedCategory: '' };
  private sub: any;
  ngOnInit(): void {
    this.productDescription = { productId: 0, productDescription1: '', productDescriptionId: 0, extraDescription: '', relatedCategory: '' };
    this.route.params.subscribe(params => {
      
      this.DescritionService.GetDescriptionById(params['id']).subscribe(data => {
        this.productDescription = data;
        console.log(this.productDescription);
        this.related = this.productDescription.relatedCategory;
      });

      this.service.GetProductById(params['id']).subscribe(data => {
        this.productDetail = data;
        this.clsOrder.ProductId = this.productDetail.productId;
        this.cart.productId = this.productDetail.productId;
      });

      this.ImageService.GetProductImages(params['id']).subscribe(data => {
        this.Images = data;
      });


    });

  }
  Starts(str : string)
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
  cart: Cart = { userId: 0, productId: 0 };
  AddProduct() {
    let user;
    if(localStorage.getItem("UserName") as string == '')
    {
      this.router.navigate(['../../Login'], { relativeTo: this.route });
    }
    else
    {
      this.loginSer.GetUserDataByLogin(localStorage.getItem("UserName") as string).subscribe(data => {
        user = data;
        this.cart.userId = user.userId as number;
        this.cartSer.AddCart(this.cart).subscribe(dt => {
          if (dt == true) {
            alert("product is added successfully...");
          }
          else {
            alert("Product is already in the cart...");
          }
        });
      });
    }
  }
  clsOrder : ClassOrder = {
    ProductId : 0,
    UserId : 0,
    Quantity : 1
  }
  Buy(){
    let user;
    if(localStorage.getItem("UserName") as string == '')
    {
      this.router.navigate(['../../Login'], { relativeTo: this.route });
    }
    else
    {
      this.loginSer.GetUserDataByLogin(localStorage.getItem("UserName") as string).subscribe(data => {
        user = data;
        this.clsOrder.UserId = user.userId as number;
        this.orderService.CreateOrder(this.clsOrder).subscribe(data=>{
          if(data == 0)
          {
            alert("Order is not placed...");
          }
          else{
            alert("Order is placed successfully...");
          }
        })
      });
    }
  }
}
