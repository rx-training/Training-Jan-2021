import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  Name:string="Bhargav";
  Number1:number=0;
  Number2:number=0;
  cal:string="";
  constructor() { }

  ngOnInit(): void {
  }
  getAddition():void
  {
      
    this.cal= `Addition of ${this.Number1} And ${this.Number2} is  ${(this.Number1 + this.Number2)}`;
  }
  getSubtraction():void
  {
    
    this.cal =`Subtraction of ${this.Number1} And ${this.Number2} is  ${this.Number1 - this.Number2}`;;
  }
  getMultiplication():void
  {
       this.cal= `Multiplication of ${this.Number1} And ${this.Number2} is  ${this.Number1 * this.Number2}`;
  }
  getDivision():void
  {
    
    this.cal=`Division of ${this.Number1} And ${this.Number2} is  ${this.Number1 / this.Number2}`;
  }



}
