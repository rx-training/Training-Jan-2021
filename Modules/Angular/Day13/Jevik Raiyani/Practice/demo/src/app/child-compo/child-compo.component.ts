import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-compo',
  templateUrl: './child-compo.component.html',
  styleUrls: ['./child-compo.component.css']
})
export class ChildCompoComponent implements OnInit {
  @Input() count :number;

  @Output() countChanged : EventEmitter<number> = new EventEmitter();

  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
