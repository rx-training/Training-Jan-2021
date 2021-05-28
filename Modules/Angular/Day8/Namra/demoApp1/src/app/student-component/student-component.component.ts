import { Component, OnInit } from '@angular/core';
import { student } from '../student';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {

  constructor() {
    this.setId();
  }

  ngOnInit(): void {
  }

  GradeFlag = '';
  Marks = 0;
  setId() {
    this.studentList.forEach(element => {
      if (element.Id > this.Id) {
        this.Id = element.Id;
      }
    });
    this.Id++;
  }
  flag = false;
  Id: number = 0;
  Name = '';
  Age = 0;
  Avarage = 0;
  Grade = '';
  Active = false;
  studentList: Array<student> =
    [
      { Id: 1, Name: "Namra", Age: 22, Average: 86.33, Grade: "A", Active: true },
      { Id: 2, Name: "Charmi", Age: 21, Average: 78.33, Grade: "B", Active: true },
      { Id: 3, Name: "Suchi", Age: 21, Average: 64, Grade: "C", Active: true },
      { Id: 4, Name: "Om", Age: 21, Average: 48, Grade: "D", Active:false },
      { Id: 5, Name: "Aksh", Age: 21, Average: 88.33, Grade: "A", Active: true }
    ];

  setGradeActive(marks) {
    if (marks > 80) {
      this.Grade = "A";
      this.Active = true;
    }
    else if (marks > 65) {
      this.Grade = "B";
      this.Active = true;
    }
    else if (marks > 50) {
      this.Grade = "C";
      this.Active = true;
    }
    else {
      this.Grade = "D";
      this.Active = false;
    }
  }
  backgroundClass(grade) {
    switch (grade) {
      case "A":
        return 'green';
      case "B":
        return 'blue';
      case "C":
        return 'yellow';
      case "D":
        return 'red'
      default:
        break;
    }
  }
  MarksCheck() {
    if (this.Marks < 0) {
      return false;
    }
    if (this.Marks > 100) {
      return false;
    }
  }
  create() {

    this.setGradeActive(this.Avarage);
    this.studentList.push({ Id: this.Id, Name: this.Name, Age: this.Age, Average: this.Avarage, Grade: this.Grade, Active: this.Active });
    this.Name = '';
    this.Age = 0;
    this.Avarage = 0;
    this.setId();
  }
  delete(index) {
    this.studentList.splice(index, 1);
    this.Id = 0;
    this.setId();
  }
  reset() {
    this.setId();
    this.Name = '';
    this.Age = 0;
    this.Avarage = 0;
  }
  edit(index) {
    var studentData = this.studentList.find(s => s.Id == index);
    this.Id = studentData.Id;
    this.Name = studentData.Name;
    this.Age = studentData.Age;
    this.Avarage = studentData.Average;
  }
  Update() {
    var studentData = this.studentList.find(s => s.Id == this.Id);
    studentData.Name = this.Name;
    studentData.Age = this.Age;
    studentData.Average = this.Avarage;
    this.setGradeActive(studentData.Average);
    studentData.Grade = this.Grade;
    studentData.Active = this.Active;
    this.reset();
  }
}
