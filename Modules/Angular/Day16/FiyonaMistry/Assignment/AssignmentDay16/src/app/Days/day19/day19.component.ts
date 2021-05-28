import { Component, OnInit } from '@angular/core';
declare var area : number;
declare var recArea : number;
declare var emp : any;
declare var emp1 : any;
declare var emp2 : any;
declare var add : any;


@Component({
  selector: 'app-day19',
  templateUrl: './day19.component.html',
  styleUrls: ['./day19.component.css']
})
export class Day19Component implements OnInit {

  area : number;
  recArea: number;
  emp : any;
  emp1 : any;
  emp2 : any;
  add : any;

  constructor() { }

  ngOnInit(): void {
    this.area = area;
    this.recArea = recArea;
    this.emp = emp;
    this.emp1 = emp1;
    this.emp2 = emp2;
    this.add = add;
  }

}
