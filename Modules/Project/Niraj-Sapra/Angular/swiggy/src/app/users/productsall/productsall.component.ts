import { Component, Inject, OnInit } from '@angular/core';
import { Category } from 'src/app/admin-penal/product/Category';
import { RestorentService } from '../../admin-penal/restaurant/restorent.service';
import {restaurant} from '../../admin-penal/restaurant/restaurant';
import { ProductdataService } from '../../admin-penal/product/productdata.service';
import {product} from '../../admin-penal/product/product';
import { CategoryService } from '../../admin-penal/product/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { OfferService } from '../../admin-penal/restaurant/offer.service';
import {offer} from '../../admin-penal/restaurant/offer';
import { CartService } from '../cart.service';
import {cart} from '../cart';
import { DOCUMENT } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-productsall',
  templateUrl: './productsall.component.html',
  styleUrls: ['./productsall.component.css']
})
export class ProductsallComponent implements OnInit {
  dataSaved = false;
  restaurantdata :any = [];
  categorydata : any = [];
  productdata : any = [];
  offerdata : any = [];
  resid:number;
  catdatas :any = [];
  proddata : any = [];
  cartdata : any=[];
  cartProd : any = [];
  productimage:string;
  restarantimage:string;
  title:String;
  offer1name: string;
  offer2name: string;
  offer1id:number;
  offer2id:number;
  payment1id: number;
  payment2id: number;
  restFoodPricetwoperson: number;
  restaurantCity: string;
  restaurantName: string;
  restaurantfoodtype : string;
  restorentImage: string;
  clickid :number=0;
  productcategorynames:string;
  categorysnum :number;
  defaultcategory:number;
  subtotal: number = 0;
  prodadd:number;
  mainqua:number;
  UserNames: boolean = true;
  cartids:number;
  //Useridbutton : boolean = false;
  constructor(private route: ActivatedRoute,private formbuilder: FormBuilder, private router : Router,private cart : CartService,private prod : ProductdataService,private offer : OfferService , private http: RestorentService, private catedata: CategoryService,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    //parameter get restarent id
    this.resid = this.route.snapshot.params.id;
    //product data
    this.prod.getAllproduct().subscribe(data=>{  
          this.productdata = data;
    });

    //category data
   this.catedata.getAllproduct().subscribe(data=>{
   
    this.categorydata = data;

        for(var i=0;i < this.categorydata.length  ;i++){//feach restarent id by category
          if(this.categorydata[i].resId == this.resid){
            this.catdatas.push(this.categorydata[i]); 
          }
        }
//auto call category call for function
        // this.prodcutfunc(this.catdatas[0].categoryId,this.catdatas[0].categoryName,this.catdatas[0].resId);
        // this.defaultcategory =this.catdatas[0].categoryId;
    //    this.categoryfunc(this.defaultcategory);
    });
        //cart data
        this.cart.getAll().subscribe(data=>{ 
          this.cartdata = data;
          var ids = Number(localStorage.getItem('Customerid'));
          for(var i=0;i < this.cartdata.length  ;i++){//feach restarent id by cart
          if(this.cartdata[i].userId == ids){
            let checks:product[]  = this.productdata.filter(s=>s.productId == this.cartdata[i].productId);  
            let check:cart[] =  this.cartdata.filter(s=>s.productId == this.cartdata[i].productId);      
             this.subtotal += this.cartdata[i].productPrice*check[0].productQuantity; 
             this.cartProd.push(checks);
          }
          }
        });
    //get restarent 
    this.http.getAll().subscribe(data=>{
      this.restaurantdata = data;
      this.Off();//set restarentz
    });
    //get offfers
      this.offer.getAll().subscribe(data=>{
        this.offerdata = data;
        //first offer
        this.Offer();
        //sec offer
        this.Offer2();  
      });
  }
  quatity(index:number){
    let checks:cart[] =  this.cartdata.filter(s=>s.productId == index);
    return checks[0].productQuantity;
  }   
  Off(){
    let resdatas:restaurant[] =  this.restaurantdata.filter(s=>s.restaurantId == this.resid);
    this.restorentImage = "../../../assets/img/Categories/Restaurants/"+resdatas[0].restorentImage;
    this.restaurantName = resdatas[0].restaurantName;
    this.restaurantfoodtype = resdatas[0].restaurantfoodtype;
    this.restFoodPricetwoperson = resdatas[0].restFoodPricetwoperson;
    this.offer1id = resdatas[0].offer1id;
    this.offer2id = resdatas[0].offer2id;
    this.payment1id = resdatas[0].payment1id;
    this.payment2id = resdatas[0].payment2id;
 }
  Offer(){
    let checks:offer[] =  this.offerdata.filter(s=>s.offerId == this.offer1id);
  
  this.offer1name = checks[0].offerName;  
  }
  Offer2(){
    let checks:offer[] =  this.offerdata.filter(s=>s.offerId == this.offer2id);
  this.offer2name = checks[0].offerName;  
  }
  //category name for
  category(index:number){
    let checks:Category[] =  this.categorydata.filter(s=>s.categoryId == index );
    return checks[0].categoryName;
  }//product imags
  Image(index:string){
    var str = "../../../assets/img/Categories/Restaurants/"+index;
    return str;
  }
  //click call orange color call category
  categoryfunc(index:number){
    let checks:Category[] =  this.categorydata.filter(s=>s.categoryId == index );
    if(this.clickid != 0){
      var element1 = document.getElementById('categorynamesclick'+this.clickid);
      element1.classList.remove('clickcategory');
    }
    var element = document.getElementById('categorynamesclick'+index);
    element.classList.add('clickcategory'); 
    this.clickid = index;
    this.prodcutfunc(index,checks[0].categoryName,checks[0].resId);
    return checks[0].categoryName;
  }
  prodcutfunc(index:number,categorynames:string,resids:number){
    this.productcategorynames = categorynames;
    this.proddata =  this.productdata.filter(s=>s.restaurantId == resids && s.categoryid == index);
    this.categorysnum = this.proddata.length;      
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
  //cart in add
  addprod(product:number,prodno:number,prodname:string,prodprice:number){
    this.prodadd = 1;
    var reperts =0 ;
    var ids = Number(localStorage.getItem('Customerid'));
      var phones = Number(localStorage.getItem('Customerphoneno'));
      var nameuser = localStorage.getItem('Customername');
      
      for(let i=0;i<this.cartdata.length;i++){
      
        if(this.cartdata[i].productId == product && this.cartdata[i].userId == ids){
      
          reperts = 1;
        }
      }
      
      if(ids == null || phones == null || nameuser == null ){
        this.router.navigate(['user/Login_signup']);  
      }
      else if(reperts == 1)
      {
        this.showsecondbt(product);
      }
      else
      {        
        this.cart.PushnewData({
          cartId :0,
          productId : product,
          productQuantity : prodno,
          productName: prodname,
          productPrice : prodprice,
          userId: ids}).subscribe();
           this.refreshPage();
      }
    }
    //showsecbutton
    showsecondbt(product:number){
      
      //this.UserNames = false;
      var elements = document.getElementById('Add'+product);
      elements.classList.add('shownone');
      var element = document.getElementById('number'+product);
      element.classList.add('updelcartbutton');
      let checks:cart[] =  this.cartdata.filter(s=>s.productId == product);
      
      this.mainqua = checks[0].productQuantity;

    }    
    //updatecart
    updateadd(product:number){
      let checks:cart[] =  this.cartdata.filter(s=>s.productId == product);
      var quantitys =checks[0].productQuantity;
      quantitys += 1;
      this.cart.updateData(checks[0].cartId,{cartId :checks[0].cartId,
        productId : checks[0].productId,
        productQuantity : quantitys,
        productName: checks[0].productName,
        productPrice : checks[0].productPrice,
        userId: checks[0].userId}).subscribe();
         this.refreshPage();
    
      // this.cart.deleteDataById(product).subscribe();
      // this.refreshPage();
    }
  //deletecartdata
  deleteprod(product:number){
    let checks:cart[] =  this.cartdata.filter(s=>s.productId == product);
  
    var quantitys =checks[0].productQuantity;
    this.mainqua =quantitys;
    if(quantitys==1){
     this.cart.deleteDataById(checks[0].cartId).subscribe();
    }
    else{
      quantitys -= 1;
      this.cart.updateData(checks[0].cartId,{cartId :checks[0].cartId,
        productId : checks[0].productId,
        productQuantity : quantitys,
        productName: checks[0].productName,
        productPrice : checks[0].productPrice,
        userId: checks[0].userId}).subscribe();
         this.refreshPage();
    }
    this.refreshPage();
  }  
    //cart in add data
    checkout(){
      var ids = Number(localStorage.getItem('Customerid'));
      var phones = Number(localStorage.getItem('Customerphoneno'));
      var nameuser = localStorage.getItem('Customername');
      if(ids == null || phones == null || nameuser == null ){
        this.router.navigate(['user/Login_signup']);  
      }
      else{
        this.router.navigate(['Order']);
      }
      
    }
}