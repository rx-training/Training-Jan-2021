import { Component, OnInit } from '@angular/core';
import { IStudent } from '../models/IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

  studentList: Array<IStudent> = [];

  constructor() { 
    this.studentList = [
      {Id : 1, Name: 'Reena', Age: 22, Average: 120, Grade: 'A', IsActive: true, IsPassed: true},
      {Id : 2, Name: 'Meena', Age: 22, Average: 100, Grade: 'B', IsActive: false, IsPassed: true},
      {Id : 3, Name: 'Tina', Age: 22, Average: 80, Grade: 'C', IsActive: true, IsPassed: true},
      {Id : 4, Name: 'Reekha', Age: 22, Average: 50, Grade: 'D', IsActive: false, IsPassed: true},
      {Id : 5, Name: 'Reshma', Age: 22, Average: 30, Grade: 'E', IsActive: true, IsPassed: false},
      {Id : 6, Name: 'Rita', Age: 22, Average: 100, Grade: 'B', IsActive: true, IsPassed: true},
      {Id : 7, Name: 'Meshwa', Age: 22, Average: 30, Grade: 'E', IsActive: true, IsPassed: false}
    ]
  }

  ngOnInit(): void {
  }

}
