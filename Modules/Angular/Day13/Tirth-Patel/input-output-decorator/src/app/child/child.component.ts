import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit ,Input,OnChanges,SimpleChange,SimpleChanges, Output} from '@angular/core';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
 @Input() count : number;
counter= 0;
@Output() valuechange :EventEmitter<number> = new EventEmitter();
private _count = 0;
// @Input() set count(count:number){
//   this._count = count;
//   console.log(count);
// }
// get count():number {return this._count}
//on changes method
inc(){
  this.count++;
  this.valuechange.emit(this.count)
}
//on changes method
dec(){
  this.count--;
  this.valuechange.emit(this.count)
}
ngOnChanges(changes:SimpleChanges){
  for(let p in changes){
    if(p==='count'){
      console.log('previous',changes[p].previousValue)
      console.log('Current',changes[p].currentValue)
      console.log('FirstChange',changes[p].firstChange)
    }
  }
}
handleclick(){
  console.log('I am clicked in child')
}
valuechanged(){
  this.counter = this.counter+1;
  this.valuechange.emit(this.counter);
}

///using input setter method
  constructor() { 
    this.count = 10;
  }

  ngOnInit(): void {
  }

}
