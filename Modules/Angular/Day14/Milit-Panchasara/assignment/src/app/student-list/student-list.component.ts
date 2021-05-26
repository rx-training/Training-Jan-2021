import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]
})
export class StudentListComponent implements OnInit {

  studentList:Student[];
  index:number = -1;
  student?:Student = null;
  stduentObservable:Observable<any>;

  constructor(private studentService:StudentService) {
    this.studentList = studentService.studentList;
   }

  ngOnInit(): void {
  }

  setParams(index, student) {
    this.student = student;
    this.index = index;
  }

  fetchValues(value: Student[]) {
    this.studentList = value;
    this.studentService.studentList = value;
  }

  trackItem (index: number, item: Student) {
    return item;
  }

  deleteStudent(i) {
    this.studentList = this.studentService.deleteStudent(i);
  }

  ngDoCheck() {
    
  }
  
}
