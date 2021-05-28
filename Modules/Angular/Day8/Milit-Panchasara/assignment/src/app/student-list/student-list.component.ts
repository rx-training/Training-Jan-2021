import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList:Student[] = [
    { ID:1, Name:'Milit', Age:16, Average:92, Grade:'A', Active:true },
    { ID:2, Name:'Rohan', Age:15, Average:45, Grade:'C', Active:true },
    { ID:5, Name:'John', Age:17, Average:71, Grade:'B', Active:true },
    { ID:6, Name:'Mohan', Age:15, Average:25, Grade:'D', Active:true },
    { ID:3, Name:'Jake', Age:15, Average:25, Grade:'D', Active:false },
    { ID:4, Name:'Mike', Age:17, Average:70, Grade:'B', Active:false },
    { ID:7, Name:'Michel', Age:17, Average:55, Grade:'C', Active:true },
  ];

  constructor() { }

  setClass(grade:any) {
    switch (grade) {
      case 'A':
        return 'grade-A';
    
      case 'B':
        return 'grade-B';

      case 'C':
        return 'grade-C';
    
      case 'D':
        return 'grade-D';
    
      default:
        return ''
        break;
    }
  }

  ngOnInit(): void {
  }

}
