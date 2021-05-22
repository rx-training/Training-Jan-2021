import { Component, OnInit } from '@angular/core';
import {practice} from './practice';

@Component({
  selector: 'app-day18-practice3',
  templateUrl: './day18-practice3.component.html',
  styleUrls: ['./day18-practice3.component.css']
})
export class Day18Practice3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
  }

}
