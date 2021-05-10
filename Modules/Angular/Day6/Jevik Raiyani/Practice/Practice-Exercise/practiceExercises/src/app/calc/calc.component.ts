import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  // sum(){
  //   return this.num1+this.num2;
  // }
  // mul(){
  //   return this.num1*this.num2;
  // }
  // sub(){
  //   return this.num1-this.num2;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
