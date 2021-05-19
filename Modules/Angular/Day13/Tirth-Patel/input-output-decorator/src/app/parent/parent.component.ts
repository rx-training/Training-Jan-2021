import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 Counter=10;
  constructor() { }

  ngOnInit(): void {
  }
displayCounter(count:number){
  
this.Counter = count;
console.log(count)
}
}
