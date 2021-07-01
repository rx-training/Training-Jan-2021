import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from 'src/app/Models/Seller';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-admin-seller',
  templateUrl: './admin-seller.component.html',
  styleUrls: ['./admin-seller.component.css']
})
export class AdminSellerComponent implements OnInit {

  constructor(private sellerService : SellerService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.search();
  }

  searchName : string = '';
  searchSet = '';
  sellers : Seller[] = [];
  SearchSet(name : string)
  {
    this.searchName = name;
  }
  search(){
    if(this.searchSet == '')
    {
      this.sellerService.GetAllSellers().subscribe(data=>{
        this.sellers = data;
      });
    }
    else
    {
      if(this.searchName == 'Seller')
      {
        this.sellerService.GetSellerBySellerName(this.searchSet).subscribe(data=>{
          this.sellers = data;
        });
      }
      else if(this.searchName == 'Company')
      {
        this.sellerService.GetSellerByCompanyName(this.searchSet).subscribe(data=>{
          this.sellers = data;
        });
      }
      else
      {
        this.sellerService.GetSellerBySellerName(this.searchSet).subscribe(data=>{
          this.sellers = data;
        });
      }
    }
  }
  SellerInfo(id : number | undefined)
  {
    this.router.navigate(['./',id as number],{relativeTo:this.route});
  }
}
