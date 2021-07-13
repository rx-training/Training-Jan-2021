import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {cart} from '../cart';
import { ProductdataService } from '../../admin-penal/product/productdata.service';
import {product} from '../../admin-penal/product/product';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {UserdataService} from '../../login-singup/userdata.service';
import { usersingupdata } from '../../login-singup/usersingupdata';
import { Router } from '@angular/router';
import { RestorentService } from '../../admin-penal/restaurant/restorent.service';
import {restaurant} from '../../admin-penal/restaurant/restaurant';
import { OfferService } from '../../admin-penal/restaurant/offer.service';
import {offer} from '../../admin-penal/restaurant/offer';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent implements OnInit {
  dataSaved = false;
  productdata : any = [];
  catdatas :any = [];
  proddata : any = [];
  restaurantdata :any = []; 
  customerdata : any = [];
  cartdata : any=[];
  cartProd : any=[];
  user : any = [] ;
  offerdata : any = [];
  subtotal :number;
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
  private _document: any;
  offer1 : string;
  offer2 : string;
  offerdiscountprice1:number;
  offerdiscountprice2:number;
  constructor(private router : Router, private offers: OfferService, private http: RestorentService,private users:UserdataService,private formbuilder: FormBuilder,private cart : CartService,private prod : ProductdataService,) { }

  ngOnInit(): void {
    //product data
    var total=0;
    this.prod.getAllproduct().subscribe(data=>{  
      this.productdata = data;
      console.log(this.productdata);
      // this.totalcart = 1;
    });
   //Customer data
   this.users.getAllUsers().subscribe(data=>{  
    this.customerdata = data;
    var ids = Number(localStorage.getItem('Customerid'));
    var phones = Number(localStorage.getItem('Customerphoneno'));
    let checks:usersingupdata[]  = this.customerdata.filter(s=>s.phoneno == phones);
    this.UserNames = checks[0].names;
  });
    //cart data
    this.cart.getAll().subscribe(data=>{  
      this.cartdata = data;console.log(this.cartdata);
      this.totalcart =this.cartdata.length
      
      for(var i=0;i < this.cartdata.length  ;i++){//feach restarent id by cart
        let checks:product[]   = this.productdata.filter(s=>s.productId == this.cartdata[i].productId);
        total += this.cartdata[i].productPrice*this.cartdata[i].productQuantity;
        this.resid =checks[0].restaurantId;
        this.cartProd.push(checks);
      }
      this.subtotal = total;
      //totals
      this.OfferdisCount = 0;
      var FinalTotal = this.subtotal + this.Deliverytext - this.OfferdisCount;
      console.log(FinalTotal);
      var gst = (FinalTotal*2.5)/100;
      console.log(gst);
      this.SGST = gst;
      this.CGSt = gst;
      this.FinalTotals = FinalTotal +(gst*2);
    //offer
    // this.offers.getAll().subscribe(data=>{console.log(data);
    //   this.offerdata = data;
    //   });       
      
    });
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
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
  offernaems(index:number){
    console.log("call");
    console.log(index);
     let checks:offer[]  = this.offerdata.filter(s=>s.offerId == 3);
     console.log(checks[0].offerName);
    return checks[0].offerName;
  }
  offerprices(index:number){
    let checks:offer[]   = this.offerdata.filter(s=>s.offerId == index);
   return checks[0].offerDiscountPrice;
 }
 logout(){
  var ids = Number(localStorage.getItem('Customerid'));
  var phones = Number(localStorage.getItem('Customerphoneno'));
  var nameuser = localStorage.getItem('Customername');
  if(ids != null || phones != null || nameuser != null ){
    localStorage.removeItem('Customerid');
    localStorage.removeItem('Customerphoneno');
    localStorage.removeItem('Customername');
  }
}
  
}
