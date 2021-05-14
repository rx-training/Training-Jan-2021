import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { IStudent } from '../models/IStudent';
import { ageValidator} from '../Validators/dobValidator';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentList: Array<IStudent>=[];

  studentForm;

  StudFName: AbstractControl;
  StudMName: AbstractControl;
  StudLName: AbstractControl;
  AddressCity: AbstractControl;
  AddressState: AbstractControl;
  AddressCountry: AbstractControl;
  AddressPin: AbstractControl;
  FatherFName: AbstractControl;
  FatherMName: AbstractControl;
  FatherLName: AbstractControl;
  FatherEmail: AbstractControl;
  FatherQualification: AbstractControl;
  FatherProfession: AbstractControl;
  FatherPhone: AbstractControl;
  MotherFName: AbstractControl;
  MotherMName: AbstractControl;
  MotherLName: AbstractControl;
  MotherEmail: AbstractControl;
  MotherQualification: AbstractControl;
  MotherPhone: AbstractControl;

  emergencyIndex : number=0;

  get getEmergencyContacts(){
    return this.studentForm.get('emergencyContacts') as FormArray;
  }

  addEmergencyContacts(){
    this.getEmergencyContacts.push(this.fb.group({
      relation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      contact: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])]
    }));
  }
    
  get getReferenceDetails(){
    return this.studentForm.get('referenceDetails') as FormArray;
  }

  addReferenceDetails(){
    this.getReferenceDetails.push(this.fb.group({
      referenceThrough: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z. ]*')])],
      address: ['', Validators.required],
      contact:['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])]
    }));

  }

  get getStudentName(){
    return this.studentForm.get('name') as FormGroup;
  }

  get getStudentAddress(){
    return this.studentForm.get('address') as FormGroup;
  }

  get getFatherInfo(){
    return this.studentForm.get('father') as FormGroup;
  }

  get getFatherName(){
    return this.getFatherInfo.controls['fullName'] as FormGroup;
  }

  get getMotherInfo(){
    return this.studentForm.get('mother') as FormGroup;
  }

  get getMotherName(){
    return this.getMotherInfo.controls['fullName'] as FormGroup;
  }

  getEmergencyContactsGroup(i: number){
    return <FormGroup>(<FormArray>this.studentForm.get('emergencyContacts')).get(i.toString());
  }

  getReferenceDetailsGroup(i: number){
    return <FormGroup>(<FormArray>this.studentForm.get('referenceDetails')).get(i.toString());
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

    console.log(this.getFatherInfo);
    console.log(this.FatherEmail);
    console.log(this.getEmergencyContacts);
    console.log(this.getEmergencyContacts.controls);
    console.log(this.getEmergencyContacts.value);
    console.log(this.getEmergencyContacts.value.relation);
    console.log(newStudent.emergencyContact);

    for(var obj of this.getEmergencyContacts.value){
      console.log(obj.relation + " " + obj.contact);
    }
  }

  constructor(private fb: FormBuilder) { 
    this.studentForm = this.fb.group({
      name: this.fb.group({
        first: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        middle: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        last: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]
      }),
      dob: ['', Validators.compose([Validators.required, ageValidator(5, 20)])],
      birthPlace: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      language: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      address: this.fb.group({
        city: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        state: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        country: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        pin: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])]
      }),
      father: this.fb.group({
        fullName: this.fb.group({
          first: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          middle: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          last: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]
        }),
        email: ['example@gmail.com', Validators.compose([Validators.required, Validators.email])],
        qualification:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z. ]*')])],
        profession: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        designation: ['', Validators.pattern('[a-zA-Z ]*')],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])]
      }),
      mother: this.fb.group({
        fullName: this.fb.group({
          first: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          middle:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          last: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]
        }),
        email: ['example@gmail.com', Validators.compose([Validators.required, Validators.email])],
        qualification: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        profession: ['', Validators.pattern('[a-zA-Z ]*')],
        designation: ['', Validators.pattern('[a-zA-Z ]*')],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])]
      }),
      emergencyContacts: this.fb.array([
        this.fb.group({
          relation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          contact: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])]
        })
      ]),
      referenceDetails: this.fb.array([
        this.fb.group({
          referenceThrough: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z. ]*')])],
          address: ['', Validators.required],
          contact: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])]
        })
      ])
    });

    this.StudFName = this.getStudentName.controls['first'];
    this.StudMName = this.getStudentName.controls['middle'];
    this.StudLName = this.getStudentName.controls['last'];
    this.AddressCity = this.getStudentAddress.controls['city'];
    this.AddressState = this.getStudentAddress.controls['state'];
    this.AddressCountry = this.getStudentAddress.controls['country'];
    this.AddressPin = this.getStudentAddress.controls['pin'];
    this.FatherFName = this.getFatherName.controls['first'];
    this.FatherMName = this.getFatherName.controls['middle'];
    this.FatherLName = this.getFatherName.controls['last'];
    this.FatherEmail = this.getFatherInfo.controls['email'];
    this.FatherQualification = this.getFatherInfo.controls['qualification'];
    this.FatherProfession = this.getFatherInfo.controls['profession'];
    this.FatherPhone = this.getFatherInfo.controls['phone'];
    this.MotherFName = this.getMotherName.controls['first'];
    this.MotherMName = this.getMotherName.controls['middle'];
    this.MotherLName = this.getMotherName.controls['last'];
    this.MotherEmail = this.getMotherInfo.controls['email'];
    this.MotherQualification = this.getMotherInfo.controls['qualification'];
    this.MotherPhone = this.getMotherInfo.controls['phone'];
  }

  ngOnInit(): void {
  }

}
