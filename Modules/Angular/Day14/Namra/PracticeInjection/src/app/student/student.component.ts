import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

//Value data service
import { Inject } from '@angular/core';
export const API_URL : string = 'API_URL';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers : [StudentServiceService]
})
// To register for all component, we can add providers at app.component.ts 
// if we register at different component, that will create different instances for all component
export class StudentComponent implements OnInit {

  list : Array<Student>;
  api : string;
  student : Student = {Id: 0, Name : '',Address : ''};
  constructor(private StudentService : StudentServiceService, @Inject(API_URL) private apiUrl : string) { 
    StudentService.StudentList().subscribe((result : Array<Student>) =>{
      this.list = result;
    });
    this.api = apiUrl;
  }

  AddStudent()
  {
    this.StudentService.AddStudent(this.student);
  }

  ngOnInit(): void {
  }

}
