import { Component, OnInit,Inject, SimpleChanges } from '@angular/core';
import {Citymodel} from '../admin-penal/city/Citymodel';
import { CitydataService } from '../admin-penal/city/citydata.service';
import {restaurant} from '../admin-penal/restaurant/restaurant';
import { RestorentService } from '../admin-penal/restaurant/restorent.service';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import {cart} from './cart';
import {Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSaved = false;
  citysdata :Citymodel[]=[];
  cartdata :cart[]=[];
  cartProd: any =[];
  cityForm :any;
  cartproducts:string;
  cartproduct:number;
  cardnumbers : boolean = true;
  UserNames:string;
  phones:number;
  btnno : number= 0;
  ids: number;
  constructor(private formbuilder: FormBuilder, private router : Router,private resservice:RestorentService,private httpcart:CartService,private dataservice:CitydataService,@Inject(DOCUMENT) private _document: Document) { }
  ngOnInit(): void {
    this.getloaddata();
   
    this.httpcart.getAll().subscribe((data)=>{​​​​
      this.cartdata = data;
      this.ids = Number(localStorage.getItem('Customerid'));
      this.phones = Number(localStorage.getItem('Customerphoneno'));
      this.UserNames = localStorage.getItem('Customername');
      var datss = localStorage.getItem('login');
      if((localStorage.getItem('login')== "true")){

        this.cardnumbers = false;
      }

      for(var i=0;i < this.cartdata.length  ;i++){//feach restarent id by cart
        let checks:cart[]   = this.cartdata.filter(s=>s.userId == this.ids);
        this.cartProd.push(checks);
      }

      if(this.cartProd.length == 0){
        this.cartproducts = "";
      }
      else{
        this.cartproduct = this.cartProd.length;
      }
    });
  }
  getloaddata(){
    this.dataservice.getAllCity().subscribe((data)=>{​​​
      this.citysdata = data    
    });
  }
  
  refreshPage() {
    this._document.defaultView.location.reload();
  }
  logout(){
    localStorage.setItem('login', "false")
    localStorage.removeItem('Customerid');
    localStorage.removeItem('Customerphoneno');
    localStorage.removeItem('Customername');
    this.refreshPage();
  }
  buttonsdata(){
    if(this.btnno == 0){
      this.btnno = 1;
    }
    else{
      this.btnno = 0;
      var elements = document.getElementById('collapsibleNavbar');
      elements.classList.remove('shownone');
    }

    if(this.btnno == 1){
      var elements = document.getElementById('collapsibleNavbar');
      elements.classList.add('shownone'); 
    }
  }
}
