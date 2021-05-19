import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NGForComponent implements OnInit {
  productlist:Array<any> =[];
  updatename ="";
  updateprice = 0;
  constructor() { 
    this.productlist =[{
      productname:"Pen","productprice":30},
      {
        productname:"Pencil","productprice":20},
        {
          productname:"Eraser","productprice":10},
          {
            productname:"pencil-box","productprice":50}
    ]
  }

  ngOnInit(): void {
  }
  remove(product){
    var del = this.productlist.indexOf(product);
    this.productlist.splice(del,1);
  }
  edit(product){
console.log("edit calleds")
this.updatename = product.productname;
this.updateprice = product.productprice;
  }
  update(){
    console.log("update called");
    var up =this.productlist.find(e=>e.productname == this.updatename);
    up.productname = this.updatename;
    up.productprice = this.updateprice;
  }

}
