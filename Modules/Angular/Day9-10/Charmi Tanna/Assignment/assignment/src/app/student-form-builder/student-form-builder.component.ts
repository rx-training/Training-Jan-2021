import { IStudent } from './../student';
import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,FormArray,FormBuilder,Validators,AbstractControl} from '@angular/forms';



@Component({
  selector: 'app-student-form-builder',
  templateUrl: './student-form-builder.component.html',
  styleUrls: ['./student-form-builder.component.css']
})


export class StudentFormBuilderComponent implements OnInit {
studentAdmission:FormGroup;
LastName: AbstractControl; 
FirstName1:AbstractControl;
MiddleName:AbstractControl;
City1: AbstractControl; 
State1:AbstractControl;
Country1:AbstractControl;
Pin1:AbstractControl;
FEmail1 : AbstractControl;
FEducationQualification1 : AbstractControl;
FProfession1 : AbstractControl;
FDesignation1  : AbstractControl;
FPhone1 : AbstractControl;
MEmail1 : AbstractControl;
MEducationQualification1 : AbstractControl;
MProfession1 : AbstractControl;
MDesignation1  : AbstractControl;
MPhone1 : AbstractControl;
MFName : AbstractControl;
MMName : AbstractControl;
MLName : AbstractControl;
FFName : AbstractControl;
FMName : AbstractControl;
FLName : AbstractControl;
  
  constructor(private formBuilder : FormBuilder) { 
    
    this.studentAdmission = this.formBuilder.group({
      SName : this.formBuilder.group(
      {
        SFirstName1 : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        SMiddleName: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        SLastName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])]
      }),
      DOB : ['',Validators.compose([Validators.required,ageRangeValidator])],
      PlaceOfBirth : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      FirstLanguage : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      Address : this.formBuilder.group(
        {
          City : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          State : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          Country : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          Pin : ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6),Validators.pattern('^[0-9]+$')])]
        }
      ),
      Father : this.formBuilder.group({
        FEmail : ['', Validators.compose([Validators.required,Validators.email])],
        FEducationQualification : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        FProfession : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        FDesignation : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        FPhone : ['',Validators.compose([Validators.required,Validators.pattern('^[7-9]{1}[0-9]{9}$')])],
        FName : this.formBuilder.group({
          FFirstName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          FMiddleName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          FLastName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])]
        }),      
      }),
      Mother : this.formBuilder.group({
        MName : this.formBuilder.group({
          MFirstName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          MMiddleName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          MLastName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        }),
        MEmail :['', Validators.compose([Validators.required,Validators.email])],
        MEducationQualification : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        MProfession : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        MDesignation : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        MPhone : ['',Validators.compose([Validators.required,Validators.pattern('^[7-9]{1}[0-9]{9}$')])]
      }),
      EmergencyContactList : this.formBuilder.array([
        this.formBuilder.group({
          Relation : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          Number : ['',Validators.compose([Validators.required,Validators.pattern('^[7-9]{1}[0-9]{9}$')])],
        }),
        this.formBuilder.group({
          Relation : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
          Number : ['',Validators.compose([Validators.required,Validators.pattern('^[7-9]{1}[0-9]{9}$')])],
        })   
      ]
      ),
      ReferenceDetails1 : this.formBuilder.array([
        this.formBuilder.group({
        ReferenceDetails : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])]
        })
      ])
    }
    );
