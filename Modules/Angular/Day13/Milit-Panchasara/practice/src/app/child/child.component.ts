import { Component, Input, OnInit, Output, SimpleChanges,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childNum?: any = [];
  @Input() child2?: any;

  childData = "milit from child";

  @Output() changed: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.childNum += 100;
    this.child2 += "abcd";
    this.changed.emit(this.childNum);
    console.log(this.child2);
    
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let prop in changes) {
      if(prop === 'child2') /// this will not detect any changes on array as it is referenced type and theres no change in its reference
      {
        console.log(changes[prop].currentValue);
        console.log(changes[prop].previousValue);
        console.log(changes[prop].firstChange);

      }
    }
  }

}
