import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { IStudent } from '../IStudent';
import { dateValidation } from '../shared/DateValidation';
import { emailValidation } from '../shared/EmailValidation';
import { phoneValidation } from '../shared/PhoneValidation';
import { pinValidation } from '../shared/PinValidation';
import { stringValidation } from '../shared/StringValidation';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})

export class AdmissionFormComponent implements OnInit{

  AdmissionForm : FormGroup;
  isActiveInList : boolean = false;
  StudentList : Array<IStudent>;
  
  constructor(private fb : FormBuilder) {
    this.StudentList = [];
  }

  ngOnInit() : void{

    this.AdmissionForm = this.fb.group({
      Name: this.fb.group({ 
        FirstName : ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
        MiddleName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
        LastName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])]
      }),
      DOB: ['', Validators.compose([Validators.required, dateValidation()])],
      BirthPlace: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
      LanguagePreference: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
      Address: this.fb.group({ 
        City: ['', Validators.compose([Validators.required])], 
        State: ['', Validators.compose([Validators.required])], 
        Country: ['', Validators.compose([Validators.required])], 
        Pin : ['', Validators.compose([Validators.required, pinValidation(/^[0-9]{6}$/)])]
      }),
      Father: this.fb.group({ 
        Name: this.fb.group({ 
          FirstName : ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
          MiddleName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          LastName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])]
        }),
        Email: ['', Validators.compose([Validators.required, emailValidation(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)])], 
        EducationQualification: ['', Validators.required], 
        Profession: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
        Designation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
        Phone: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])]
      }),
      Mother: this.fb.group({ 
        Name: this.fb.group({ 
          FirstName : ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
          MiddleName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          LastName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])]
        }),
        Email: ['', Validators.compose([Validators.required, emailValidation(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)])], 
        EducationQualification: ['', Validators.required], 
        Profession: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
        Designation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
        Phone: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])]
      }),
      EmergencyContact: this.fb.array([
        this.fb.group({ 
          Relation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          Contact: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])] , 
        }),
        this.fb.group({ 
          Relation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          Contact: ['', Validators.compose([Validators.required,phoneValidation(/^[0-9]{10}$/)])] , 
        })
      ]),
      ReferenceDetail: this.fb.array([
        this.fb.group({ 
          RefThrough: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          RefAddress: ['', Validators.required], 
          RefPhone: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])] 
        }),
        this.fb.group({ 
          RefThrough: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          RefAddress: ['', Validators.required], 
          RefPhone: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])]  
        })
      ])
    });

  }

  get EmergencyContact(){
    return this.AdmissionForm.get("EmergencyContact") as FormArray;
  }

  get ReferenceDetail(){
    return this.AdmissionForm.get("ReferenceDetail") as FormArray;
  }

  addEmergency(){
    this.EmergencyContact.push(this.fb.group({ 
      Relation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
      Contact: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])], 
    }),)
  }

  removeEmergency(i){
    this.EmergencyContact.removeAt(i);
  }

  addReference(){
    this.ReferenceDetail.push(this.fb.group({ 
      RefThrough: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
      RefAddress: ['', Validators.required], 
      RefPhone: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])] 
    }),)
  }

  removeReference(i){
    this.ReferenceDetail.removeAt(i);
  }

  submit(){
    console.log(this.AdmissionForm);
    this.StudentList.push(
      {
        Name : 
        {
          FirstName : this.AdmissionForm.get("Name.FirstName").value, 
          MiddleName : this.AdmissionForm.get("Name.MiddleName").value, 
          LastName : this.AdmissionForm.get("Name.LastName").value
        }, 
        DOB : this.AdmissionForm.get("DOB").value, 
        BirthPlace : this.AdmissionForm.get("BirthPlace").value,
        LanguagePreference : this.AdmissionForm.get("LanguagePreference").value,
        Address : 
        {
          City : this.AdmissionForm.get("Address.City").value,
          State : this.AdmissionForm.get("Address.State").value,
          Country :this.AdmissionForm.get("Address.Country").value,
          Pin : this.AdmissionForm.get("Address.Pin").value
        },
        Father :
        {
          Name : 
          {
            FirstName : this.AdmissionForm.get("Father.Name.FirstName").value,
            MiddleName : this.AdmissionForm.get("Father.Name.FirstName").value,
            LastName : this.AdmissionForm.get("Father.Name.FirstName").value
          },
          Email : this.AdmissionForm.get("Father.Email").value,
          EducationQualification : this.AdmissionForm.get("Father.EducationQualification").value,
          Profession : this.AdmissionForm.get("Father.Profession").value,
          Designation : this.AdmissionForm.get("Father.Designation").value,
          Phone : this.AdmissionForm.get("Father.Phone").value
        },
        Mother :
        {
          Name : 
          {
            FirstName : this.AdmissionForm.get("Mother.Name.FirstName").value,
            MiddleName : this.AdmissionForm.get("Mother.Name.FirstName").value,
            LastName : this.AdmissionForm.get("Mother.Name.FirstName").value
          },
          Email : this.AdmissionForm.get("Mother.Email").value,
          EducationQualification : this.AdmissionForm.get("Mother.EducationQualification").value,
          Profession : this.AdmissionForm.get("Mother.Profession").value,
          Designation : this.AdmissionForm.get("Mother.Designation").value,
          Phone : this.AdmissionForm.get("Mother.Phone").value
        },
        EmergencyContact : this.getEmergencyContact(),
        ReferenceDetail : this.getReferenceDetail()
      });
    console.log(this.StudentList);
    
  }

  getEmergencyContact(){
    var arr : {Relation : string,
      Contact : number}[] = [];
    this.EmergencyContact.value.forEach(i => {
            arr.push(i);
          })
    return arr;
  }

  getReferenceDetail(){
    var arr : {RefThrough : string,
      RefAddress : string,
      RefPhone : number}[] = [];
    this.ReferenceDetail.value.forEach(i => {
            arr.push(i);
          })
    return arr;
  }

  isActiveFunc(){
    this.isActiveInList = !this.isActiveInList;
  }
}
