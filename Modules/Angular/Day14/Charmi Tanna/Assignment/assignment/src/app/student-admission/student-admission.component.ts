import { StudentList } from './../StudentList';
import { StudentServiceService } from './../student-service.service';
import { Component, OnInit,Output,Input,EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.css'],
  //providers: [StudentServiceService]
})
export class StudentAdmissionComponent implements OnInit {
  submitted = false;
  List: StudentList[] = [];
  studentList: StudentList =
    {
      StudentId: 0,
      StudentName: "",
      StudentDateOfBirth: "",
      StudentFirstLanguage: "",
      StudentPlaceofBirth: "",
      Country: "",
      State: "",
      PinNumber: 0,
      City: "",
      MotherName: "",
      MotherEmail: "",
      MotherDesignation: "",
      MotherPhoneNumber: 0,
      MotherEducationQualification: "",
      MotherProfession: "",
      FathertName: "",
      FatherDesignation: "",
      FatherProfession: "",
      FatherEducationQualification: "",
      FatherEmail: "",
      FatherPhoneNumber: 0,
    }

    studentservice;
  constructor(private service : StudentServiceService) { 
    this.studentservice = this.service;
  }

  reset() {
    this.studentList =
    {
      StudentId: 0,
      StudentName: "",
      StudentDateOfBirth: "",
      StudentFirstLanguage: "",
      StudentPlaceofBirth: "",
      Country: "",
      State: "",
      PinNumber: 0,
      City: "",
      MotherName: "",
      MotherEmail: "",
      MotherDesignation: "",
      MotherPhoneNumber: 0,
      MotherEducationQualification: "",
      MotherProfession: "",
      FathertName: "",
      FatherDesignation: "",
      FatherProfession: "",
      FatherEducationQualification: "",
      FatherEmail: "",
      FatherPhoneNumber: 0,
    }
  }

      
  @Input() editValue: any =  {StudentId: 0, StudentName: "", StudentDateOfBirth: new Date(), StudentFirstLanguage :"",StudentPlaceofBirth:"", Country: "", State: "", PinNumber: 0,  City: "",MotherName: "",  MotherEmail: "",MotherDesignation: "", MotherPhoneNumber: 0,MotherEducationQualification: "",MotherProfession: "",FathertName: "",FatherDesignation: "", FatherProfession: "",FatherEducationQualification: "",FatherEmail: "",FatherPhoneNumber: 0}; ​​

  @Input() StudentId: number=0;


  @Output() SendData = new EventEmitter();
  ngOnInit(){
    this.List=this.service.GetStudentInfo();
    this.studentList = this.service.defaultStudent;
  }
  submidata() {
    console.log(this.studentList);
    this.service.StoreData(this.studentList);
    //this.SendData.emit(this.List);
    
      this.reset();
  
}
}
