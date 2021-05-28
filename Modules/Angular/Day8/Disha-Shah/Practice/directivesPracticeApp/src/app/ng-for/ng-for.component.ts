import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  productList: Array<any> = [];
  heroes: Array<any> = [];
  isSpecial: boolean = true;
  canSave = true;
  isUnchanged = false;
  showSad = true;
  hero = '';
  color = '';
  colorNew = 'orange';
  condition = false;
  cityList: Array<any> = [];
  cityId=0;
  regionId = 0;
  city="";
  fname = "Reena";
  lname = "Sharma";
  color1 = 'red';
  color2 = 'green';
  color3 = 'blue';

  trackByItems(index: number, item: any): number { return item.Id; }

  getItems(){
    this.productList = this.getItemsFromServer();
  }

  getItemsFromServer(){
    this.productList.push({Id: this.productList.length + 1, ProductName: "Pen-Pencil", ProductPrice: 30, ProductQuantity: 30});

    return this.productList;
  }

  refreshItems(){
    this.productList = [{Id: 1, ProductName: "Pen", ProductPrice: 30, ProductQuantity: 3},
    {Id: 2, ProductName: "Pencil", ProductPrice: 30, ProductQuantity: 30},
    {Id: 3, ProductName: "Pen-Pencil", ProductPrice: 30, ProductQuantity: 30},
    {Id: 4, ProductName: "Eraser", ProductPrice: 100, ProductQuantity: 100}];
  }

  ToggleFn(){
    if(this.isSpecial)
    {
      this.isSpecial = false;
    }
    else{
      this.isSpecial = true;
    }
    if(this.canSave)
    {
      this.canSave = false;
    }
    else{
      this.canSave = true;
    }
    if(this.isUnchanged)
    {
      this.isUnchanged = false;
    }
    else{
      this.isUnchanged = true;
    }
  }

  getSize(){
    return this.isSpecial===true? '30px': '15px';
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    return {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    return {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  constructor() {
    this.productList = [{Id: 1, ProductName: "Pen", ProductPrice: 30, ProductQuantity: 3},
    {Id: 2, ProductName: "Pencil", ProductPrice: 30, ProductQuantity: 30},
    {Id: 3, ProductName: "Pen-Pencil", ProductPrice: 30, ProductQuantity: 30},
    {Id: 4, ProductName: "Eraser", ProductPrice: 100, ProductQuantity: 100}];

    this.heroes = [{name: "Mr. Nice", emotion:"Happy"},
    {name: "Mr. Sad", emotion:"Sad"},
    {name: "Mr. Confused", emotion:"Confused"},
    {name: "Mr. Angry", emotion:"Angry"}]
   }

  async ngOnInit(): Promise<void> {
    let response = await fetch(`https://localhost:44380/api/BookMyShow/Cities`);
    let data = await response.json();
    console.log(data);
    this.cityList = data;
    console.log(this.cityList);
  }

  async getCityInfo(){
    let response = await fetch(`https://localhost:44380/api/BookMyShow/Cities/${this.cityId}`);
    let data = await response.json();
    console.log(data);
    this.cityId = data.cityId;
    this.regionId = data.regionId;
    this.city = data.name;
  }

}
