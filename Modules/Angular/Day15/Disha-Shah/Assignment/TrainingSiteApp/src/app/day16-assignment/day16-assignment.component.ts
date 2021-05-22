import { Component, OnInit } from '@angular/core';
import {assignment} from './assignment';

@Component({
  selector: 'app-day16-assignment',
  templateUrl: './day16-assignment.component.html',
  styleUrls: ['./day16-assignment.component.css']
})
export class Day16AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    assignment();
  }

}
