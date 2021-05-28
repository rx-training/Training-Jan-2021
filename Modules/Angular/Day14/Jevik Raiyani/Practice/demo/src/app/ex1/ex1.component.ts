import { Component, OnInit } from '@angular/core';
import { Student } from 'src/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  providers: [StudentService],
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {
  student:Student={Id:1,Name:"",Age:1};
  constructor(private studentservice : StudentService) {
   // this.list = studentservice.studentList();
   }

  list: Array<Student>=[];

  ngOnInit(): void {
  }
  submitData(){
    this.studentservice.AddStudent(this.student);
  }

}
