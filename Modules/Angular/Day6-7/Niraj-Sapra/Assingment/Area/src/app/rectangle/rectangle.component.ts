import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  length:number = 10 ;
  width:number = 10 ;
  Submit:string ="Submit";
  constructor() { }

  ngOnInit(): void {
  }
  GetArea(){   
    return this.length*this.width;
  }
  
}
