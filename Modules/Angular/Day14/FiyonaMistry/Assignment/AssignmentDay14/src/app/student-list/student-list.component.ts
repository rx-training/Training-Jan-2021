import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
// import * as EventEmitter from 'events';
import { IStudent } from '../IStudent';
import { StudentService } from '../lib/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

  isActiveInList : boolean = false;
  StudentList : Array<IStudent>= [];
  @Output() isUpdating : EventEmitter<any> = new EventEmitter;

  constructor(private students : StudentService) { 
    this.StudentList = this.students.getStudentList;
  }

  ngOnInit(): void {
  }

  isActiveFunc(){
    this.isActiveInList = !this.isActiveInList;
  }

  DeleteStudent(i : number){
    this.students.deleteStudent(i);
  }

  UpdateStudent(st : IStudent, i : number){
    this.students.editStudent(st, i);
    this.isUpdating.emit(true);
  }
}
