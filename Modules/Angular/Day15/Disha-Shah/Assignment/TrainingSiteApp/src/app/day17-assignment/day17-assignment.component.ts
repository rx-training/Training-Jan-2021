import { Component, OnInit } from '@angular/core';
import {assignment} from './assignment';

@Component({
  selector: 'app-day17-assignment',
  templateUrl: './day17-assignment.component.html',
  styleUrls: ['./day17-assignment.component.css']
})
export class Day17AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    assignment();
  }

}
