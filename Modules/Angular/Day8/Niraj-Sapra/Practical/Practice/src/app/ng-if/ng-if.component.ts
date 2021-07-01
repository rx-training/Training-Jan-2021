import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  
  constructor() { }
  error= true;
  name : string = "";
  ngOnInit(): void {
  }
  validate(){
    if(this.name == ""){
      this.error = true;
    }
    else{
      this.error= false;
    }
  }
  
}
