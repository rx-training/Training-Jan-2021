import { Component, OnInit } from '@angular/core';
import {practice} from './practice3.js';

@Component({
  selector: 'app-day15-practice3',
  templateUrl: './day15-practice3.component.html',
  styleUrls: ['./day15-practice3.component.css']
})
export class Day15Practice3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
  }

}
