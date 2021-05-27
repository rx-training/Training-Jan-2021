import { Component, OnInit } from '@angular/core';
declare var validateDate: any;

@Component({
  selector: 'app-day16',
  templateUrl: './day16.component.html',
  styleUrls: ['./day16.component.css']
})
export class Day16Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(input){
    validateDate(input);
  }

}

