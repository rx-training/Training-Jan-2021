import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { AgeCalculator, OnlyCharactorAllowed, OnlyDigitAllowed } from './CustomValidators';
import { StudentList } from './IstudentList';

@Component({
  selector: 'app-addmissionform',
  templateUrl: './addmissionform.component.html',
  styleUrls: ['./addmissionform.component.css']
})
export class AddmissionformComponent implements OnInit {

  arr:StudentList[]=[]  
/* Declaration of abstractor*/ 
StudentFirstName:AbstractControl;
StudentMiddleName:AbstractControl;
StudentLastName:AbstractControl;
FatherFirstName:AbstractControl;
FatherMiddleName:AbstractControl;
FatherLastName:AbstractControl;
MotherFirstName:AbstractControl;
MotherMiddleName:AbstractControl;
MotherLastName:AbstractControl;
StudnetPlaceofBirth:AbstractControl;
StudentFirstLanguage:AbstractControl;
City:AbstractControl;
State:AbstractControl;
Country:AbstractControl;
PinNumber:AbstractControl;
FatherEmail:AbstractControl;
FatherQualification:AbstractControl;
FatherProfession:AbstractControl;
FatherDesignation:AbstractControl;
FatherPhoneNumber:AbstractControl;
MotherEmail:AbstractControl;
MotherQualification:AbstractControl;
MotherProfession:AbstractControl;
MotherDesignation:AbstractControl;
MotherPhoneNumber:AbstractControl;
Age:AbstractControl;

  constructor(private fb:FormBuilder)
   { 
     
  
   }
  StudentAddmissionDetails:FormGroup;
  ngOnInit(): void {
    this.StudentAddmissionDetails=this.fb.group({
      StudentName:this.GetFormControl(),
      StudentDateOfBirth:['',[Validators.required,AgeCalculator]],
      StudentPlaceofBirth:['',[Validators.required,OnlyCharactorAllowed]],
      StudentFirstLanguage:['',[Validators.required,OnlyCharactorAllowed]],
      Address:this.fb.group({
        City:['',[Validators.required,OnlyCharactorAllowed]],
        State:['',[Validators.required,OnlyCharactorAllowed]],
        Country:['',[Validators.required,OnlyCharactorAllowed]],
        PinNumber:['',[Validators.required,Validators.maxLength(6),OnlyDigitAllowed,Validators.minLength(6)]]
      }),
      MotherName:this.GetFormControl(),
      MotherDetails:this.GetPerentsFormControls(),
      FatherName:this.GetFormControl(),
      FatherDetails:this.GetPerentsFormControls(),
      EmergencyContactList:this.fb.array([
        this.GetEmergencyContactList()

      ]),
      Reference:this.fb.array([
        this.GetReference()
      ])



    });

    /* ----------------------------Get method for validators---------------------------------*/
    this.StudentFirstName=this.StudentAddmissionDetails.get('StudentName.FirstName');
    this.StudentMiddleName=this.StudentAddmissionDetails.get('StudentName.MiddleName');
    this.StudentLastName=this.StudentAddmissionDetails.get('StudentName.LastName');
    this.FatherFirstName=this.StudentAddmissionDetails.get('FatherName.FirstName');
    this.FatherMiddleName=this.StudentAddmissionDetails.get('FatherName.MiddleName');
    this.FatherLastName=this.StudentAddmissionDetails.get('FatherName.LastName');
    this.MotherFirstName=this.StudentAddmissionDetails.get('MotherName.FirstName');
    this.MotherMiddleName=this.StudentAddmissionDetails.get('MotherName.MiddleName');
    this.MotherLastName=this.StudentAddmissionDetails.get('MotherName.LastName');
    this.StudnetPlaceofBirth=this.StudentAddmissionDetails.get('StudentPlaceofBirth');
    this.StudentFirstLanguage=this.StudentAddmissionDetails.get('StudentFirstLanguage');
    this.City=this.StudentAddmissionDetails.get('Address.City');
    this.State=this.StudentAddmissionDetails.get('Address.State');
    this.Country=this.StudentAddmissionDetails.get('Address.Country');
    this.PinNumber=this.StudentAddmissionDetails.get('Address.PinNumber');
    this.FatherEmail=this.StudentAddmissionDetails.get('FatherDetails.Email');
    this.FatherQualification=this.StudentAddmissionDetails.get('FatherDetails.EducationQualification');
    this.FatherProfession=this.StudentAddmissionDetails.get('FatherDetails.Profession');
    this.FatherDesignation=this.StudentAddmissionDetails.get('FatherDetails.Designation');
    this.FatherPhoneNumber=this.StudentAddmissionDetails.get('FatherDetails.PhoneNumber');
    this.MotherEmail=this.StudentAddmissionDetails.get('MotherDetails.Email');
    this.MotherQualification=this.StudentAddmissionDetails.get('MotherDetails.EducationQualification');
    this.MotherProfession=this.StudentAddmissionDetails.get('MotherDetails.Profession');
    this.MotherDesignation=this.StudentAddmissionDetails.get('MotherDetails.Designation');
    this.MotherPhoneNumber=this.StudentAddmissionDetails.get('MotherDetails.PhoneNumber');
    this.Age=this.StudentAddmissionDetails.get('StudentDateOfBirth')

    
  }
  GetFormControl():FormGroup
  {
    return this.fb.group({
      FirstName:['',[Validators.required,OnlyCharactorAllowed]],
      MiddleName:['',[Validators.required,OnlyCharactorAllowed]],
      LastName:['',[Validators.required,OnlyCharactorAllowed]]
    });
  }
  GetPerentsFormControls():FormGroup
  {
    return this.fb.group({
      Email:['',[Validators.required,Validators.email]],
      EducationQualification:['',Validators.required],
      Profession:['',Validators.required],
      Designation:['',Validators.required],
      PhoneNumber:['',[Validators.required,OnlyDigitAllowed,Validators.maxLength(10),Validators.minLength(10)]]   

    })

        
    
  }

  
   
    
    
  

  GetEmergencyContactList():FormGroup
  {
    return this.fb.group({
      Relation:['',[Validators.required,OnlyCharactorAllowed]],
      MobileNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),OnlyDigitAllowed]]
    })
  }

  GetReference():FormGroup
  {
    return this.fb.group({
      Referencethrough:['',[Validators.required,OnlyCharactorAllowed]],
      MobileNumber:['',[Validators.required,OnlyDigitAllowed,Validators.maxLength(10),Validators.minLength(10)]]
    })
  }
  AddReference()
  {
    (<FormArray>this.StudentAddmissionDetails.get("Reference")).push(this.GetReference())
  }

  AddEmergencyContactList()
  {
    (<FormArray>this.StudentAddmissionDetails.get("EmergencyContactList")).push(this.GetEmergencyContactList())
  }

  
 
 
  SubmitData()
  {
    
   this.arr.push(this.StudentAddmissionDetails.value);
   console.log(this.arr)
  //  this.StudentAddmissionDetails.reset()

   
  }
}