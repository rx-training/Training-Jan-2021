import { Component, OnInit } from '@angular/core';
import {practice} from './practice';

@Component({
  selector: 'app-day20-practice',
  templateUrl: './day20-practice.component.html',
  styleUrls: ['./day20-practice.component.css']
})
export class Day20PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
  }

}
