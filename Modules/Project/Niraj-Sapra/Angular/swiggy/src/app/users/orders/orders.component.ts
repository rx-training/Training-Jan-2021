import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {cart} from '../cart';
import { ProductdataService } from '../../admin-penal/product/productdata.service';
import {product} from '../../admin-penal/product/product';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
import { Observable } from 'rxjs';
import {UserdataService} from '../../login-singup/userdata.service';
import { usersingupdata } from '../../login-singup/usersingupdata';
import { Router } from '@angular/router';
import { RestorentService } from '../../admin-penal/restaurant/restorent.service';
import {restaurant} from '../../admin-penal/restaurant/restaurant';
import { OfferService } from '../../admin-penal/restaurant/offer.service';
import {offer} from '../../admin-penal/restaurant/offer';
import {orders} from './orders';
import { OrderdataService } from './orderdata.service';
import {payment} from './payment';
import { PaymentService } from './payment.service';
import {paymenttype} from './paymenttype';
import {PaymenttypeService} from './paymenttype.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  dataSaved = false;
  productdata : any = [];
  catdatas :any = [];
  proddata : any = [];
  restaurantdata :any = []; 
  customerdata : any = [];
  cartdata : any=[];
  cartProd : any=[];
  paymenttypedata : any=[];
  user : any = [] ;
  offerdata : any = [];
  loginForm: any;
  
  subtotal : number;
  Deliverytext :number =30;
  CGSt :number;
  SGST :number;
  FinalTotals : number;
  OfferdisCount :number;
  UserNames : string;
  totalcart:number
  resid:number;
  resName :string;
  resImage :string;
  offer1 : string;
  offer2 : string;
  paymentshow :boolean = false;
  paymentfinal : number;
  offerdiscountprice1:number;
  offerdiscountprice2:number;
  offernamecart:string = "Not Any Offer Applyed";
  offerdiscountpricecart:number = 0;
  cardsno:string;
  cvv:string;
  cardname:string;
  cardtotal:number;
  Choosemethod:string;
  seasons: any = [];
  User:boolean = false;
  constructor(private router : Router,private paytype : PaymenttypeService,@Inject(DOCUMENT) private _document: Document,private paymemtser : PaymentService,private ordershow : OrderdataService, private offers: OfferService, private http: RestorentService,private users:UserdataService,private formbuilder: FormBuilder,private cart : CartService,private prod : ProductdataService,) { }

  ngOnInit(): void {
   
    this.loginForm = this.formbuilder.group({
      cardsno : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]+$')])],
      cvv : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9][0-9][0-9]+$')])],
      cardname : ['',Validators.compose([Validators.required,,Validators.pattern('^[a-z A-Z]+$')])],
      cardtotal : ['',[Validators.required]]
    });
    //product data
    var total=0;
    this.prod.getAllproduct().subscribe(data=>{  
      this.productdata = data;
      console.log(this.productdata);
    
    });
   //Customer data
   this.users.getAllUsers().subscribe(data=>{  
    this.customerdata = data;
    var ids = Number(localStorage.getItem('Customerid'));
    var phones = Number(localStorage.getItem('Customerphoneno'));
    var nameuser = localStorage.getItem('Customername');

    if(ids != null || phones!= null || nameuser  != null){
      this.UserNames = nameuser;  
    }
    
  });


    this.cart.getAll().subscribe(data=>{ 
      this.cartdata = data;
      var totals :number = 0;
      var ids = Number(localStorage.getItem('Customerid'));
      for(var i=0;i < this.cartdata.length  ;i++){//feach restarent id by cart
      if(this.cartdata[i].userId == ids){
        let checks:product[]  = this.productdata.filter(s=>s.productId == this.cartdata[i].productId);  
        let check:cart[] =  this.cartdata.filter(s=>s.productId == this.cartdata[i].productId);      
         totals += this.cartdata[i].productPrice*check[0].productQuantity;
         this.resid =checks[0].restaurantId;
         this.cartProd.push(checks);
      }
      }
      console.log("working  data "+totals);
      this.subtotal = totals;

      //totals
      var FinalTotal = totals + this.Deliverytext - this.offerdiscountpricecart;
      console.log(FinalTotal);
      var gst = (FinalTotal*2.5)/100;
      console.log(gst);
      this.SGST = gst;
      this.CGSt = gst;
      this.FinalTotals = FinalTotal +(gst*2);
    });

    //restaurant data
    this.http.getAll().subscribe(data=>{
      this.restaurantdata = data;
      console.log(data);
      var no =this.resid;
      let resdatas:restaurant[] =  data.filter(s=>s.restaurantId == no);
      this.resName= resdatas[0].restaurantName;
      this.resImage = "../../../assets/img/Categories/Restaurants/"+resdatas[0].restorentImage;
      this.offers.getAll().subscribe(data=>{console.log(data);
        this.offerdata = data;
        let checks:offer[]  = this.offerdata.filter(s=>s.offerId == resdatas[0].offer1id);
        this.offer1 =checks[0].offerName;
        this.offerdiscountprice1 = checks[0].offerDiscountPrice;
        let checkss:offer[]  = this.offerdata.filter(s=>s.offerId == resdatas[0].offer2id);
        this.offer2 = checkss[0].offerName;
        this.offerdiscountprice2 = checkss[0].offerDiscountPrice;
      });
    });
    //payment type
    this.paytype.getAll().subscribe(data=>{  
      this.paymenttypedata = data;
      console.log(this.paymenttypedata);
    });
    this.ordershow.getAll().subscribe(data=>{console.log(data);
    });
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
  offernaems(index:number){
     let checks:offer[]  = this.offerdata.filter(s=>s.offerId == 3);
    return checks[0].offerName;
  }
  offerprices(index:number){
    let checks:offer[]   = this.offerdata.filter(s=>s.offerId == index);
   return checks[0].offerDiscountPrice;
 }
 addoffer(offername:string,index:number){
  this.offernamecart = offername;
  this.offerdiscountpricecart =index;
  var FinalTotal = this.subtotal + this.Deliverytext - this.offerdiscountpricecart;
      var gst = (FinalTotal*2.5)/100;
      this.SGST = gst;
      this.CGSt = gst;
      this.FinalTotals = FinalTotal +(gst*2);
 }
 Payment(index:number){ 
  this.paymentshow =true;
  this.paymentfinal = index;
  
  for(let i=0;i<this.paymenttypedata.length;i++){
    console.log(this.paymenttypedata[i].paymentName); 
    this.seasons.push(this.paymenttypedata[i].paymentName);
    console.log(this.paymenttypedata[i].paymentName);    
  }
 } 
 paymentsform(value : any,total:number){
  var ids = Number(localStorage.getItem('Customerid'));
  var phones = Number(localStorage.getItem('Customerphoneno'));
  var nameuser = localStorage.getItem('Customername');
  console.log(phones);
  let checks:usersingupdata[]  = this.user.filter(s=>s.userId == ids);
  console.log(checks);
  // this.ordershow.Adddata({
  //   orderid :0,
  //   dates : new Date(),
  //   CustomerName : nameuser,
  //   CustomerId: ids,
  //   Orderstats : 2,
  //   Paymentid: 1
  // }).subscribe();
  // console.log("wokring");
  
  const loginuser = this.loginForm.value; 
  console.log("best");
  console.log(loginuser.cardsno);
  console.log("woekring");
  console.log(loginuser.cvv);
  console.log("woekring");
  console.log(loginuser.cardname);
  console.log("woekring");
  console.log(total);
  console.log("woekring");
//  if(loginuser.cardsno != '' || loginuser.cvv != '' || loginuser.cardname != ''||loginuser.cardsno != null || loginuser.cvv != null || loginuser.cardname != null){
    alert("order Successfully");
  
  //} 
  this.loginForm.reset();     
 }
 finalpay(value:any){
  const loginuser = this.loginForm.value;
  console.log(loginuser.Choosemethod); 
 }
 quatity(index:number){
  let checks:cart[] =  this.cartdata.filter(s=>s.productId == index);
  return checks[0].productQuantity;
  }   
}