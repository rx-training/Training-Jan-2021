import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  length = 0;
  width = 0;
  area = this.length * this.width;
  constructor() { }

  calculateArea() {
    this.area = this.length * this.width;
  }

  ngOnInit(): void {
  }

}
