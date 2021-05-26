import { Component, OnInit } from '@angular/core';
import { CrudoperationService } from '../crudoperation.service';
import { Student } from '../Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  stdList: Student={stdID:1,Name:"",Address:"",ContectNumber:0};
  constructor(private service:CrudoperationService) 
  {
    
   }

  ngOnInit(): void {
  }

  submitdata()
  {
      this.service.AddStudent(this.stdList);    
  }

}
