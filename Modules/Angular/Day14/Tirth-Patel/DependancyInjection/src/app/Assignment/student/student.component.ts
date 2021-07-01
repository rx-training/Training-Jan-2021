import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentServiceService } from '../StudentService';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],

})
export class StudentComponent implements OnInit {
Student:Student={Id:null,Name:"",City:""};
List:Student[] ;
  constructor(private StudentService:StudentServiceService) {  this.List = this.StudentService.studentList;
    
   }

  ngOnInit(): void {
  
  }

  reset(){
    this.Student ={Id:null,Name:"",City:""};
  }
  Add(){
   
    this.StudentService.AddStudent(this.Student);
    this.reset();
  }
  deleteData(id:number){
    this.StudentService.DeleteStudent(id);
  }
  display(){
    console.log(this.List);
  }
}
