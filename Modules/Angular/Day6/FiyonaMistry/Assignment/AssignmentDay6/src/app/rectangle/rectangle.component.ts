import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  length : number;
  width : number;
  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  area(){
    if(this.length == null || this.width == null){
      alert("Please do not leave any field blank")
    }
    else{
      this.result = this.width * this.length;
    }
  }

}
