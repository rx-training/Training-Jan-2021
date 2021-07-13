import { Component, OnInit,Inject } from '@angular/core';
import { RestorentService } from './restorent.service';
import {restaurant} from './restaurant';
import { OfferService } from './offer.service';
import {offer} from './offer';
import { CitydataService } from '../city/citydata.service';
import {Citymodel} from '../city/Citymodel';
import { PaymentService } from './payment.service';
import {payment} from './payment';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FormControl } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  dataSaved = false;
  restaurantdata : any = [];
  offerdata : any = [];
  paymentdata : payment[];
  citydata: any=[];
  cityForm :any;
  closeResult:string;
  updateid:number;
  
  ufoottype = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  ucityname = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  urestaurantname = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  utwoperprice= new FormControl( [Validators.required]);
  uoffer1 = new FormControl('', [Validators.required]);
  uoffer2 = new FormControl('', [Validators.required]);
  upayment1 = new FormControl('', [Validators.required]);
  upayment2 = new FormControl('', [Validators.required]);
  uresimage = new FormControl('', [Validators.required]);
  
  // updatecity:string;
  updaterestaurantname:string;
  updatefoottype:string;
  updatetwoperprice:number;
  updateoffer1:string;
  updateoffer2:string;
  updatepayment1:string;
  updatepayment2:string;
  updatepricetwo:number;
   
  offerName:string;
  offerId:number;
  paymentName:string;
  paymentId:number;
  mainimages:string;
  
  constructor(private formbuilder: FormBuilder,private modalService: NgbModal,private cityess: CitydataService , private offers: OfferService, private payments: PaymentService, private http: RestorentService,@Inject(DOCUMENT) private _document: Document) {
   }
   
  ngOnInit(): void {
    this.http.getAll().subscribe(data=>{console.log(data);
      this.restaurantdata = data;
      });

      this.cityess.getAllCity().subscribe(data=>{
        this.citydata = data; });

      this.offers.getAll().subscribe(data=>{
        this.offerdata = data; });

        this.payments.getAll().subscribe(data=>{
          console.log(data);
          this.paymentdata = data; });

      this.cityForm = this.formbuilder.group({
        urestaurantname : ['',[Validators.required]],
        utwoperprice : ['',[Validators.required]],
        upayment1: ['',[Validators.required]],
        upayment2: ['',[Validators.required]],
        uoffer1: ['',[Validators.required]],
        uoffer2: ['',[Validators.required]],
        ufoottype : ['',[Validators.required]],
        cityname : ['',[Validators.required]],
        resname : ['',[Validators.required]],
        resfoodtype: ['',[Validators.required]],
        twoperprice: ['',[Validators.required]],
        offer1: ['',[Validators.required]],
        offer2: ['',[Validators.required]],
        price1 : ['',[Validators.required]],
        price2 : ['',[Validators.required]],
        resimage : ['',[Validators.required]]
      });
    }
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {console.log("working");
      console.log(result);
        
      this.closeResult = `Closed with: ${result}`;
        console.log(this.closeResult);
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    onFileSelected(event) {
      if(event.target.files.length > 0) 
       {
         console.log(event.target.files[0].name);
         this.mainimages = event.target.files[0].name;
       }
     }
    refreshPage() {
      this._document.defaultView.location.reload();
    }
    Offer(index:number){
      let checks:offer[] =  this.offerdata.filter(s=>s.offerId == index );
      this.offerName = checks[0].offerName;
      return this.offerName;
    }
    Payment(index:number){
      let checks:payment[] =  this.paymentdata.filter(s=>s.paymentId == index );
      this.paymentName = checks[0].paymentName;
      return this.paymentName;
    }
    reverseOffer(index:string){
      let checks:offer[] =  this.offerdata.filter(s=>s.offerName == index );
      return  checks[0].offerId;
      
    }
    reversePayment(index:string){
      let checks:payment[] =  this.paymentdata.filter(s=>s.paymentName == index );
      return checks[0].paymentId;
    }
    addrestaurant(value : any){
      
      const citysd = value;
            
      var cityno :number = 0;
      
      this.restaurantdata.forEach(Element => {
       if(Element.restaurantName == citysd.resname){
        cityno =  1;
      }    
      });
        
    if(cityno == 0 && citysd.utwoperprice != " " && citysd.resfoodtype != " " && this.mainimages != " " ){
      console.log(this.mainimages);
      this.http.PushnewData({
        offer1id:this.reverseOffer(citysd.offer1.offerName) ,
        offer2id: this.reverseOffer(citysd.offer2.offerName) ,
        payment1id:this.reversePayment(citysd.price1.paymentName),
        payment2id:this.reversePayment(citysd.price2.paymentName),
        restFoodPricetwoperson: citysd.twoperprice,
        restaurantCity: citysd.cityname.cityName,
        restaurantId: 0,
        restaurantName: citysd.resname,
        restaurantfoodtype: citysd.resfoodtype,
        restorentImage: this.mainimages}).subscribe();
        //this.refreshPage(); 
      }
      
    }

    colseuse(){
      var element = document.getElementById('updateRestorent');
      element.classList.add('removeclass');
      this.refreshPage(); 
    }
  
     deleterow(index:number){
      this.http.deleteDataById(index).subscribe((res)=>{
        let checks:restaurant[] =  this.restaurantdata.filter(s=>s.productId == index );
        this.restaurantdata.splice(checks[0]);
      this.refreshPage();
      });
    }
    

   updaterow(index:number){
      this.updateid = index;  
      let checks:restaurant[] =  this.restaurantdata.filter(data=>data.restaurantId == index);
      this.updaterestaurantname = checks[0].restaurantName;
      this.updatefoottype = checks[0].restaurantfoodtype;
      this.updateoffer1 = this.Offer(checks[0].offer1id);
      this.updateoffer2 = this.Offer(checks[0].offer2id);
//      this.updatepayment1 = this.Payment(checks[0].payment1id);
  //    this.updatepayment2 = this.Payment(checks[0].payment2id);
      var element = document.getElementById('updateRestorent');
      element.classList.add('displayclass'); 
     }
  
     updaterestorent(value : any){ 
      
      const ucitysd =value;
      let checks:restaurant[] =  this.restaurantdata.filter(data=>data.restaurantId == this.updateid);
       if(ucitysd.urestaurantname != " " && ucitysd.utwoperprice != " "){
       this.http.updateData(this.updateid,{
        offer1id:this.reverseOffer(ucitysd.uoffer1.offerName) ,
        offer2id: this.reverseOffer(ucitysd.uoffer2.offerName) ,
        payment1id:this.reversePayment(ucitysd.upayment1.paymentName),
        payment2id:this.reversePayment(ucitysd.upayment2.paymentName),
        restFoodPricetwoperson: ucitysd.utwoperprice,
        restaurantCity: checks[0].restaurantCity,
        restaurantId: this.updateid,
        restaurantName: ucitysd.urestaurantname,
        restaurantfoodtype: ucitysd.ufoottype,
        restorentImage: checks[0].restorentImage}).subscribe();
        this.refreshPage();
       
       
       
       
      //  (this.updateid,{restaurantId:this.updateid,offer1id: this.reverseOffer(ucitysd.uoffer1.offerName),offer2id: this.reverseOffer(ucitysd.uoffer2.offerName),payment1id: this.reversePayment(ucitysd.upayment1.paymentName),payment2id: this.reversePayment(ucitysd.upayment2.paymentName),restFoodPricetwoperson: ucitysd.utwoperprice,restaurantCity: checks[0].restaurantCity,
      //   restaurantfoodtype: checks[0].restaurantfoodtype,
      //   restorentImage: checks[0].restorentImage}).subscribe();
     //this.refreshPage();
       }
    }

}
