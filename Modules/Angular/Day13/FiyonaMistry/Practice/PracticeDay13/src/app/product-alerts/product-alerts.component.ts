import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit, OnChanges {

  @Input() product!: any;
  @Output() notify = new EventEmitter()
  //OnChanges Method
  // @Input() count : number ;
  //Setter Method
  private _count = 0;
  @Output() countChanged : EventEmitter<number> = new EventEmitter();

  constructor() { }

  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }

  @Input()
  set count(count : number){
    this._count = count;
    console.log(count);
  }
  get count() : number {return this._count;}

  ngOnChanges(changes: SimpleChanges): void {
    for(let property in changes){
      if(property === 'count'){
        console.log("Previous : ", changes[property].previousValue);
        console.log("Current : ", changes[property].currentValue);
        console.log("firstChange : ", changes[property].firstChange);
      }
    }
  }

  ngOnInit(): void {
  }

}
