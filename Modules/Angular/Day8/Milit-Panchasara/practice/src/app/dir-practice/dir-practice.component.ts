import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-practice',
  templateUrl: './dir-practice.component.html',
  styleUrls: ['./dir-practice.component.css']
})
export class DirPracticeComponent implements OnInit {
  color='red';
  name = '';
  marks = [
    {
      'subject':'Maths',
      'marks':90,
      'grade':'A'
    },
    {
      'subject':'English',
      'marks':50,
      'grade':'C'
    },
    {
      'subject':'Science',
      'marks':25,
      'grade':'D'
    },
    {
      'subject':'Computer',
      'marks':75,
      'grade':'B'
    }
  ]
  
  changeBGColor() {
    return this.name.trim() != '' ? 'green' : 'red';
  }
  constructor() {
    console.log(`new - data is ${this.name}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.name}`);
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
