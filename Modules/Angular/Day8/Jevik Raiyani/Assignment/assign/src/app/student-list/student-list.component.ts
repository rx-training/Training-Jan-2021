import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student : Array<Student> = [];


  constructor() { 
    this.student = 
    [{Id:1,Name:"jevik",Age:21,Average:82.5,Grade:"A",Active:true},
    {Id:2,Name:"Pratik",Age:21,Average:82.5,Grade:"B",Active:true},
    {Id:2,Name:"Pratik",Age:21,Average:82.5,Grade:"C",Active:true},
    {Id:2,Name:"Pratik",Age:21,Average:82.5,Grade:"D",Active:true},
    {Id:2,Name:"Tirath",Age:21,Average:82.5,Grade:"F",Active:true},
    {Id:2,Name:"Raj",Age:21,Average:82.5,Grade:"D",Active:false},
    {Id:2,Name:"Pratik",Age:21,Average:82.5,Grade:"F",Active:false}]
  }

  ngOnInit(): void {
  }

}
