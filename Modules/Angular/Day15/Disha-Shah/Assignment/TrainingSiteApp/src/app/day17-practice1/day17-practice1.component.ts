import { Component, OnInit } from '@angular/core';
import {practice} from './practice';

@Component({
  selector: 'app-day17-practice1',
  templateUrl: './day17-practice1.component.html',
  styleUrls: ['./day17-practice1.component.css']
})
export class Day17Practice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
  }

}
