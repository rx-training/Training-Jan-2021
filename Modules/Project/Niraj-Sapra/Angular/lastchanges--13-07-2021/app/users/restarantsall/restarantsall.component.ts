import { Component, OnInit,Inject } from '@angular/core';
import { RestorentService } from '../../admin-penal/restaurant/restorent.service';
import {restaurant} from '../../admin-penal/restaurant/restaurant';
import { OfferService } from '../../admin-penal/restaurant/offer.service';
import {offer} from '../../admin-penal/restaurant/offer';

import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-restarantsall',
  templateUrl: './restarantsall.component.html',
  styleUrls: ['./restarantsall.component.css']
})
export class RestarantsallComponent implements OnInit {

  dataSaved = false;
  restaurantdata : any = [];
  offerdata : any = [];

  constructor(private formbuilder: FormBuilder, private http: RestorentService, private offers: OfferService,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.http.getAll().subscribe(data=>{console.log(data);
      this.restaurantdata = data;
      });
      this.offers.getAll().subscribe(data=>{console.log(data);
        this.offerdata = data;
        });
  }
  Offer(index:number){
    let checks:offer[] =  this.offerdata.filter(s=>s.offerId == index );
    return checks[0].offerName;
  }
  Image(index:string){
    console.log(index);
    var str = "../../../assets/img/Categories/Restaurants/"+index;
    return str;
  }

}
