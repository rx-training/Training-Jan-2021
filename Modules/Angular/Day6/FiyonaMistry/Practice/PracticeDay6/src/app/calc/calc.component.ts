import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  First : number;
  Second : number;
  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calc(choice : any){
    if(this.First == null || this.Second == null){
      this.alertforNull();
    }
    else{

    if(choice == "add"){
      this.result = this.First + this.Second;
    }
    else if(choice == "minus"){
      if(this.First > this.Second){
        this.result = this.First - this.Second;  
      }
      else{
        this.result = this.Second - this.First;
      }
    }
    if(choice == "multiply"){
      this.result = this.First * this.Second;
    }
    else if(choice == "divide"){
      if(this.First == 0 || this.Second == 0){
        this.alertforDivision();
      }
      else{
        this.result = this.First / this.Second;
      }
    }
  }
  }

  alertforDivision(){
    alert("Division cannot be done using 0");
  }

  alertforNull(){
    alert("Please enter some value");
  }

}
