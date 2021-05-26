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

  Radius: number = 0
  Pi: number = 3.14
  result: number = 0;

  Calculate(): void {
    this.result = this.Pi * this.Radius * this.Radius
  }
}
