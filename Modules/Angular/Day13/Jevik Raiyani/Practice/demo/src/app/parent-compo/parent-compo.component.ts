import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-compo',
  templateUrl: './parent-compo.component.html',
  styleUrls: ['./parent-compo.component.css']
})
export class ParentCompoComponent implements OnInit {
  Counter = 5;
  countChangedHandler(count:number){
    this.Counter = count;
    console.log(count)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
