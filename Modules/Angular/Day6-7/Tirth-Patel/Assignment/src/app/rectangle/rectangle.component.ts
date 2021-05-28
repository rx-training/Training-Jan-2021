import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Length = 0;
  Width = 0;
  Area = 0;
  ComputeArea(){
    this.Area = this.Length *  this.Width;
  }
}
