import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{

  value1:number = 10;

  birthday = new Date(1988, 3, 15);

  power = 5;
  factor=1;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {

  }

}


