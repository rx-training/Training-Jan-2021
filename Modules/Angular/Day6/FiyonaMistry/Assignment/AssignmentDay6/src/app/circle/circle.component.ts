import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  pie : number = 3.14;
  radius : number;
  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  area(){
    if(this.radius == null){
      alert("Please enter the value of radius")
    }
    else{
      this.result = this.pie * this.radius * this.radius;
    }
  }

}
