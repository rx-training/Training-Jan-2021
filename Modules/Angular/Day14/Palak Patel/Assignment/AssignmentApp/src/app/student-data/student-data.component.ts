import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IStudent } from 'src/Models/interfaces';
import { StudentService } from '../services/student-crud/student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  @Input() studentData: Array<IStudent> = [];
  isActiveInList : boolean = false;
  StudentList : Array<IStudent>= [];
  @Output() isUpdating : EventEmitter<any> = new EventEmitter;

  constructor(private students : StudentService) { 
    this.StudentList = this.students.getStudentList;
  }

  ngOnInit(): void {
    console.log(this.studentData);
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
