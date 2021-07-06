import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../models/interfaces';

var studentData:IStudent[]=[
  {
    ID:1,
    Name:"John",
    Age:12,
    Average:45,
    Grade:"A",
    Active:false
  },
  {
    ID:2,
    Name:"Mike",
    Age:12,
    Average:50,
    Grade:"B",
    Active:true
  }
]

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})


export class StudentsComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
