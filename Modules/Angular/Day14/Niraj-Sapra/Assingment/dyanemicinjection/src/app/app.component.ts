import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   providers:[StudentService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dyanemicinjection';
  student:Student={ID:1,Name:'adgd',Address:""};
  constructor(private StudentService:StudentService) {
    this.list=StudentService.studentlist();
   }
   list:Array<Student>=[];
  ngOnInit(): void {
  }
  submitdata(){
    this.StudentService.AddStudent(this.student)
  }
}
