import { Component } from '@angular/core';
import { IStudent } from './IStudent';
import { StudentService } from './lib/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentDay14';

  // StudentList : Array<IStudent> = [];
  isUpdating : boolean = false;

  constructor(private students : StudentService){
      this.students.addStudent(
      {
        Name : 
        {
          FirstName : "Fiyona", 
          MiddleName : "B", 
          LastName : "Mistry"
        }, 
        DOB : new Date("1998/11/22"), 
        BirthPlace : "Navsari",
        LanguagePreference : "Gujarati, English, Hindi",
        Address : 
        {
          City : "Ahmedabad",
          State : "Gujarat",
          Country : "India",
          Pin : 382421
        },
        Father :
        {
          Name : 
          {
            FirstName : "Bharat",
            MiddleName : "D",
            LastName : "Mistry"
          },
          Email : "bharatmistry@gmail.com",
          EducationQualification : "Lab Chemist",
          Profession : "Manager in Laboratry",
          Designation : "Manager",
          Phone : 7359505075
        },
        Mother :
        {
          Name : 
          {
            FirstName : "Nita",
            MiddleName : "B",
            LastName : "Mistry"
          },
          Email : "nitamistry@gmail.com",
          EducationQualification : "Arts in Psychology",
          Profession : "House wife",
          Designation : "None",
          Phone : 9924721276
        },
        EmergencyContact : [
          {
            Relation : "XYZ",
            Contact : 8798548798
          }
        ],
        ReferenceDetail : [
          {
            RefThrough : "XYZ",
            RefAddress : "Anything",
            RefPhone : 9887546589
          }
        ]
      });
      // this.StudentList = this.students.getStudentList;
  }

  submit(newStudent : IStudent){
    this.students.addStudent(newStudent);
    // this.StudentList = this.students.getStudentList;
  }

  isUpdatingStudent(event){
    this.isUpdating = event;
  }

  isUpdatingCompleted(event){
    this.isUpdating = event;
  }
}
