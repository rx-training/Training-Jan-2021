import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  Num1:number = 0;
  Num2:number = 0;
  Result: number = 0;

  calculate(){
    this.Result = this.Num1 * this.Num2;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
