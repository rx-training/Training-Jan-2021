import { Component, OnInit } from '@angular/core';
import {string} from './string.js';

@Component({
  selector: 'app-day16-string',
  templateUrl: './day16-string.component.html',
  styleUrls: ['./day16-string.component.css']
})
export class Day16StringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    string();
  }

}