this.FirstName1 = this.getAddress.controls['SFirstName1'];
this.LastName = this.getAddress.controls['SLastName'];
this.MiddleName = this.getAddress.controls['SMiddleName'];
this.City1 = this.getAddress1.controls['City'];
this.State1 = this.getAddress1.controls['State'];
this.Country1 = this.getAddress1.controls['Country'];
this.Pin1 = this.getAddress1.controls['Pin'];
this.FEmail1 = this.getFatherDetails.controls['FEmail'];
this.FPhone1 = this.getFatherDetails.controls['FPhone'];
this.FProfession1 = this.getFatherDetails.controls['FProfession'];
this.FDesignation1 = this.getFatherDetails.controls['FDesignation'];
this.FEducationQualification1 = this.getFatherDetails.controls['FEducationQualification'];
this.MEmail1 = this.getMotherDetails.controls['MEmail'];
this.MPhone1 = this.getMotherDetails.controls['MPhone'];
this.MProfession1 = this.getMotherDetails.controls['MProfession'];
this.MDesignation1 = this.getMotherDetails.controls['MDesignation'];
this.MEducationQualification1 = this.getMotherDetails.controls['MEducationQualification'];
this.MFName = this.getMotherDetails1.controls['MFirstName'];
this.MMName = this.getMotherDetails1.controls['MMiddleName'];
this.MLName = this.getMotherDetails1.controls['MLastName'];
this.FFName = this.getFatherDetails1.controls['FFirstName'];
this.FMName = this.getFatherDetails1.controls['FMiddleName'];
this.FLName = this.getFatherDetails1.controls['FLastName'];

}

    get getAddress()
    {
      return this.studentAdmission.get('SName') as FormGroup;
    }

    get DOB1()
    {
      return this.studentAdmission.get('DOB') as FormControl;
    }
    get PlaceOfBirth()
    {
      return this.studentAdmission.get('PlaceOfBirth') as FormControl;
    }
    get FirstLanguage()
    {
      return this.studentAdmission.get('FirstLanguage') as FormControl;
    }
    get getAddress1()
    {
        return this.studentAdmission.get('Address') as FormGroup;
    }
    get getFatherDetails()
    {
      return this.studentAdmission.get('Father') as FormGroup;
    }
    get getFatherDetails1()
    {
      return this.getFatherDetails.get('FName') as FormGroup;
    }
    get getMotherDetails()
    {
      return this.studentAdmission.get('Mother') as FormGroup;
    }
    get getMotherDetails1()
    {
      return this.getMotherDetails.get('MName') as FormGroup;
    }
   
  
    getList(id:number)
    {
      return <FormGroup>(<FormArray>this.studentAdmission.get('EmergencyContactList')).get(id.toString());
    }
    getDetails(id:number)
    {
      return <FormGroup>(<FormArray>this.studentAdmission.get('ReferenceDetails1')).get(id.toString());
    }
  AddContactList()
  {
    this.getEmergencyContactLists.push(this.formBuilder.array([
      this.formBuilder.group({
        Relation : ['',Validators.required],
        Number : ['',Validators.required]
      })
    ]));
  }

  ReferenceDetails()
  {
    this.getReferenceDetails.push(this.formBuilder.array([
      this.formBuilder.group({
      ReferenceDetails : ['',Validators.required]
      })
    ]));
    
  }

  Submit()
  {
    var stud = this.studentAdmission.value;
    alert("hello");
    console.log(this.studentAdmission.value);
    this.Student1.push({  
      SFirstName : stud.SName.SFirstName1,
      SMiddleName : stud.SName.SLastName,
      SLastName : stud.SName.SMiddleName,
      DOB : stud.SName.DOB1,
      PlaceOfBirth : stud.SName.PlaceOfBirth,
      FirstLanguage : stud.SName.FirstLanguage,
      City : stud.SName.City,
      State : stud.SName.State,
      Country : stud.SName.State,
      Pin : stud.SName.Pin,
      FEmail : stud.SName.FEmail,
      FEducationQualification : stud.SName.FEducationQualification,
      FProfession : stud.SName.FProfession,
      FDesignation : stud.SName.FDesignation,
      FPhone : stud.SName.FPhone,
      FFirstName : stud.SName.FFirstName,
      FMiddleName : stud.SName.FMiddleName,
      FLastName : stud.SName.FLastName,
      MFirstName : stud.SName.MFirstName,
      MMiddleName : stud.SName.MMiddleName,
      MLastName : stud.SName.MLastName,
      MEmail : stud.SName.MEmail,
      MEducationQualification : stud.SName.MEducationQualification,
      MProfession : stud.SName.MProfession,
      MDesignation : stud.SName.MDesignation,
      MPhone : stud.SName.MPhone,
      Relation :  stud.SName.getList,
      Number : stud.SName.getList,
      ReferenceDetails : stud.SName.getDetails
    }
  );
  }
  get getEmergencyContactLists()
  {
    return this.studentAdmission.get("EmergencyContactList") as FormArray;
  }
  get getReferenceDetails()
  {
    return this.studentAdmission.get("ReferenceDetails1") as FormArray;
  }

  ngOnInit(): void {

  }
  Student1: Array<IStudent> = []
}


function ageRangeValidator(control: AbstractControl): { [key: string]: any } | null {
  var value = false;
    var year = control.value ;
    var year1;
    var str1 : number=0;
    var diff : number=0;
    for(let i of year)
    {
      if(i=="-")
      {
        break;
    }
      str1=str1+i;
    }
    var year2 = new Date().getFullYear();
    diff = year2 - str1;
    var year3 : number=0;
    if(diff >= 5 && diff <= 20)
    {
      var year3 = diff;
      value= true;
      return null;
    }
    return {age:{value : diff}};
}