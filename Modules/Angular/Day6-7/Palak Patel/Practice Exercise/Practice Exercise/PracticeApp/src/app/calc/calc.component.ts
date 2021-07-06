import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  number1:number = 0;
  number2:number = 0;
  result:any=null;
  constructor() { }

  ngOnInit(): void {
  }

  CalcOperationAdd(){
      this.result= (this.number1+this.number2);
  }
  CalcOperationSub(){
    this.result= (this.number1-this.number2);
  }
  CalcOperationMul(){
    this.result= (this.number1*this.number2);
  }
  CalcOperationDiv(){
    if(this.number2==0){
      this.result= "Divident cannot be zero";
    }else{
      this.result= (this.number1/this.number2).toPrecision(4);
    }
  }
}
