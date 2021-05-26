import { Component, OnInit } from '@angular/core';
declare var calculateOperation : any;
declare var calculateOperation1 : any;
declare var resetForm1 : any;
@Component({
  selector: 'app-day15-assignment-assignment',
  templateUrl: './day15-assignment-assignment.component.html',
  styleUrls: ['./day15-assignment-assignment.component.css']
})
export class Day15AssignmentAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calculate()
  {
    calculateOperation();
  }
  calculate1(){
    calculateOperation1();
  }
  reset()
  {
    resetForm1();
  }
}
