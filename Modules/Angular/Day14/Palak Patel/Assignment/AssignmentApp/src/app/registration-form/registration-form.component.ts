import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormArray, FormGroup, FormBuilder, Validators} from  '@angular/forms';
import { IStudent } from 'src/Models/interfaces';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  @Output() submitDataEvent: EventEmitter<any> = new EventEmitter<any>();

  pincodePattern = '^[1-9][0-9]{5}$';
  phoneNoPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  namePattern = '[a-zA-Z][a-zA-Z ]+';

  studentData:FormGroup;
  Data: Array<IStudent>;

  constructor(private fb: FormBuilder) {
    this.Data = []
    
  }

  ngOnInit(): void {
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

  get getReferences(){
    return this.studentData.get("ReferenceDetails") as FormArray;
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
    this.Data= [
      {
        Name : {
          FirstName : this.studentData.get("personalData.name.FirstName").value,
          MiddleName : this.studentData.get("personalData.name.MiddleName").value,
          LastName : this.studentData.get("personalData.name.LastName").value
        },
        DOB : this.studentData.get("personalData.DOB").value,
        BirthPlace : this.studentData.get("personalData.BirthPlace").value,
        FirstLanguage : this.studentData.get("personalData.FirstLanguage").value,
        Address : {
          City : this.studentData.get("personalData.Address.City").value,
          State : this.studentData.get("personalData.Address.State").value,
          Country : this.studentData.get("personalData.Address.Country").value,
          Pin : this.studentData.get("personalData.Address.PIN").value
        },
        Father : {
          Name : {
            FirstName : this.studentData.get("parentsData.FatherDetail.FatherName.FirstName").value,
            MiddleName : this.studentData.get("parentsData.FatherDetail.FatherName.MiddleName").value,
            LastName : this.studentData.get("parentsData.FatherDetail.FatherName.LastName").value
          },
          Email : this.studentData.get("parentsData.FatherDetail.Email").value,
          EducationQualification : this.studentData.get("parentsData.FatherDetail.EducationQualification").value,
          Profession : this.studentData.get("parentsData.FatherDetail.Profession").value,
          Designation : this.studentData.get("parentsData.FatherDetail.Designation").value,
          Phone : this.studentData.get("parentsData.FatherDetail.Phone").value
        },
        Mother : {
          Name : {
            FirstName : this.studentData.get("parentsData.MotherDetail.MotherName.FirstName").value,
            MiddleName : this.studentData.get("parentsData.MotherDetail.MotherName.MiddleName").value,
            LastName : this.studentData.get("parentsData.MotherDetail.MotherName.LastName").value,
          },
          Email : this.studentData.get("parentsData.MotherDetail.Email").value,
          EducationQualification : this.studentData.get("parentsData.MotherDetail.EducationQualification").value,
          Profession : this.studentData.get("parentsData.MotherDetail.Profession").value,
          Designation : this.studentData.get("parentsData.MotherDetail.Designation").value,
          Phone : this.studentData.get("parentsData.MotherDetail.Phone").value
        },
        EmergencyContact : this.getEmergencyContactDetails(),
        ReferenceDetail : this.getReferenceDetail()
      }];

  //this.Data.push(data);
  //console.log(this.Data);
  this.submitDataEvent.emit(this.Data);
  }

  getEmergencyContactDetails(){
    var arr : {Relation : string,
      Contact : number}[] = [];
    this.getEmergencyContact.value.forEach(i => {
            arr.push(i);
          })
    return arr;
  }

  getReferenceDetail(){
    var arr : {RefThrough : string,
      RefAddress : string}[] = [];
    this.getReferences.value.forEach(i => {
            arr.push(i);
          })
    return arr;
  }
  
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