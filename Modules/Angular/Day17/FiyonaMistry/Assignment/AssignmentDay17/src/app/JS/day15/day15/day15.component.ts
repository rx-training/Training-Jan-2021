import { Component, OnInit } from '@angular/core';
declare var cal : any;

@Component({
  selector: 'app-day15',
  templateUrl: './day15.component.html',
  styleUrls: ['./day15.component.css']
})
export class Day15Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCal(){
    cal();
  }

}
