import { Component, OnInit,  } from '@angular/core';
import { AbstractControl,  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeCalculator, OnlyCharactorAllowed, OnlyDigitAllowed } from '../customvalidators';
import { StudentDetails } from '../Model/StudentDetails';
import { StudentAddmissionFormService } from '../Service/Service/student-addmission-form.service';

@Component({
  selector: 'app-student-admission-form',
  templateUrl: './student-admission-form.component.html',
  styleUrls: ['./student-admission-form.component.css']
})
export class StudentAdmissionFormComponent implements OnInit {


  

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
Referencethrough:AbstractControl;
ReferenceMobileNumber:AbstractControl;
EMRIRelation:AbstractControl;
EMRIMobileNumber:AbstractControl;
id:number;

  constructor(private fb:FormBuilder,private Service:StudentAddmissionFormService)
   { 
     
  
   }
   getStudent()
   {
    this.Service.GetAllStudent().subscribe(
      (res:StudentDetails[])=>{
        console.log(res)
        this.studentList=res;
        console.log(this.studentList);
      },
      (err)=>{console.log(err)}
    );
   }


  StudentAddmissionDetails:FormGroup;
  studentList:StudentDetails[]=[];
  ngOnInit(): void { 

   
    this.getStudent();
    
   
   
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
      EmergencyContactList:this.GetEmergencyContactList(),
      Reference:this.GetReference()



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
    this.Age=this.StudentAddmissionDetails.get('StudentDateOfBirth');
    this.Referencethrough=this.StudentAddmissionDetails.get('Reference.Referencethrough');
    this.ReferenceMobileNumber=this.StudentAddmissionDetails.get('Reference.MobileNumber');
    this.EMRIRelation=this.StudentAddmissionDetails.get('EmergencyContactList.Relation');
    this.EMRIMobileNumber=this.StudentAddmissionDetails.get('EmergencyContactList.MobileNumber');

    
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
  

  
   
  

  
      
  
  SubmitData()
  {
    var studentdata:StudentDetails=
    {
      studentFirstName:this.StudentAddmissionDetails.value.StudentName.FirstName,
      studentMiddleName:this.StudentAddmissionDetails.value.StudentName.MiddleName,
      studentLastName:this.StudentAddmissionDetails.value.StudentName.LastName,
      dob:this.StudentAddmissionDetails.value.StudentDateOfBirth,
      placeofBirth:this.StudentAddmissionDetails.value.StudentPlaceofBirth,
      firstLanguage:this.StudentAddmissionDetails.value.StudentFirstLanguage,
      city:this.StudentAddmissionDetails.value.Address.City,
      state:this.StudentAddmissionDetails.value.Address.State,
      country:this.StudentAddmissionDetails.value.Address.Country,
      pinNumber:this.StudentAddmissionDetails.value.Address.PinNumber,
      fatherFirstName:this.StudentAddmissionDetails.value.FatherName.FirstName,
      fatherMiddleName:this.StudentAddmissionDetails.value.FatherName.MiddleName,
      fatherLastName:this.StudentAddmissionDetails.value.FatherName.LastName,
      fatherEmail:this.StudentAddmissionDetails.value.FatherDetails.Email,
      fatherEducationQualification:this.StudentAddmissionDetails.value.FatherDetails.EducationQualification,
      fatherProfession:this.StudentAddmissionDetails.value.FatherDetails.Profession,
      fatherDesignation:this.StudentAddmissionDetails.value.FatherDetails.Designation,
      fatherPhoneNumber:this.StudentAddmissionDetails.value.FatherDetails.PhoneNumber,
      motherFirstName:this.StudentAddmissionDetails.value.MotherName.FirstName,
      motherMiddleName:this.StudentAddmissionDetails.value.MotherName.MiddleName,
      motherLastName:this.StudentAddmissionDetails.value.MotherName.LastName,
      motherEmail:this.StudentAddmissionDetails.value.MotherDetails.Email,
      motherEducationQualification:this.StudentAddmissionDetails.value.MotherDetails.EducationQualification,
      motherProfession:this.StudentAddmissionDetails.value.MotherDetails.Profession,
      motherDesignation:this.StudentAddmissionDetails.value.MotherDetails.Designation,
      motherPhoneNumber:this.StudentAddmissionDetails.value.MotherDetails.PhoneNumber,
      relation:this.StudentAddmissionDetails.value. EmergencyContactList.Relation,
      relationContectNumber:this.StudentAddmissionDetails.value.EmergencyContactList.MobileNumber,
      referenceThrrough:this.StudentAddmissionDetails.value.Reference.Referencethrough,
      referenceContectNumber:this.StudentAddmissionDetails.value.Reference.MobileNumber

    }

    console.log(studentdata);
    this.Service.InserStudent(studentdata).subscribe(
      (res)=>{console.log(res)},
     
      (err)=>{console.log(err)}
    );

    
  }

   editdata:StudentDetails=
   {
     
     studentFirstName:"",
     studentMiddleName:"",
     studentLastName:"",
     dob:new Date("12-11-1999"),
     placeofBirth:"",
     firstLanguage:"",
     city:"",
     state:"",
     country:"",
     pinNumber:"",
     fatherFirstName:"",
     fatherMiddleName:"",
     fatherLastName:"",
     fatherEmail:"",
     fatherEducationQualification:"",
     fatherProfession:"",
     fatherDesignation:"",
     fatherPhoneNumber:"",
     motherFirstName:"",
     motherMiddleName:"",
     motherLastName:"",
     motherEmail:"",
     motherEducationQualification:"",
     motherProfession:"",
     motherDesignation:"",
     motherPhoneNumber:"",
     relation:"",
     relationContectNumber:"",
     referenceThrrough:"",
     referenceContectNumber:""     




   }
   
  UpdateData(item)
  {
    this.id=item.studentId
    this.editdata.studentFirstName=item.studentFirstName;
    this.editdata.studentLastName=item.studentLastName;
    this.editdata.studentMiddleName=item.studentMiddleName;
    
    this.editdata.dob=item.dob;
    this.editdata.placeofBirth=item.placeofBirth;
    this.editdata.firstLanguage=item.firstLanguage;
    this.editdata.city=item.city;
    this.editdata.state=item.state;
    this.editdata.country=item.country;
    this.editdata.pinNumber=item.pinNumber;
    this.editdata.fatherFirstName=item.fatherFirstName;
    this.editdata.fatherMiddleName=item.fatherMiddleName;
    this.editdata.fatherLastName=item.fatherLastName;
    this.editdata.fatherEmail=item.fatherEmail;
    this.editdata.fatherEducationQualification=item.fatherEducationQualification;
    this.editdata.fatherProfession=item.fatherProfession;
    this.editdata.fatherDesignation=item.fatherDesignation;
    this.editdata.fatherPhoneNumber=item.fatherPhoneNumber

    this.editdata.motherFirstName=item.motherFirstName;
    this.editdata.motherMiddleName=item.motherMiddleName;
    this.editdata.motherLastName=item.motherLastName;
    this.editdata.motherEmail=item.motherEmail;
    this.editdata.motherEducationQualification=item.motherEducationQualification;
    this.editdata.motherProfession=item.motherProfession;
    this.editdata.motherDesignation=item.motherDesignation;
    this.editdata.motherPhoneNumber=item.motherPhoneNumber;

    this.editdata.relation=item.relation;
    this.editdata.relationContectNumber=item.relationContectNumber;
    this.editdata.referenceThrrough=item.referenceThrrough;
    this.editdata.referenceContectNumber=item.referenceContectNumber

  }
     
  DeleteData(studentId)
  {
    
      this.Service.DeleteStudent(studentId).subscribe
      ((res)=>{console.log(res)},
      (err)=>{console.log(err)}
      );
  }




  Updateddata()
  {
    var UpdatedRecord:StudentDetails=
    {
      studentFirstName:this.StudentAddmissionDetails.value.StudentName.FirstName,
      studentMiddleName:this.StudentAddmissionDetails.value.StudentName.MiddleName,
      studentLastName:this.StudentAddmissionDetails.value.StudentName.LastName,
      dob:this.StudentAddmissionDetails.value.StudentDateOfBirth,
      placeofBirth:this.StudentAddmissionDetails.value.StudentPlaceofBirth,
      firstLanguage:this.StudentAddmissionDetails.value.StudentFirstLanguage,
      city:this.StudentAddmissionDetails.value.Address.City,
      state:this.StudentAddmissionDetails.value.Address.State,
      country:this.StudentAddmissionDetails.value.Address.Country,
      pinNumber:this.StudentAddmissionDetails.value.Address.PinNumber,
      fatherFirstName:this.StudentAddmissionDetails.value.FatherName.FirstName,
      fatherMiddleName:this.StudentAddmissionDetails.value.FatherName.MiddleName,
      fatherLastName:this.StudentAddmissionDetails.value.FatherName.LastName,
      fatherEmail:this.StudentAddmissionDetails.value.FatherDetails.Email,
      fatherEducationQualification:this.StudentAddmissionDetails.value.FatherDetails.EducationQualification,
      fatherProfession:this.StudentAddmissionDetails.value.FatherDetails.Profession,
      fatherDesignation:this.StudentAddmissionDetails.value.FatherDetails.Designation,
      fatherPhoneNumber:this.StudentAddmissionDetails.value.FatherDetails.PhoneNumber,
      motherFirstName:this.StudentAddmissionDetails.value.MotherName.FirstName,
      motherMiddleName:this.StudentAddmissionDetails.value.MotherName.MiddleName,
      motherLastName:this.StudentAddmissionDetails.value.MotherName.LastName,
      motherEmail:this.StudentAddmissionDetails.value.MotherDetails.Email,
      motherEducationQualification:this.StudentAddmissionDetails.value.MotherDetails.EducationQualification,
      motherProfession:this.StudentAddmissionDetails.value.MotherDetails.Profession,
      motherDesignation:this.StudentAddmissionDetails.value.MotherDetails.Designation,
      motherPhoneNumber:this.StudentAddmissionDetails.value.MotherDetails.PhoneNumber,
      relation:this.StudentAddmissionDetails.value. EmergencyContactList.Relation,
      relationContectNumber:this.StudentAddmissionDetails.value.EmergencyContactList.MobileNumber,
      referenceThrrough:this.StudentAddmissionDetails.value.Reference.Referencethrough,
      referenceContectNumber:this.StudentAddmissionDetails.value.Reference.MobileNumber

    }

    this.Service.UpdateStudent(this.id,UpdatedRecord).subscribe
    (
      (res)=>{
        console.log(res)
       
      },
      (err)=>{console.log(err)}
    );

  }
  


  }


