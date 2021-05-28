import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IStudent } from '../IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  isActiveInList : boolean = false;
  // StudentList : Array<IStudent>;
  @Input() StudentList: Array<IStudent> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.StudentList);
    
  }

  isActiveFunc(){
    this.isActiveInList = !this.isActiveInList;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let property in changes){
      if(property === 'StudentList'){
        console.log("Previous : ", changes[property].previousValue);
        console.log("Current : ", changes[property].currentValue);
        console.log("firstChange : ", changes[property].firstChange);
      }
    }
  }
}
