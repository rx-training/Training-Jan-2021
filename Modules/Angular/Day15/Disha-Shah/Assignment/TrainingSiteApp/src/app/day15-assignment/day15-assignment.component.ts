import { Component, OnInit } from '@angular/core';
import { assignment } from './assignment.js';

@Component({
  selector: 'app-day15-assignment',
  templateUrl: './day15-assignment.component.html',
  styleUrls: ['./day15-assignment.component.css']
})
export class Day15AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    assignment();
  }

}
