import { Component, OnInit } from '@angular/core';
import { IStudent } from '../models/IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  //providers: [StudentService],
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: IStudent = {id: 0, name: '', address: ''};

  list: Array<IStudent> = []

  constructor(private studentService: StudentService) { 
  }

  submit(){
    this.studentService.addData(this.student);
    console.log("data added successfully!");
    this.list= this.studentService.getList();
    this.student = {id: 0, name: '', address: ''};
  }

  ngOnInit(): void {
    const observableList = this.studentService.getObservableList();
    observableList.subscribe((list) => {
        this.list = list;
    });

    console.log("Observable List:");
    console.log(observableList);
  }

}
