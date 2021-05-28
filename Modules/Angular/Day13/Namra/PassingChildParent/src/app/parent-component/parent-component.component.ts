import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  title = 'Component interaction';
  Counter = 5;
  constructor() { }

  ngOnInit(): void {
  }

  countChangedHandler (count : number){
    this.Counter = count;
  }
}
