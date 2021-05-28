import { Component, OnInit } from '@angular/core';

declare var assignment17 :any;
@Component({
  selector: 'app-day17-assignment-assignment',
  templateUrl: './day17-assignment-assignment.component.html',
  styleUrls: ['./day17-assignment-assignment.component.css']
})
export class Day17AssignmentAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check()
  {
    assignment17();
  }
}
