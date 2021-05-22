import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { IStudent } from '../IStudent';
import { StudentService } from '../lib/student.service';
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
  StudentList : IStudent;

  @Input() isEditing : boolean;
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() isEdited = new EventEmitter<any>();
  

  constructor(private fb : FormBuilder, private students : StudentService) {
    // this.StudentList = [];
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

  ngOnChanges(){
    if(this.isEditing){
      this.AdmissionForm.patchValue(this.students.getselectedStudent);
    }
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
    this.StudentList = this.AdmissionForm.getRawValue();
   
    if(this.isEditing){
      this.students.updateStudent(this.StudentList, this.students.getselectedStudentId)
      this.students.clearSelectedStudentId();
      this.students.clearSelectedStudent();
      this.isEdited.emit(false);
    }else {
      this.newItemEvent.emit(this.StudentList);
    }
    this.AdmissionForm.reset()    
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

}
