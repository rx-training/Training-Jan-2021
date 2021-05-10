import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  Name: string = "";
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  value1:number = 10;
  marks:Array<number>=[10,22,14];
  dob:Date = new Date("1999/09/26");
  status:boolean = true;

  getAge() {
    return new Date().getFullYear() - this.dob.getFullYear();
  }
  
  sayMessage() {
      alert(this.message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
