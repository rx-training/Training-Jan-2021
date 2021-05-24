import { Component, OnInit } from '@angular/core';
import {assignment} from './assignment';

@Component({
  selector: 'app-day18-assignment',
  templateUrl: './day18-assignment.component.html',
  styleUrls: ['./day18-assignment.component.css']
})
export class Day18AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    assignment();
  }

}
