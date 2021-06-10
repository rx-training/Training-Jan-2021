import {Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
 // templateUrl: './child.component.html',
 //  template: `<button class='btn btn-primary' (click)="handleclick()">Click me</button> `,
 template: `<button class='btn btn-primary' (click)="valueChanged()">Click me</button> `, 
 styleUrls: ['./child.component.css']
})
export class ChildComponent  {
//   handleclick() {

//     console.log('hey I am  clicked in child');
// }
  @Output() valueChange = new EventEmitter();
  Counter = 0;

  valueChanged() { // You can give any function name

      this.Counter = this.Counter + 1;
      this.valueChange.emit(this.Counter);
  }

}
