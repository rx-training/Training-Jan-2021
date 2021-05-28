import { Component, OnInit } from '@angular/core';
declare var dateCheck : any;
@Component({
  selector: 'app-day16-assignment-assignment',
  templateUrl: './day16-assignment-assignment.component.html',
  styleUrls: ['./day16-assignment-assignment.component.css']
})
export class Day16AssignmentAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CheckDate()
  {
    dateCheck();
  }
}
