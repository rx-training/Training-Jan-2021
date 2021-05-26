import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view-component',
  templateUrl: './child-view-component.component.html',
  styleUrls: ['./child-view-component.component.css']
})
export class ChildViewComponentComponent implements OnInit {

  constructor() {
    this.count = 0;
   }

  count : number;

  ngOnInit(): void {
  }

  increment()
  {
    this.count++;
  }
  decrement()
  {
    this.count--;
  }
}
