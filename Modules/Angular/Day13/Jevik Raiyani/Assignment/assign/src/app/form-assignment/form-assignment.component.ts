import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormArray,FormGroup,FormBuilder, Validators, ValidatorFn, AbstractControl, FormControl, ControlContainer} from '@angular/forms';
import { IStudent } from './IStudent';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

   IStudent : FormGroup;

   formdata  =[];

  @Output() addStudent =new EventEmitter();

  constructor(private fb : FormBuilder) {

    this.IStudent = this.fb.group({
      Name: this.fb.group({
        FName: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
        MName: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
        LName : ['',[ Validators.required,Validators.minLength(3),this.patternValidator]]
      }),
      DOB : ['', Validators.required ],
      PlaceOfBirth :  ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
      FirstLanguage : ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
      Address: this.fb.group({
        City:   ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
        State: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
        Country: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
        Pin:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),this.numberValidation ]]
      }),
      Father: this.fb.group({
        Name: this.fb.group({
          FName: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
          MName: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
          LName : ['',[ Validators.required,Validators.minLength(3),this.patternValidator]]
         }),
        Email: ['',[ Validators.required,Validators.minLength(8),Validators.email]],
        EducationQualification:['',Validators.required],
        Profession:['',Validators.required],
        Designation:[''],
        Phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]]
      }),
      Mother: this.fb.group({
        Name:this.fb.group({
          FName: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
          MName: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
          LName : ['',[ Validators.required,Validators.minLength(3),this.patternValidator]]
        }),
        Email: ['',[ Validators.required,Validators.minLength(8),Validators.email]],
        EducationQualification:['',Validators.required],
        Profession:['',Validators.required],
        Designation:[''],
        Phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]]
      }),
      EmergencyContactList : this.fb.array([
        this.fb.group({
        Relation:['',Validators.required],
        Phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]]
      })
      ]),
      ReferenceDetail: ['',Validators.required],
      ReferenceThrough: ['',Validators.required],
      ReferenceAddress: this.fb.group({
        City:   ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
        State: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
        Country: ['',[ Validators.required,Validators.minLength(3),this.patternValidator]],
        Pin:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),this.numberValidation ]],
        TelNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]]
     })

    });

   }

  ngOnInit(): void {
  }

  SubmitData(){
    console.log(this.IStudent);
    this.formdata.push(this.IStudent.value);
    this.addStudent.emit(this.formdata);
  }
  get EmergencyContactList(){
    return this.IStudent.get('EmergencyContactList') as FormArray;
  }
  addEmergencyContactList(){
    this.EmergencyContactList.push(   
      this.fb.group({
        Relation:['',Validators.required],
        Phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]]
    })
    );
  }
  get Fname(){return this.IStudent.controls.Name.get('FName');}
  get Mname(){return this.IStudent.controls.Name.get('MName');}
  get Lname(){return this.IStudent.controls.Name.get('LName');}
  get PlaceOfBirth(){return this.IStudent.get('PlaceOfBirth')}
  get FirstLanguage(){return this.IStudent.get('FirstLanguage')}
  get Date(){return this.IStudent.get('DOB')}
  get City(){return this.IStudent.get('Address.City')}
  get State(){return this.IStudent.get('Address.State')}
  get Country(){return this.IStudent.get('Address.Country')} 
  get Pin(){return this.IStudent.get('Address.Pin')}
  get FatherFname(){return this.IStudent.get('Father.Name.FName')}
  get FatherMname(){return this.IStudent.get('Father.Name.MName')}
  get FatherLname(){return this.IStudent.get('Father.Name.LName')}
  get FatherEmail(){return this.IStudent.get('Father.Email')}
  get FatherEducationQualification(){return this.IStudent.get('Father.EducationQualification')}
  get FatherProfession(){return this.IStudent.get('Father.Profession')}
  get FatherDesignation(){return this.IStudent.get('Father.Designation')}
  get FatherPhone(){return this.IStudent.get('Father.Phone')}
  get MotherFname(){return this.IStudent.get('Mother.Name.FName')}
  get MotherMname(){return this.IStudent.get('Mother.Name.MName')}
  get MotherLname(){return this.IStudent.get('Mother.Name.LName')}
  get MotherEmail(){return this.IStudent.get('Mother.Email')}
  get MotherEducationQualification(){return this.IStudent.get('Mother.EducationQualification')}
  get MotherProfession(){return this.IStudent.get('Mother.Profession')}
  get MotherDesignation(){return this.IStudent.get('Mother.Designation')}
  get MotherPhone(){return this.IStudent.get('Mother.Phone')}
  get Relation(){return this.IStudent.get('EmergencyContactList.0.Relation')}
  get Phone(){return this.IStudent.controls.EmergencyContactList.get('Phone');}
  get RefDetail(){return this.IStudent.get('ReferenceDetail')}
  get RefThrough(){return this.IStudent.get('ReferenceThrough')}
  get RefCity(){return this.IStudent.controls.ReferenceAddress.get('City');}
  get RefState(){return this.IStudent.controls.ReferenceAddress.get('State');}
  get RefCountry(){return this.IStudent.controls.ReferenceAddress.get('Country');}
  get RefPin(){return this.IStudent.controls.ReferenceAddress.get('Pin');}
  get RefTelNo(){return this.IStudent.controls.ReferenceAddress.get('TelNo');}
  
  patternValidator(control:FormControl) : { [s: string]: boolean | null} {
     let  pattern = /^[A-za-z\s]*$/
     if(!control.value.match(pattern)){
       return {'InValid':true}
     }
     return null;
  }
  numberValidation(control:FormControl) : { [s: string]: boolean | null} {
    let  pattern = /^[0-9\s]*$/
    if(!control.value.match(pattern)){
      return {'InValidNum':true}
    }
    return null;
  }

}
