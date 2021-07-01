import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormArray,FormGroup,FormBuilder, Validators, ValidatorFn, AbstractControl, FormControl, ControlContainer} from '@angular/forms'
import { StudentCrudService } from '../student-crud.service';
import { Student } from '../Student';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {
   StudentList :Student[] = []; 
   id:number; 
   boolVal : boolean = false;
   
   IStudent : FormGroup;
  constructor(
              private fb : FormBuilder,
              private studentCrudService:StudentCrudService
              ) {

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
      EmergencyContactList : this.fb.group({
        Relation:['',Validators.required],
        Phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]],
        Relation1:[''],
        Phone1:['',[Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]],
        Relation2:[''],
        Phone2:['',[Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]],
        
      }),
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
    this.studentCrudService.getStudent().subscribe( (data : Student[])=>{
      this.StudentList =data
    })
  } 
  delete(id){
    this.studentCrudService.deleteStudent(id).subscribe(()=>console.log('user deleted'));
    location.reload();
  }
  

  SubmitData(){
    this.studentCrudService.postStudent(
      {
        firstName:this.Fname.value,
        middlename:this.Mname.value,
        lastName:this.Lname.value,
        dob:this.Date.value,
        placeOfBirth : this.PlaceOfBirth.value,
        firstLanguage:this.FirstLanguage.value,
        addressCity:this.City.value,
        addressState:this.State.value,
        addressCountry:this.Country.value,
        addressPin:this.Pin.value,

        fatherFirstname:this.FatherFname.value,
        fatherMiddlename:this.FatherMname.value,
        fatherLastname:this.FatherLname.value,
        fatherEmail:this.FatherEmail.value,
        fatherEducationQualification:this.FatherEducationQualification.value,
        fatherProfession:this.FatherProfession.value,
        fatherDesignation:this.FatherDesignation.value,
        fatherPhone:this.FatherPhone.value,

        motherFirstname:this.MotherFname.value,
        motherMiddlename:this.MotherMname.value,
        motherLastname:this.MotherLname.value,
        motherEmail:this.MotherEmail.value,
        motherEducationQualification:this.MotherEducationQualification.value,
        motherProfession:this.MotherProfession.value,
        motherDesigation:this.MotherDesignation.value,
        motherPhone:this.MotherPhone.value,

        eemergencyRelation:this.EmerRelation.value,
        emergencyNumber:this.EmerPhone.value,
        eemergencyRelation1:this.EmerRelation1.value,
        emergencyNumber1:this.EmerPhone1.value,
        emergencyRelation2:this.EmerRelation2.value,
        emergencyNumber2:this.EmerPhone2.value,

        referenceDetail:this.RefDetail.value,
        referenceThrough:this.RefThrough.value,
        rcity:this.RefCity.value,
        rstate:this.RefState.value,
        rcountry:this.RefCountry.value,
        rpin:this.RefPin.value,
        rtelNo:this.RefTelNo.value


      }).subscribe();
      location.reload();
  }

  edit(student){
    this.boolVal = true
    this.id = student.id
    this.Fname.setValue(student.firstName),
    this.Mname.setValue(student.middleName),
    this.Lname.setValue(student.lastName)
    this.Date.setValue(formatDate( student.dob, 'yyyy-MM-dd','en')) 
    this.PlaceOfBirth.setValue(student.placeOfBirth)
    this.FirstLanguage.setValue(student.firstLanguage)
    this.City.setValue(student.addressCity)
    this.State.setValue(student.addressState)
    this.Country.setValue(student.addressCountry)
    this.Pin.setValue(student.addressPin)

    this.FatherFname.setValue(student.fatherFirstname)
    this.FatherMname.setValue(student.fatherMiddlename)
    this.FatherLname.setValue(student.fatherLastname)
    this.FatherEmail.setValue(student.fatherEmail)
    this.FatherEducationQualification.setValue(student.fatherEducationQualification)
    this.FatherProfession.setValue(student.fatherProfession)
    this.FatherDesignation.setValue(student.fatherDesignation)
    this.FatherPhone.setValue(student.fatherPhone)
    this.Lname.setValue(student.lastName)
  
    this.MotherFname.setValue(student.motherFirstname)
    this.MotherMname.setValue(student.motherMiddlename)
    this.MotherLname.setValue(student.motherLastname)
    this.MotherEmail.setValue(student.motherEmail)
    this.MotherEducationQualification.setValue(student.motherEducationQualification)
    this.MotherProfession.setValue(student.motherProfession)
    this.MotherDesignation.setValue(student.motherDesigation)
    this.MotherPhone.setValue(student.motherPhone)

    this.EmerRelation.setValue(student.eemergencyRelation)
    this.EmerPhone.setValue(student.emergencyNumber)
    this.EmerRelation1.setValue(student.eemergencyRelation1)
    this.EmerPhone1.setValue(student.emergencyNumber1)
    this.EmerRelation2.setValue(student.emergencyRelation2)
    this.EmerPhone2.setValue(student.emergencyNumber2)

    this.RefDetail.setValue(student.referenceDetail)
    this.RefThrough.setValue(student.referenceThrough)
    this.RefCity.setValue(student.rcity)
    this.RefState.setValue(student.rstate)
    this.RefCountry.setValue(student.rcountry)
    this.RefPin.setValue(student.rpin)
    this.RefTelNo.setValue(student.rtelNo)

  }

  update(){
    this.studentCrudService.putStudent(this.id,
      { id : this.id,
        firstName:this.Fname.value,
        middlename:this.Mname.value,
        lastName:this.Lname.value,
        dob:this.Date.value,
        placeOfBirth : this.PlaceOfBirth.value,
        firstLanguage:this.FirstLanguage.value,
        addressCity:this.City.value,
        addressState:this.State.value,
        addressCountry:this.Country.value,
        addressPin:this.Pin.value,

        fatherFirstname:this.FatherFname.value,
        fatherMiddlename:this.FatherMname.value,
        fatherLastname:this.FatherLname.value,
        fatherEmail:this.FatherEmail.value,
        fatherEducationQualification:this.FatherEducationQualification.value,
        fatherProfession:this.FatherProfession.value,
        fatherDesignation:this.FatherDesignation.value,
        fatherPhone:this.FatherPhone.value,

        motherFirstname:this.MotherFname.value,
        motherMiddlename:this.MotherMname.value,
        motherLastname:this.MotherLname.value,
        motherEmail:this.MotherEmail.value,
        motherEducationQualification:this.MotherEducationQualification.value,
        motherProfession:this.MotherProfession.value,
        motherDesigation:this.MotherDesignation.value,
        motherPhone:this.MotherPhone.value,

        eemergencyRelation:this.EmerRelation.value,
        emergencyNumber:this.EmerPhone.value,
        eemergencyRelation1:this.EmerRelation1.value,
        emergencyNumber1:this.EmerPhone1.value,
        emergencyRelation2:this.EmerRelation2.value,
        emergencyNumber2:this.EmerPhone2.value,

        referenceDetail:this.RefDetail.value,
        referenceThrough:this.RefThrough.value,
        rcity:this.RefCity.value,
        rstate:this.RefState.value,
        rcountry:this.RefCountry.value,
        rpin:this.RefPin.value,
        rtelNo:this.RefTelNo.value
      }).subscribe();
      this.id = 0;
      location.reload()
  }
  newForm(){
    this.boolVal = false;
    location.reload()
  }



  // get EmergencyContactList(){
  //   return this.IStudent.get('EmergencyContactList') as FormArray;
  // }
  // addEmergencyContactList(){
  //   this.EmergencyContactList.push(   
  //     this.fb.group({
  //       Relation:['',Validators.required],
  //       Phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),this.numberValidation ]]
  //   })
  //   );
  // }
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
  //get Relation(){return this.IStudent.get('EmergencyContactList.0.Relation')}
  //get Phone(){return this.IStudent.controls.EmergencyContactList.get('Phone');}
  get RefDetail(){return this.IStudent.get('ReferenceDetail')}
  get RefThrough(){return this.IStudent.get('ReferenceThrough')}
  get RefCity(){return this.IStudent.controls.ReferenceAddress.get('City');}
  get RefState(){return this.IStudent.controls.ReferenceAddress.get('State');}
  get RefCountry(){return this.IStudent.controls.ReferenceAddress.get('Country');}
  get RefPin(){return this.IStudent.controls.ReferenceAddress.get('Pin');}
  get RefTelNo(){return this.IStudent.controls.ReferenceAddress.get('TelNo');}

  get EmerRelation(){return this.IStudent.controls.EmergencyContactList.get('Relation');}
  get EmerPhone(){return this.IStudent.controls.EmergencyContactList.get('Phone');}
  get EmerRelation1(){return this.IStudent.controls.EmergencyContactList.get('Relation1');}
  get EmerPhone1(){return this.IStudent.controls.EmergencyContactList.get('Phone1');}
  get EmerRelation2(){return this.IStudent.controls.EmergencyContactList.get('Relation2');}
  get EmerPhone2(){return this.IStudent.controls.EmergencyContactList.get('Phone2');}
  
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
