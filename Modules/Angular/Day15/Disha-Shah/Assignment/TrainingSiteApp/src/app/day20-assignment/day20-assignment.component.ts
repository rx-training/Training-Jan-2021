import { Component, OnInit } from '@angular/core';
import {assignment} from './assignment';

@Component({
  selector: 'app-day20-assignment',
  templateUrl: './day20-assignment.component.html',
  styleUrls: ['./day20-assignment.component.css']
})
export class Day20AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    assignment();
  }

}
