import { Component, OnInit } from '@angular/core';
import {practice} from './practice';

@Component({
  selector: 'app-day17-practice2',
  templateUrl: './day17-practice2.component.html',
  styleUrls: ['./day17-practice2.component.css']
})
export class Day17Practice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
  }

}
