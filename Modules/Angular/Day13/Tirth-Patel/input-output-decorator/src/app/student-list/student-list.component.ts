import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { student } from '../Models/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
@Input() stdData:any;
  constructor() { }
studentList :any[]=[];
  ngOnInit(): void {

  }
Display(){
  console.log('child to app');
  console.log(this.stdData);
  this.studentList.push(this.stdData);
  console.log(this.studentList);
}


}
