import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {

  Res:any;
  constructor() {
    
   }

  ngOnInit(): void {
  }
  Num1:number =0;
  Num2:number =0;
  MyName ="Tirth";
  Add(){
    this.Res= this.Num1 +this.Num2;
  }
  Sub(){
    this.Res= this.Num1 -this.Num2;
  }
  Mul(){
    this.Res= this.Num1 * this.Num2;
  }
  Div(){
    this.Res= this.Num1 /this.Num2;
  }
  }

