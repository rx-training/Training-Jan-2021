import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IStudent } from '../IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  StudentList : Array<IStudent>= [];

  constructor(public service : StudentService) { 
    this.service.getStudents().subscribe(data => this.StudentList = data);
  }

  isUpdating : boolean = false;

  submit(newStudent : IStudent){
    this.service.addStudent(newStudent).subscribe(data => {this.StudentList.push(data)});
  }

  isUpdatingStudent(event){
    this.isUpdating = event;
  }

  isUpdatingCompleted(event){
    this.isUpdating = event;
  }

  ngOnInit(): void {
  }

}

