import { Component, OnChanges, OnInit } from '@angular/core';
import {practice} from './practice2.js';

@Component({
  selector: 'app-day15-practice2',
  templateUrl: './day15-practice2.component.html',
  styleUrls: ['./day15-practice2.component.css']
})
export class Day15Practice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
    
  }

}
