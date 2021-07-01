import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { student } from '../Student';
import { StudentServiceService } from '../student-service.service';
import { Datevalidator, nameValidator, numberValidator } from '../validators/validators.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})



export class StudentFormComponent implements OnInit {
  StudentList: student[] = [];
  studentForm :FormGroup;
  stud:student;
  id:number = 10;
  srno:number=10;
  genders = ['Male', 'Female'];

  constructor(private fb :FormBuilder,private service:StudentServiceService) {
    this.studentForm = this.fb.group({
      'Name': this.fb.group({
        
        'SFirst': ['',[Validators.required,nameValidator]],
        'SMiddle':['',(nameValidator)],
        'SLast': ['',[Validators.required,nameValidator]]
      }),
      'dob': ['',[Validators.required ,Datevalidator]],
      'PlaceOfBirth': ['',Validators.required],
      'FirstLanguage': ['',Validators.required],
    
        'City': ['',Validators.required],
        'State': ['',Validators.required],
        'CountryPin': ['',[Validators.required,Validators.minLength(6)]]
      ,
     
        'FatherName': this.fb.group({
          'FFirst': [null,[Validators.required,nameValidator]],
          'FMiddle': [null,nameValidator],
          'FLast':[null,[Validators.required,nameValidator]]
        }),
        'FEmail': [null,Validators.email],
        'FEducationQualification': [null],
        'FProfession': [null,Validators.required],
        'FDesignation': [null,Validators.required],
        'FPhone': [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),numberValidator]],

     
     
        'MotherName': this.fb.group({
          'MFirst': [null,[Validators.required,nameValidator]],
          'MMiddle': [null,nameValidator],
          'MLast': [null,[Validators.required,nameValidator]]
        }),
        'MEmail': [null,Validators.email],
        'MEducationQualification': [],
        'MProfession': [],
        'MDesignation': [],
        'MPhone': [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),numberValidator]]
      ,
      'EmergencyContactList': this.fb.array([
        this.fb.group({
          'eRelation': [null,Validators.required],
          'eNumber': [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),numberValidator])]
        })
      ]),
      
        'RefrenceThrough': [null,Validators.required],
        'AddressWithTelephoneNo': [null,Validators.required]
      
    })
  }
    

  ngOnInit(): void {
  

  }

get SMiddle(){
  return this.studentForm.get('Name.SMiddle');
}
get SFirst(){
  return this.studentForm.get('Name.SFirst');
}
get SLast(){
  return this.studentForm.get('Name.SLast');
}
get DOB(){
  return this.studentForm.get('dob');
}
get PlaceOfBirth(){
  return this.studentForm.get('PlaceOfBirth');
}
get FirstLanguage(){
  return this.studentForm.get('FirstLanguage');
}
get City(){
  return this.studentForm.get('City');
}
get State(){
  return this.studentForm.get('State');
}
get CountryPin(){
  return this.studentForm.get('CountryPin');
}
get FFirst(){
  return this.studentForm.get('FatherName.FFirst')
}
get FMiddle(){
  return this.studentForm.get('FatherName.FMiddle')
}
get FLast(){
  return this.studentForm.get('FatherName.FLast')
}
get FEmail(){
  return this.studentForm.get('FEmail')
}
get FEducationQualification(){
  return this.studentForm.get('FEducationQualification')
}
get FProfession(){
  return this.studentForm.get('FProfession')
}
get FDesignation(){
  return this.studentForm.get('FDesignation')
}
get FPhone(){
  return this.studentForm.get('FPhone')
}


//Mother Details
get MFirst(){
  return this.studentForm.get('MotherName.MFirst')
}
get MMiddle(){
  return this.studentForm.get('MotherName.MMiddle')
}
get MLast(){
  return this.studentForm.get('MotherName.MLast')
}
get MotherName(){
return this.studentForm.get('MEmail')
}
get MEducationQualification(){
  return this.studentForm.get('MEducationQualification')
}
get MEmail(){
  return this.studentForm.get('MEmail')
}
get MProfession(){
  return this.studentForm.get('MProfession')
}
get MDesignation(){
  return this.studentForm.get('MDesignation')
}
get MPhone(){
  return this.studentForm.get('MPhone')
}

