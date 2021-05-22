import { Component, OnInit } from '@angular/core';
import {date} from './date.js';

@Component({
  selector: 'app-day16-date',
  templateUrl: './day16-date.component.html',
  styleUrls: ['./day16-date.component.css']
})
export class Day16DateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    date();
  }

}
