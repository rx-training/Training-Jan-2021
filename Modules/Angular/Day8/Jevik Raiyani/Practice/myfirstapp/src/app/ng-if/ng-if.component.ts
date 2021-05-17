import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  show : boolean = true;

  a:number =5;
  b:number = 6;
  data:boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }
  valid(){
    if(this.a  >= this.b)
    this.data=true;
    else 
    this.data = false;
  }

  
  showOrHide(){
    if (this.show==true)
    this.show =false;
    else
    this.show= true;
  }
}
