import { StudentListService } from './../student-list.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  providers : [StudentListService],
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student : any=Student;
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
