import { Component, OnChanges, OnInit } from '@angular/core';
import { practice } from './practice1.js';

@Component({
  selector: 'app-day15-practice1',
  templateUrl: './day15-practice1.component.html',
  styleUrls: ['./day15-practice1.component.css']
})
export class Day15Practice1Component implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    
    practice();
  }

}
