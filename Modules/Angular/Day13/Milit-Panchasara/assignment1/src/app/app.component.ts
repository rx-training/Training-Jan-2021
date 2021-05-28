import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';

  studentData:any;
  studentList:Student[] = [];
  
  fetchValue(value:any) {
    this.studentData = value;
    this.studentList.push(this.studentData);
  }
}
