import { Component, OnInit } from '@angular/core';
import {practice} from './practice';

@Component({
  selector: 'app-day16-practice',
  templateUrl: './day16-practice.component.html',
  styleUrls: ['./day16-practice.component.css']
})
export class Day16PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    practice();
  }

}
