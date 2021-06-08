import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-of-rectangle',
  templateUrl: './area-of-rectangle.component.html',
  styleUrls: ['./area-of-rectangle.component.css']
})
export class AreaOfRectangleComponent implements OnInit {
  width : number = 0;
  length : number = 0;
  area : number = 0;
  Area()
  {
    this.area = this.width*this.length;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
