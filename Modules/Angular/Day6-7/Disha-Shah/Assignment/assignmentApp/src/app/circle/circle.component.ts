import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  Num1:number = 0;
  Result: number = 0;

  calculate(){
    this.Result = Math.PI * this.Num1 * this.Num1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
