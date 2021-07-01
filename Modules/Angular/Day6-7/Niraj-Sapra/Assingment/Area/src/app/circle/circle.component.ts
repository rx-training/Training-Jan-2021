import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  redius:number = 10;
  circleSubmit:string ="Area-Of-Circle";
  constructor() { }

  ngOnInit(): void {
  }
  AreaCircle(){
    //console.log(3.14*this.redius*this.redius);
    return ("Area of Circle is "+ 3.14*this.redius*this.redius);
  }
}