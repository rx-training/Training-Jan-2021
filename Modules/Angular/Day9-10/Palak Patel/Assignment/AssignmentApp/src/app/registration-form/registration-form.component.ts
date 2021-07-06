import { Component, OnInit } from '@angular/core';
import {FormControl, FormArray, FormGroup, FormBuilder, Validators} from  '@angular/forms';
import { IStudent } from 'src/Models/interfaces';

var Data: IStudent[] = [];

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  pincodePattern = '^[1-9][0-9]{5}$';
  phoneNoPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  namePattern = '[a-zA-Z][a-zA-Z ]+';
  isValidFormSubmitted = null;

  studentData:FormGroup;
  constructor(private fb: FormBuilder) {
    this.studentData=this.fb.group({
      personalData: this.fb.group({
        name:this.fb.group({
          FirstName: ['', [Validators.required,Validators.pattern(this.namePattern)]],
          MiddleName: ['', [Validators.required,Validators.pattern(this.namePattern)]],
          LastName: ['', [Validators.required,Validators.pattern(this.namePattern)]]
        }),
        DOB: ['', Validators.required],
        BirthPlace: [''],
        FirstLanguage: ['', [Validators.required,Validators.pattern(this.namePattern)]],
        Address: this.fb.group({
          City: ['', Validators.required],
          State : ['', Validators.required],
          Country: ['', Validators.required],
          PIN : ['', [Validators.required, Validators.pattern(this.pincodePattern)]],
        })
      }),
      parentsData: this.fb.group({
        FatherDetail: this.fb.group({
          FatherName:this.fb.group({
            FirstName: ['', [Validators.required,Validators.pattern(this.namePattern)]],
            MiddleName:[''],
            LastName: ['']
          }),
          Email : ['', [Validators.required, Validators.email]],
          EducationQualification: [''],
          Profession: [''],
          Designation : [''],
          Phone: ['', [Validators.required, Validators.pattern(this.phoneNoPattern)]]
        }),
        MotherDetail: this.fb.group({
          MotherName:this.fb.group({
            FirstName: ['', [Validators.required,Validators.pattern(this.namePattern)]],
            MiddleName: [''],
            LastName: ['']
          }),
          Email : ['', [Validators.required, Validators.email]],
          EducationQualification:[''],
          Profession: [''],
          Designation : [''],
          Phone:['', [Validators.required, Validators.pattern(this.phoneNoPattern)]]
        })
      }),
      EmergencyContact: this.fb.array([
        this.fb.group({
          Relation : this.fb.control(''),
          ContactNumber: this.fb.control('')
        })
      ]),
      ReferenceDetails: this.fb.array([
        this.fb.group({
          ReferenceThrough : this.fb.control(''),
          ReferenceAddress: this.fb.control('')
        })
      ])
    })
  }

  get getEmergencyContact(){
    return this.studentData.get("EmergencyContact") as FormArray;
  }

  addEmergencyContact(){
    this.getEmergencyContact.push(new FormGroup({
      Relation : new FormControl(''),
      ContactNumber: new FormControl('')
    }));
  }

  removeEmergencyContact(index:number){
    this.getEmergencyContact.removeAt(index);
  }

  get getReferences(){
    return this.studentData.get("ReferenceDetails") as FormArray;
  }

  addReference(){
    this.getReferences.push(new FormGroup({
      ReferenceThrough : new FormControl(''),
      ReferenceAddress: new FormControl('')
    }));
  }

  removeReference(index:number){
    this.getReferences.removeAt(index);
  }

  onFormSubmit(){
    this.isValidFormSubmitted = false;
     if (this.studentData.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     Data.push(this.studentData.value);
     this.studentData.reset();
     console.log(Data);
  }

  ngOnInit(): void {}
  
  get pincode(){
    return this.studentData.get('personalData.Address.PIN');
  }

  get fphoneNo(){
    return this.studentData.get('parentsData.FatherDetail.Phone');
  }

  get mphoneNo(){
    return this.studentData.get('parentsData.MotherDetail.Phone');
  }

  get femail(){
    return this.studentData.get('parentsData.FatherDetail.Email');
  }

  get memail(){
    return this.studentData.get('parentsData.MotherDetail.Email');
  }

  get firstname(){
    return this.studentData.get('personalData.name.FirstName')
  }

  get middlename(){
    return this.studentData.get('personalData.name.MiddleName')
  }

  get lastname(){
    return this.studentData.get('personalData.name.LastName')
  }

  get language(){
    return this.studentData.get('personalData.FirstLanguage')
  }

  get fatherFirstName(){
    return this.studentData.get('parentsData.FatherDetail.FatherName.FirstName')
  }

  get motherFirstName(){
    return this.studentData.get('parentsData.MotherDetail.MotherName.FirstName')
  }
}  