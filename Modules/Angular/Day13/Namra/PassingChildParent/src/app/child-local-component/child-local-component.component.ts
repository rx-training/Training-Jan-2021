import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-local-component',
  templateUrl: './child-local-component.component.html',
  styleUrls: ['./child-local-component.component.css']
})
export class ChildLocalComponentComponent implements OnInit {

  constructor() { }

  count = 0;

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
