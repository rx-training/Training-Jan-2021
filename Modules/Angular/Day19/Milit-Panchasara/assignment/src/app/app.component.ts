import { Component, OnInit } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit {
  title = 'assignment1';

  studentList:Student[] = [];
  index:number = -1;

  constructor(private _studentService: StudentService) {

    }
  ngOnInit(): void {
    // this._studentService.getAllStudents().subscribe(data => {
    //   this._studentService.setData(data);
    //   this.studentList = this._studentService.studentList;
    // });
  }
  
  get service() {
    return this._studentService;
  }

  setIndex(index) {
    this.index = index;
  }

  setIndexFromForm(index) {
    this.index = index;
  }
}
