import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perent-componant',
  templateUrl: './perent-componant.component.html',
  styleUrls: ['./perent-componant.component.css']
})
export class PerentComponantComponent implements OnInit {

  constructor() { }
  Product=[]
  
  ngOnInit(): void {
    this.Product=this.getProduct();
  }

  // DisplayCount(count)
  // {
  //   console.log(count);
  // }
getProduct()
{
  return [
            { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
            { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
            { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
            { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
            { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
  ]
}

productToUpdate:any;
UpdateStock(p)
{
  console.log(p);
  this.productToUpdate = this.Product.find(this.findProducts, [p.id]);
  this.productToUpdate.stock = this.productToUpdate.stock + p.updatedstockvalue;

  

}

findProducts(p) {
  return p.id === this[0];
}


  

}
