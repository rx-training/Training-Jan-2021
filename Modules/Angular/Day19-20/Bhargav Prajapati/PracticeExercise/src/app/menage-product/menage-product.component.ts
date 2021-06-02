import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-menage-product',
  templateUrl: './menage-product.component.html',
  styleUrls: ['./menage-product.component.css']
})
export class MenageProductComponent implements OnInit {

  constructor(private service:ProductsService) { }
  fatching=false;
  EditMode:boolean=false;
  @ViewChild('id') id:ElementRef;
   @ViewChild('name') name:ElementRef;
  @ViewChild('price') price:ElementRef;
  EditIndex:number; 
  Product=[
    // {
    //   id:'p1',
    //   name:'Leptop',
    //   Price:45000
    // },
    // {
    //   id:'p2',
    //   name:'Mobile',
    //   Price:8500
    // },
    // {
    //   id:'p3',
    //   name:'Fan',
    //   Price:2500
    // }
]

  ngOnInit(): void {
      this.fetchProduct();
  }
  AddProduct(id,name,price)
  {
    if(this.EditMode)
    {
      this.Product[this.EditIndex]=
      {
          id:id.value,
          name:name.value,
          Price:price.value,
      }
this.EditMode=false;

    }
    else
    {

    this.Product.push(
      {
        id:id.value,
        name:name.value,
        Price:price.value
      }
    )
  }
  this.saveProduct();
  
}
  saveProduct()
  {
    
    this.service.saveproduct(this.Product).subscribe(
      
      (response)=>console.log(response),
      (err)=>console.log(err)
    )
  }
  fetchProduct()
  {
    this.fatching=true
    this.service.fetchProduct().subscribe(
      (response)=>{
        const data=JSON.stringify(response);
        console.log(response);
        this.Product=JSON.parse(data);
        this.fatching=false;
      }
    )
  }
  DeleteData(idx)
  {
    if(confirm("Do you Want Delete The Product ??"))
    {
    this.Product.splice(idx,1)
    this.saveProduct();
    }

  }

  
  EditData(idx)
  {
    this.EditIndex=idx;
    console.log(this.Product[idx]);
    this.EditMode=true;
    this.id.nativeElement.value=this.Product[idx].id;
    this.name.nativeElement.value=this.Product[idx].name;
    this.price.nativeElement.value=this.Product[idx].Price;


  }

}
