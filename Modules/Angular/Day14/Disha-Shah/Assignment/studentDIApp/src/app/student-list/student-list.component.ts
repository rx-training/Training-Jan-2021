import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStudent } from '../models/IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() listValue: Array<IStudent> = []; 

  @Output() editData = new EventEmitter(); 

  list: Array<IStudent> = [];

  remove(id: number){
    this.studentService.removeData(id);
    console.log("data removed successfully!");
  }

  edit(student: IStudent){
    this.editData.emit(student); 
    console.log("edit data displayed successfully!");
  }

  constructor(private studentService: StudentService) { 
  }

  ngOnInit(): void {
  }

}
