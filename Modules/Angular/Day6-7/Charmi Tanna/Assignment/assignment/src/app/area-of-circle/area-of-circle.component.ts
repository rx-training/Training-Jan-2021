import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-of-circle',
  templateUrl: './area-of-circle.component.html',
  styleUrls: ['./area-of-circle.component.css']
})
export class AreaOfCircleComponent implements OnInit {

  radius: number = 0;
  areaOfCircle: number = 0;
  AreaOfCircle()
  {
    this.areaOfCircle = 3.14*this.radius*this.radius;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
