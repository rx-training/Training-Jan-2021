import { Component, OnInit } from '@angular/core';
declare var index : any;
declare var prototypeProperty : any;
declare var defineProperty : any;
declare var miscellaneous : any;

@Component({
  selector: 'app-day19-assignment-assignment',
  templateUrl: './day19-assignment-assignment.component.html',
  styleUrls: ['./day19-assignment-assignment.component.css']
})
export class Day19AssignmentAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  index(){
    index();
  }

  prototypeProperty(){
    prototypeProperty();
  }

  defineProperty(){
    defineProperty();
  }

  miscellaneous(){
    miscellaneous();
  }

}
