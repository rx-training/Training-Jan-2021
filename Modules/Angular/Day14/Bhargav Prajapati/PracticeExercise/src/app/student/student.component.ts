import { Component, OnInit } from '@angular/core';
import { CrudoperationService } from '../crudoperation.service';
import { Student } from '../Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service:CrudoperationService) 
  {
    this.List=service.StudentList();
  }
  List:Array<Student>

  ngOnInit(): void {
  }
  del(stdID)
  {
    this.service.DeleteData(this.List,stdID)
  }

}
