import { Component, OnInit } from '@angular/core';
import { IStudent } from '../models/IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  //providers: [StudentService],
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student: IStudent = {id: 0, name: '', address: ''};

  list: Array<IStudent>

  constructor(private studentService: StudentService) { 
    this.list = studentService.getList();
  }

  submit(){
    this.studentService.addData(this.student);
    console.log("data added successfully!");
    this.studentService.getList();
  }

  ngOnInit(): void {
  }

}
