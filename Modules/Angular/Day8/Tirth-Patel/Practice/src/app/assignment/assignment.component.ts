import { Component, OnInit } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { 
    
  }
   students :Array<Student> =[];
  gr:string ="";

  ngOnInit(): void {
    this.students.push({Id:1,Name:"Tirth",Age:21,Average:70,Grade:"B",Active:true},)
    this.students.push({Id:2,Name:"Jimmy",Age:21,Average:80,Grade:"A",Active:true},)
    this.students.push({Id:3,Name:"Akshar",Age:21,Average:85,Grade:"A",Active:false},)
    this.students.push({Id:4,Name:"Milan",Age:21,Average:65,Grade:"B",Active:true},)
    this.students.push({Id:5,Name:"Parth",Age:21,Average:55,Grade:"C",Active:false},)
    this.students.push({Id:6,Name:"Khelan",Age:21,Average:75,Grade:"B",Active:false},)
    this.students.push({Id:7,Name:"Dhruvin",Age:21,Average:86,Grade:"A",Active:false},)
    this.students.push({Id:8,Name:"raj",Age:21,Average:75,Grade:"B",Active:true},)
    this.students.push({Id:9,Name:"Priyam",Age:21,Average:80,Grade:"A",Active:true},)
    this.students.push({Id:10,Name:"Ravi",Age:21,Average:60,Grade:"C",Active:true},)
  }
  getColor(student){
    console.log("called")
    this.gr = student.Grade;
    if(this.gr=="A"){
      return "green";
    }
    else if(this.gr=="B"){
      return "orange";
      
    }
    else{
      return "red";
    }
  }
  isActive(student){
    console.log("called active")
    return student.Active ==true ?true:false;
  }
}

