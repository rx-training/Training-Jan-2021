import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-studentdemo',
  templateUrl: './studentdemo.component.html',
  providers:[StudentService],  
  styleUrls: ['./studentdemo.component.css']
})
export class StudentdemoComponent implements OnInit {
  student:Student={ID:1,Name:'adgd',Address:""};
   constructor(private StudentService:StudentService) {
  //   StudentService.studentlist().subscribe((result:Array<Student>)=>{
  //     this.list= result;
  //   });
    this.list=StudentService.studentlist();
   }
   list:Array<Student>=[];
  ngOnInit(): void {
  }
  submitdata(){
    this.StudentService.AddStudent(this.student)
  }
}
