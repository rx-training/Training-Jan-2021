import { Component, OnInit } from '@angular/core';
import { Product} from './Product';


@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {

    Productlist:Array<Product>=[]
  constructor() { 
    this.Productlist=
    [
        {
            ProductId:1,
            ProductName:"IceCrim",
            ProductPrice:50,
            ProductQuantity:30
        },
        {
            ProductId:2,
            ProductName:"Pizza",
            ProductPrice:150,
            ProductQuantity:50
        },
        {
            ProductId:3,
            ProductName:"Burger",
            ProductPrice:75,
            ProductQuantity:30
        },
        {
            ProductId:4,
            ProductName:"AQWES",
            ProductPrice:89,
            ProductQuantity:30
        },
        {
            ProductId:5,
            ProductName:"KSLADKMD",
            ProductPrice:89,
            ProductQuantity:30
        }
    ]
  }

  ngOnInit(): void {
  }

  
  ProductName:string="";
  ProductPrice:number=0;
  ProductQuantity=0
  id:number=0


DeleteData(idx)
{
    this.Productlist.splice(idx,1);

}

EditData(item)
{
    this.id=item.ProductId;
    this.ProductName=item.ProductName;
  this.ProductPrice=item.ProductPrice;
  this.ProductQuantity=item.ProductQuantity;    
}
Updatedata()
{
    var item=this.Productlist.find(s=>s.ProductId==this.id);
    item.ProductName=this.ProductName;
    item.ProductPrice=this.ProductPrice;
    item.ProductQuantity=this.ProductQuantity;
}

}
