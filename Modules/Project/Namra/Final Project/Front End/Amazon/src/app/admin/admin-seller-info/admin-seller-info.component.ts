import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seller } from 'src/app/Models/Seller';
import { Product } from 'src/app/Product';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-admin-seller-info',
  templateUrl: './admin-seller-info.component.html',
  styleUrls: ['./admin-seller-info.component.css']
})
export class AdminSellerInfoComponent implements OnInit {

  constructor(private route : ActivatedRoute, private sellerService : SellerService) { }

  seller : Seller =
  {
    sellerId : 0,
    sellerCompanyName : '',
    sellerContactNo : '',
    sellerEmail : '',
    sellerName : '' 
  }
  products :  Product[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      
    });
  }

}