//extra details
get eNumber() {
  return this.studentForm.get('EmergencyContactList.eNumber');
}
get eRelation() {
  return this.studentForm.get('EmergencyContactList.eRelation');
}
get RefrenceThrough(){
  return this.studentForm.get('RefrenceThrough');
}
get AddressWithTelephoneNo(){
  return this.studentForm.get('AddressWithTelephoneNo');
   
}
 idxFormGroup(idx:number){
  
  return <FormGroup> this.studentForm.get('EmergencyContactList').get(idx.toString());
}
 


  CreateEmergencyContact():  FormGroup {
    return new FormGroup({
      'eRelation': new FormControl('',nameValidator),
      'eNumber': new FormControl('',[Validators.required])
    })
  }
  Add() {
    const Contact = this.studentForm.get('EmergencyContactList') as FormArray
    Contact.push(this.CreateEmergencyContact())
    
  }
mapdata(form:any):student{
  this.stud = form;
  let input={ 
  city:this.stud.city,
  CountryPin:this.stud.CountryPin,
  dob:this.stud.dob,
  firstLanguage:this.stud.FirstLanguage,
  fDesigantion:this.stud.FDesignation,
  fEduQualification:this.stud.FEduQulification,
  fEmail:this.stud.FEmail,
  fphone:this.stud.FPhone,
  fProfession : this.stud.FProfession,
  fFatherName  : this.stud.FatherName,
  mProfession :this.stud.MProfession,
  mMotherName  : this.stud.MotherName,
  mDesigantion:this.stud.MDesignation,
  mEduQualification:this.stud.MEducationQulification,
  mEmail:this.stud.MEmail,
  mphone:this.stud.MPhone,
  placeOfBirth:this.stud.PlaceOfBirth,
  rAddressWithTel:this.stud.RAddressWithTel,
    refrenceThrough:this.stud.Refrencethrough,
    state:this.stud.State,
    studentId:this.stud.studentId,
    studentName:this.stud.studentName,
    emergencyContactLists:this.stud.emergencyContactLists,
    
  }
  this.stud.studentName  = form.Name.SFirst  +form.Name.SMiddle +  form.Name.SLast;
  this.stud.FatherName = form.FatherName.FFirst +form.FatherName.FMiddle+form.FatherName.FLast;
  this.stud.MotherName = form.MotherName.MFirst +form.MotherName.MMiddle+form.MotherName.MLast;
  this.stud.studentId = ++this.id;
  input.emergencyContactLists = form.EmergencyContactList


  for(var item of form.EmergencyContactList){

    item.SrNo = ++this.srno;
    item.studentId = this.stud.studentId;
  
    debugger;
    
  }

  input.city = form.city;
  input.rAddressWithTel = form.AddressWithTelephoneNo;
  input.CountryPin = form.CountryPin;
  input.firstLanguage = form.FirstLanguage;
  input.fDesigantion = form.FDesignation;
  input.fEduQualification = form.FEducationQualification;
  input.fEmail = form.FEmail;
  input.fphone = form.FPhone;
  input.fProfession = form.FProfession;
  input.fFatherName = this.stud.FatherName;
  input.mDesigantion = form.MDesignation;
  input.mEduQualification = form.MEducationQualification;
  input.mEmail = form.MEmail;
  input.mphone = form.MPhone;
  input.mProfession = form.MProfession;
  input.mMotherName =   this.stud.MotherName;
  input.studentName = form.studentName;
  input.placeOfBirth = form.PlaceOfBirth;
  input.refrenceThrough = form.RefrenceThrough;
  input.state = form.State;
  input.dob = form.dob;
  input.studentName =  this.stud.studentName;
  input.studentId = form.studentId;



  return input ;

 
}
  onSubmit() {
    
    this.StudentList.push(this.studentForm.value);
    console.log(this.studentForm.value);
   this.service.addStudent(this.mapdata(this.studentForm.value)).subscribe(student=>{this.StudentList.push(student)
  });}
  
  get EmergencyContactLists() {

    return this.studentForm.get('EmergencyContactList') as FormArray;

  }


}
