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
  condition = false;

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
    this.productList = [{ProductName: "Pen", ProductPrice: 30, ProductQuantity: 3},
    {ProductName: "Pencil", ProductPrice: 30, ProductQuantity: 30},
    {ProductName: "Pen-Pencil", ProductPrice: 30, ProductQuantity: 30},
    {ProductName: "Eraser", ProductPrice: 100, ProductQuantity: 100}];

    this.heroes = [{name: "Mr. Nice", emotion:"Happy"},
    {name: "Mr. Sad", emotion:"Sad"},
    {name: "Mr. Confused", emotion:"Confused"},
    {name: "Mr. Angry", emotion:"Angry"}]
   }

  ngOnInit(): void {
  }

}
