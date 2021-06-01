import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { IStudent } from '../IStudent';
import { dateValidation } from '../shared/DateValidation';
import { emailValidation } from '../shared/EmailValidation';
import { phoneValidation } from '../shared/PhoneValidation';
import { pinValidation } from '../shared/PinValidation';
import { stringValidation } from '../shared/StringValidation';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})

export class AdmissionFormComponent implements OnInit{

  AdmissionForm : FormGroup;
  isActiveInList : boolean = false;
  StudentList : IStudent[] = [];
  @Input() isEditing : boolean;
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() isEdited = new EventEmitter<any>();
  
  constructor(private fb : FormBuilder, public service : StudentService) {
  }

  ngOnInit() : void{

    this.AdmissionForm = this.fb.group({
      studentFirstName : ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
      studentMiddleName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
      studentLastName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
      dob: ['', Validators.compose([Validators.required, dateValidation()])],
      birthPlace: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
      languagePreferred: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
      addresses: this.fb.array([
        this.fb.group({ 
        city: ['', Validators.compose([Validators.required])], 
        state: ['', Validators.compose([Validators.required])], 
        country: ['', Validators.compose([Validators.required])], 
        pinCode : ['', Validators.compose([Validators.required, pinValidation(/^[0-9]{6}$/)])]
        })
      ]),
      fatherDetails: this.fb.array([ 
        this.fb.group({ 
          fatherFirstName : ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
          fatherMiddleName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          fatherLastName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
          fatherEmail: ['', Validators.compose([Validators.required, emailValidation(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)])], 
          fatherEducationQualification: ['', Validators.required], 
          fatherProfession: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          fatherDesignation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          fatherPhoneNumber: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])]
        })
      ]),
      motherDetails: this.fb.array([
        this.fb.group({ 
          motherFirstName : ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
          motherMiddleName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          motherLastName: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])],
          motherEmail: ['', Validators.compose([Validators.required, emailValidation(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)])], 
          motherEducationQualification: ['', Validators.required], 
          motherProfession: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          motherDesignation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          motherPhoneNumber: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])]
        })
      ]),
      emergencyContacts: this.fb.array([
        this.fb.group({ 
          relation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          phoneNumber: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])] , 
        }),
        this.fb.group({ 
          relation: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          phoneNumber: ['', Validators.compose([Validators.required,phoneValidation(/^[0-9]{10}$/)])] , 
        })
      ]),
      referenceDetails: this.fb.array([
        this.fb.group({ 
          referenceThrough: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          referenceAddress: ['', Validators.required], 
          referencePhone: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])] 
        }),
        this.fb.group({ 
          referenceThrough: ['', Validators.compose([Validators.required, stringValidation(/^[a-zA-Z]+$/)])], 
          referenceAddress: ['', Validators.required], 
          referencePhone: ['', Validators.compose([Validators.required, phoneValidation(/^[0-9]{10}$/)])]  
        })
      ])
    });

  }

  ngOnChanges(){
    if(this.isEditing){
      this.AdmissionForm.patchValue(this.service.getselectedStudent);
    }
  }

  get EmergencyContact(){
    return this.AdmissionForm.get("emergencyContacts") as FormArray;
  }

  get Address(){
    return this.AdmissionForm.get("addresses") as FormArray;
  }
  
  get FatherDetails(){
    return this.AdmissionForm.get("fatherDetails") as FormArray;
  }

  get MotherDetails(){
    return this.AdmissionForm.get("motherDetails") as FormArray;
  }

  get ReferenceDetail(){
    return this.AdmissionForm.get("referenceDetails") as FormArray;
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

  submit(addNewStudent : any){
   
    if(this.isEditing){
      console.log(addNewStudent);
      this.service.updateStudent(this.service.getselectedStudentId, addNewStudent).subscribe()
      this.service.clearSelectedStudentId();
      this.service.clearSelectedStudent();
      this.isEdited.emit(false);
      window.location.reload();
    }else {
      this.service.addStudent(addNewStudent).subscribe(data => {this.StudentList.push(data)});
    }
    this.AdmissionForm.reset(); 
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
