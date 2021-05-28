import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  l: number = 10;
  b:number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
