import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  radius:number=0;
  result:any=null;
  constructor() { }

  ngOnInit(): void {
  }

  area(){
    if(this.radius<0){
      this.result= "Radius cannot be negative!!"
    }else{
      this.result= (2*3.14*this.radius);
    }
  }
}
