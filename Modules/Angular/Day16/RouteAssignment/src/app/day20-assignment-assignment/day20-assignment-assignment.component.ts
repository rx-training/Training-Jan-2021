import { Component, OnInit } from '@angular/core';
declare var addCart : any;
@Component({
  selector: 'app-day20-assignment-assignment',
  templateUrl: './day20-assignment-assignment.component.html',
  styleUrls: ['./day20-assignment-assignment.component.css']
})
export class Day20AssignmentAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addCart(i : number)
  {
    addCart(i);
  }
}
