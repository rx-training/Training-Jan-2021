import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  template: `You entered: {{simpleInput}}`,
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, OnChanges {

  @Input() simpleInput: string;

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("ngOnChages called");
    console.log(changes);
    for(let propertyName in changes){
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(`${propertyName} : current value = ${current} : previous value = ${previous}`);
    }
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
