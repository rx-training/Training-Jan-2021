import { Component, OnInit } from '@angular/core';
declare const display : any;

@Component({
  selector: 'app-day20',
  templateUrl: './day20.component.html',
  styleUrls: ['./day20.component.css']
})
export class Day20Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    display();
  }

}
