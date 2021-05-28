import { Component, OnInit } from '@angular/core';
import { Student } from "../IStudent";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  StudentList : Array<Student>;
  isActiveInList : boolean = false;

  constructor() { 
    this.StudentList = [
      {ID : 1, Name : "Fiyona", Age : 22, Average : 86, Grade : "A", isActive : 1},
      {ID : 2, Name : "Divyang", Age : 23, Average : 79, Grade : "B+", isActive : 0},
      {ID : 3, Name : "Bhargav", Age : 22, Average : 69, Grade : "B", isActive : 1},
      {ID : 4, Name : "Neha", Age : 21, Average : 76, Grade : "B+", isActive : 0},
      {ID : 5, Name : "Yash", Age : 21, Average : 90, Grade : "A+", isActive : 1},
      {ID : 6, Name : "Prarthana", Age : 22, Average : 83, Grade : "A", isActive : 0},
      {ID : 7, Name : "Pratiksha", Age : 22, Average : 80, Grade : "A", isActive : 1},
      {ID : 8, Name : "Devansh", Age : 21, Average : 81, Grade : "A", isActive : 1}
    ]
  }

  ngOnInit(): void {
  }

  isActiveFunc(){
    this.isActiveInList = !this.isActiveInList;
  }

}
