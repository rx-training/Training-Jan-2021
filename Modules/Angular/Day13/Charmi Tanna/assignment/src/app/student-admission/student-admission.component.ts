import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.css']
})


export class StudentAdmissionComponent implements OnInit {
  studentAdmission:FormGroup;

  constructor() { 
    this.studentAdmission = new FormGroup({
      Name : new FormGroup(
      {
        FirstName : new FormControl(),
        MiddleName : new FormControl(),
        LastName : new FormControl()
      }),
      DOB : new FormControl(),
      PlaceOfBirth : new FormControl(),
      FirstLanguage : new FormControl(),
      Address : new FormGroup(
        {
          City : new FormControl(),
          State : new FormControl(),
          Country : new FormControl(),
          Pin : new FormControl()
        }
      ),
      Father : new FormGroup({
        FullName : new FormGroup({
          FirstName : new FormControl(),
          MiddleName : new FormControl(),
          LastName : new FormControl()
        }),
        Email : new FormControl(),
        EducationQualification : new FormControl(),
        Profession : new FormControl(),
        Designation : new FormControl(),
        Phone : new FormControl()
      }),
      Mother : new FormGroup({
        Name : new FormGroup({
          FirstName : new FormControl(),
          MiddleName : new FormControl(),
          LastName : new FormControl() 
        }),
        Email : new FormControl(),
        EducationQualification : new FormControl(),
        Profession : new FormControl(),
        Designation : new FormControl(),
        Phone : new FormControl() 
      }),
      EmergencyContactList : new FormArray([
        new FormGroup({
          Relation : new FormControl(),
          Number : new FormControl()
        }),
        new FormGroup({
          Relation : new FormControl(),
          Number : new FormControl()
        })   
      ]
      ),
      ReferenceDetails1 : new FormArray([
        new FormGroup({
        ReferenceDetails : new FormControl()
        })
      ])
    }
    );
  }

  AddContactList()
  {
    this.getEmergencyContactLists.push(
      new FormGroup({
        Relation : new FormControl(),
        Number : new FormControl()
      })
    );
  }

  ReferenceDetails()
  {
    this.getReferenceDetails.push(
      new FormGroup({
      ReferenceDetails : new FormControl()
      })
    );
    }

  Submit()
  {
    alert("hello");
    console.log(this.studentAdmission.value);
  }

  get getEmergencyContactLists()
  {
    return this.studentAdmission.get("EmergencyContactList") as FormArray;
  }
  get getReferenceDetails()
  {
    return this.studentAdmission.get("ReferenceDetails1") as FormArray;
  }
  ngOnInit(): void {
  }

}
