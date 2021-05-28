import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-practice',
  templateUrl: './input-output-practice.component.html',
  styleUrls: ['./input-output-practice.component.css']
})
export class InputOutputPracticeComponent implements OnInit {

  @Input() count : number;

  // parent listens for child event
  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  _count = 0;
  viewChildCount = 0;

  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }

  newIncrement(){
    this._count++;
  }

  newDecrement(){
    this._count--;
  }

  viewChildIncrement(){
    this.viewChildCount++;
  }

  viewChildDecrement(){
    this.viewChildCount--;
  }

  //private _data = 'Reena Mehta';

  // @Input()
  // set data(data: string){
  //   this._data = data;
  //   console.log(data);
  // }
  // get data():string{
  //   return this._data;
  // }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("ngOnChages called");
    console.log(changes);
    for(let propertyName in changes){
        let change = changes[propertyName];
        let current = JSON.stringify(change.currentValue);
        let previous = JSON.stringify(change.previousValue);
        let firstChange = JSON.stringify(change.firstChange);
        console.log(`${propertyName} : current value = ${current} : previous value = ${previous} : first change value = ${firstChange}`);
      
    }
  }

  ngOnInit(): void {
  }

}
