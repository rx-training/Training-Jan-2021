import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-local-component',
  templateUrl: './parent-local-component.component.html',
  styleUrls: ['./parent-local-component.component.css']
})
export class ParentLocalComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Parent interacts with child via local variable';
}
