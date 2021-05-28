import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  radius = 0;
  area = (Math.PI * this.radius * this.radius).toFixed(3);
  constructor() { }

  calculateArea() {
    this.area = (Math.PI * this.radius * this.radius).toFixed(3);
  }
  ngOnInit(): void {
  }

}
