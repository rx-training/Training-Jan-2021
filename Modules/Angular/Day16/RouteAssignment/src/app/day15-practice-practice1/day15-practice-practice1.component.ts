import { Component, OnInit } from '@angular/core';
declare var outputCheck : any;
declare var calculateAge : any;
declare var changeHeading : any;
@Component({
  selector: 'app-day15-practice-practice1',
  templateUrl: './day15-practice-practice1.component.html',
  styleUrls: ['./day15-practice-practice1.component.css']
})
export class Day15PracticePractice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }


  Age1 : number = 0;
  Age2 : number = 0;
  Age3 : number = 0;
  Age4 : number = 0;
  Age5 : number = 0;
  Age6 : number = 0;
  output(){
    outputCheck();
  }
  calculate()
  {
    calculateAge();
  }
  change(){
    changeHeading();
  }
}
