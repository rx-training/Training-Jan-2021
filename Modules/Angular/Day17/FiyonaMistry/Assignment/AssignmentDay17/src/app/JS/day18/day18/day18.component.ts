import { Component, OnInit } from '@angular/core';

declare var startTimer : any;

@Component({
  selector: 'app-day18',
  templateUrl: './day18.component.html',
  styleUrls: ['./day18.component.css']
})
export class Day18Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    startTimer();
  }
}
