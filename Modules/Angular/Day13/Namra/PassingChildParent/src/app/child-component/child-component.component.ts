import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
  @Input() count : number;
  @Output() countChanged : EventEmitter<number> = new EventEmitter();
  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }

  ngOnInit(): void {
  }

}
