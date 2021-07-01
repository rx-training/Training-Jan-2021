import { Component, Input, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';
import jwt_decode from 'jwt-decode';
import { Login } from 'src/assets/Models/Login';
import { Product } from 'src/app/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDescriptionService } from 'src/app/Services/product-description.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

  constructor(private desService : ProductDescriptionService,private service: DemoService,private route : ActivatedRoute, private router : Router) {
  }
  login : Login = {status : 404};
  @Input() Description: string = '';
  to : any ;
  ngOnInit(): void {
    this.GetDataByDescription();
    // this.to = this.GetName('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTmFtcmFQYXRlbCIsImp0aSI6Ijg5MWM0ZGFhLTdkMmMtNGNkYy04MGUzLTI0Zjc3ZTBmZmZhZSIsImV4cCI6MTYyMjc4NjU3OSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo2MTk1NSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.fwZidbGsd0jptAgU8LGxdVH5YVu8XsZPnQQbBi81emE');
    // console.log(this.to);

  }
  
  GetName(Token: string): any {
    try {
      return jwt_decode(Token);
    }
    catch (Error) {
      return null;
    }
  }

  productArr : Product[] = [];
  GetDataByDescription() {
    this.desService.GetProductsByDescription(this.Description).subscribe(data => {
      this.productArr = data;
    });
  }
  imgPath(str : string)
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
  showProduct(ProductId : number)
  {
    this.router.navigate(['../Product',ProductId],{relativeTo : this.route});
  }
}
