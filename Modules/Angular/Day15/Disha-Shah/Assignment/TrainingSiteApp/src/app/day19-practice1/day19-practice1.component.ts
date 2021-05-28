import { Component, OnInit } from '@angular/core';
import {practice} from './practice';

@Component({
  selector: 'app-day19-practice1',
  templateUrl: './day19-practice1.component.html',
  styleUrls: ['./day19-practice1.component.css']
})
export class Day19Practice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
  }

}
