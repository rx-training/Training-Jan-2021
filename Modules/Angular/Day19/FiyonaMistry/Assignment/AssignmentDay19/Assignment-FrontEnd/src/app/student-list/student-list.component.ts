import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IStudent } from '../IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Output() isUpdating : EventEmitter<any> = new EventEmitter;
  StudentList : Array<IStudent>= [];

  constructor(public service : StudentService) { 
    this.service.getStudents().subscribe(data => this.StudentList = data);
  }

  ngOnInit(): void {
  }

  UpdateStudent(st : IStudent , i : number){
    this.service.editStudent(st, i);
    this.isUpdating.emit(true);
  }

}
