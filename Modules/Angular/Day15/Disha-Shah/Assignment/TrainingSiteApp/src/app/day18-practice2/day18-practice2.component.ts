import { Component, OnInit } from '@angular/core';
import {practice} from './practice';

@Component({
  selector: 'app-day18-practice2',
  templateUrl: './day18-practice2.component.html',
  styleUrls: ['./day18-practice2.component.css']
})
export class Day18Practice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
  }

}
