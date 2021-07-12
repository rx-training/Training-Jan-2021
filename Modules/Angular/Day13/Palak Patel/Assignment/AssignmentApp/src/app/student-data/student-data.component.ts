import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IStudent } from 'src/Models/interfaces';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  @Input() studentData: Array<IStudent> = [];
  isActiveInList : boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.studentData);
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
