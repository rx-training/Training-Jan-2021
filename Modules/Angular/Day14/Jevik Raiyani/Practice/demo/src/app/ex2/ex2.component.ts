import { Component, OnInit } from '@angular/core';
import { Student } from 'src/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  providers: [StudentService],
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {
  student:Student={Id:1,Name:"",Age:1};

  list: Array<Student> = [];

  constructor(private studentservice:StudentService) {

      studentservice.studentList().subscribe((result: Array<Student>)=>{
        this.list= result;
      });
   }

  ngOnInit(): void {
  }
  submitData(){
    this.studentservice.AddStudent(this.student);
  }

}
