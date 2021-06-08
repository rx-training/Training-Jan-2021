import { Student } from './../Student';
import { Component, OnInit } from '@angular/core';
import {StudentListService} from '../student-list.service';
@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {
  student : Student={ID : 1 ,Name:"",Address:""};
  list : Array<Student>=[];
  constructor(private StudentService: StudentListService) {
    this.list = StudentService.list;
   }


  ngOnInit(): void {
  }
  Submit()
  {
    this.StudentService.AddStudent(this.student);
  }
}
