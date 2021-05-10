import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  Name: string = "Disha Shah";
  Num1: number = 0;
  Num2: number = 0;
  operator: string = '';
  Result: number;
  allowCalculate: boolean = true;

  operation(op: string){
    this.operator = op;
    this.allowCalculate = false; 
  }

  calculate(){
    if(this.operator == 'add')
    {
      this.Result = this.Num1 + this.Num2;
    }
    else if(this.operator == 'sub')
    {
      if(this.Num1 >this.Num2)
      {
        this.Result = this.Num1 - this.Num2;
      }
      else{
        this.Result = this.Num2 - this.Num1;
      }
    }
    else if(this.operator=='mul')
    {
      this.Result = this.Num1 * this.Num2;
    }
    else{
      this.Result = this.Num1 / this.Num2;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
