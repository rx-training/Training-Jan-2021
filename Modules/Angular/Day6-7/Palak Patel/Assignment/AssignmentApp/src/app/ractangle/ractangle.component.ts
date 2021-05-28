import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ractangle',
  templateUrl: './ractangle.component.html',
  styleUrls: ['./ractangle.component.css']
})
export class RactangleComponent implements OnInit {

  length:number=0;
  width:number=0;
  result:any=null;
  constructor() { }

  ngOnInit(): void {
  }

  area(){
    if(this.length<0 || this.width<0){
      this.result= "Length or Width cannot be less than zero"
    }else{
      this.result= (this.length*this.width);
    }
  }

}
