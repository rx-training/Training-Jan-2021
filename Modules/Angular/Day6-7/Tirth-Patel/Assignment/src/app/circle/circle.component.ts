import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  PI:number = 3.14;
  Radius : number;
  Area : number;
  ComputeArea(){
    this.Area = this.PI * this.Radius * this.Radius;
  }
}
