import { Component, OnInit } from '@angular/core';
import { IStudent } from '../models/IStudent';
import {FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentList: Array<IStudent>=[];

  studentForm = new FormGroup({
    name: new FormGroup({
      first: new FormControl(''),
      middle: new FormControl(''),
      last: new FormControl('')
    }),
    dob: new FormControl(''),
    birthPlace: new FormControl(''),
    language: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      pin: new FormControl('')
    }),
    father: new FormGroup({
      fullName: new FormGroup({
        first: new FormControl(''),
        middle: new FormControl(''),
        last: new FormControl('')
      }),
      email: new FormControl(''),
      qualification: new FormControl(''),
      profession: new FormControl(''),
      designation: new FormControl(''),
      phone: new FormControl('')
    }),
    mother: new FormGroup({
      fullName: new FormGroup({
        first: new FormControl(''),
        middle: new FormControl(''),
        last: new FormControl('')
      }),
      email: new FormControl(''),
      qualification: new FormControl(''),
      profession: new FormControl(''),
      designation: new FormControl(''),
      phone: new FormControl('')
    }),
    emergencyContacts: new FormArray([
      new FormGroup({
        relation: new FormControl(''),
        contact: new FormControl('')
      })
    ]),
    referenceDetails: new FormArray([
      new FormGroup({
        referenceThrough: new FormControl(''),
        address: new FormControl(''),
        contact: new FormControl('')
      })
    ])
  });
  
  get getEmergencyContacts(){
    return this.studentForm.get('emergencyContacts') as FormArray;
  }

  addEmergencyContacts(){
    this.getEmergencyContacts.push(new FormGroup({
      relation: new FormControl(''),
      contact: new FormControl('')
    }));
  }
    
  get getReferenceDetails(){
    return this.studentForm.get('referenceDetails') as FormArray;
  }

  addReferenceDetails(){
    this.getReferenceDetails.push(new FormGroup({
      referenceThrough: new FormControl(''),
      address: new FormControl(''),
      contact: new FormControl('')
    }));

  }

  profileSubmit(){
    console.log(this.studentForm.value.emergencyContacts);
    console.log(this.studentForm.value.emergencyContacts[0].relation);
    var newStudent: IStudent = {
      name: this.studentForm.value.name.first.concat(' ', this.studentForm.value.name.middle, ' ', this.studentForm.value.name.last),
      dob: this.studentForm.value.dob,
      placeOfBirth: this.studentForm.value.birthPlace,
      language: this.studentForm.value.language,
      address: this.studentForm.value.address.city.concat(', ', this.studentForm.value.address.state, ', ', this.studentForm.value.address.country, ' - ', this.studentForm.value.address.pin),
      fatherName: this.studentForm.value.father.fullName.first.concat(' ', this.studentForm.value.father.fullName.middle, ' ', this.studentForm.value.father.fullName.last),
      fatherEmail: this.studentForm.value.father.email,
      fatherQualification: this.studentForm.value.father.qualification,
      fatherProfession: this.studentForm.value.father.profession,
      fatherDesignation: this.studentForm.value.father.designation,
      fatherPhone: this.studentForm.value.father.phone,
      motherName: this.studentForm.value.mother.fullName.first.concat(' ', this.studentForm.value.mother.fullName.middle, ' ', this.studentForm.value.mother.fullName.last),
      motherEmail: this.studentForm.value.mother.email,
      motherQualification: this.studentForm.value.mother.qualification,
      motherProfession: this.studentForm.value.mother.profession,
      motherDesignation: this.studentForm.value.mother.designation,
      motherPhone: this.studentForm.value.mother.phone,
      emergencyContact: this.studentForm.value.emergencyContacts,
      referenceDetails: this.studentForm.value.referenceDetails
    }
    this.studentList.push(newStudent);
    console.log(this.studentList);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
