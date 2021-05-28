import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl,FormBuilder, FormsModule, FormControlDirective, FormControlName, Validators } from '@angular/forms';
import { student } from '../Models/Student';
import { nameRegex, nameValidator,Datevalidator, numberValidator } from '../Validators/validator'
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  StudentList: student[] = [];
  studentForm: FormGroup;
  genders = ['Male', 'Female'];

  constructor(private fb :FormBuilder) {
    this.studentForm = this.fb.group({
      'Name': this.fb.group({
        
        'SFirst': ['',[Validators.required,nameValidator]],
        'SMiddle':['',(nameValidator)],
        'SLast': ['',[Validators.required,nameValidator]]
      }),
      'DOB': ['',[Validators.required ,Datevalidator]],
      'PlaceOfBirth': ['',Validators.required],
      'FirstLanguage': ['',Validators.required],
      'Address': this.fb.group({
        'City': ['',Validators.required],
        'State': ['',Validators.required],
        'CountryPin': ['',[Validators.required,Validators.minLength(6)]]
      }),
      'Father': this.fb.group({
        'FatherName': this.fb.group({
          'FFirst': [null,[Validators.required,nameValidator]],
          'FMiddle': [null,nameValidator],
          'FLast':[null,[Validators.required,nameValidator]]
        }),
        'FEmail': [null,Validators.email],
        'FEducationQualification': [null],
        'FProfession': [null,Validators.required],
        'FDesignation': [null,Validators.required],
        'FPhone': [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),numberValidator]]

      }),
      'Mother': this.fb.group({
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
      }),
      'EmergencyContactList': this.fb.array([
        this.fb.group({
          'Relation': [null,Validators.required],
          'Number': [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),numberValidator])]
        })
      ]),
      'RefrenceDetails': this.fb.group({
        'RefrenceThrough': [null,Validators.required],
        'AddressWithTelephoneNo': [null,Validators.required]
      })
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
  return this.studentForm.get('DOB');
}
get PlaceOfBirth(){
  return this.studentForm.get('PlaceOfBirth');
}
get FirstLanguage(){
  return this.studentForm.get('FirstLanguage');
}
get City(){
  return this.studentForm.get('Address.City');
}
get State(){
  return this.studentForm.get('Address.State');
}
get CountryPin(){
  return this.studentForm.get('Address.CountryPin');
}
get FFirst(){
  return this.studentForm.get('Father.FatherName.FFirst')
}
get FMiddle(){
  return this.studentForm.get('Father.FatherName.FMiddle')
}
get FLast(){
  return this.studentForm.get('Father.FatherName.FLast')
}
get FEmail(){
  return this.studentForm.get('Father.FEmail')
}
get FEducationQualification(){
  return this.studentForm.get('Father.FEducationQualification')
}
get FProfession(){
  return this.studentForm.get('Father.FProfession')
}
get FDesignation(){
  return this.studentForm.get('Father.FDesignation')
}
get FPhone(){
  return this.studentForm.get('Father.FPhone')
}


//Mother Details
get MFirst(){
  return this.studentForm.get('Mother.MotherName.MFirst')
}
get MMiddle(){
  return this.studentForm.get('Mother.MotherName.MMiddle')
}
get MLast(){
  return this.studentForm.get('Mother.MotherName.MLast')
}
get MotherName(){
return this.studentForm.get('Mother.MEmail')
}
get MEducationQualification(){
  return this.studentForm.get('Mother.MEducationQualification')
}
get MEmail(){
  return this.studentForm.get('Mother.MEmail')
}
get MProfession(){
  return this.studentForm.get('Mother.MProfession')
}
get MDesignation(){
  return this.studentForm.get('Mother.MDesignation')
}
get MPhone(){
  return this.studentForm.get('Mother.MPhone')
}

//extra details
get Enumber() {
  return this.studentForm.get('EmergencyContactList.Number');
}
get Relation() {
  return this.studentForm.get('EmergencyContactList.Relation');
}
get RefrenceThrough(){
  return this.studentForm.get('RefrenceDetails.RefrenceThrough');
}
get AddressWithTelephoneNo(){
  return this.studentForm.get('RefrenceDetails.AddressWithTelephoneNo');
   
}
 idxFormGroup(idx:number){
  
  return <FormGroup> this.studentForm.get('EmergencyContactList').get(idx.toString());
}



  CreateEmergencyContact(): FormGroup {
    return new FormGroup({
      'Relation': new FormControl(),
      'Number': new FormControl()
    })
  }
  Add() {
    this.EmergencyContactLists.push(this.CreateEmergencyContact())
  }

  onSubmit() {
    this.StudentList.push(this.studentForm.value);
    console.log(this.studentForm.value)
    console.log(this.StudentList)
  }
  get EmergencyContactLists() {

    return this.studentForm.get('EmergencyContactList') as FormArray;

  }


}
