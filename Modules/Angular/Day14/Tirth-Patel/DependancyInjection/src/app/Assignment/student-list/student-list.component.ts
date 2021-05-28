import { Component, Inject, inject, Input, OnChanges, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentServiceService } from '../StudentService';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'], 


})
export class StudentListComponent implements OnInit ,OnChanges{
List :Student[];
@Input() studentList:Student[] ;
  constructor(   private  service:StudentServiceService) { 

  }
  ngOnInit(){
    this.List = this.studentList;
 
  }
  ngOnChanges(){
    this.List = this.studentList;
  }



  
}
