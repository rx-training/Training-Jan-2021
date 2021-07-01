import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  No1:number = 2;
  No2:number = 5;
  addbtn:string="Addition";
  subbtn:string="Subtracton";
  mulbtn:string="Multiplication";
  constructor() { }

  ngOnInit(): void {}
  Add(){
    var addition = this.No1+this.No2;
    console.log('Addition '+ addition);
  }
  Sub(){
    var subtraction = this.No1 - this.No2;
    console.log('Subtracton '+ subtraction);
  }
  Mul(){
   var multiplication = this.No1 * this.No2;
    console.log('Multiplication '+ multiplication);
  }

}
