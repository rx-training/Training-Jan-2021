import { Component, OnInit } from '@angular/core';
import {array} from './array';

@Component({
  selector: 'app-day16-array',
  templateUrl: './day16-array.component.html',
  styleUrls: ['./day16-array.component.css']
})
export class Day16ArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    array();
  }

}
