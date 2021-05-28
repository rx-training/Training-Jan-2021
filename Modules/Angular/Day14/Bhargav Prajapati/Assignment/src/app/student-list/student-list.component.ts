import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { StudentServiceService } from '../student-service.service';
import { StudentList } from '../StudentList';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit,OnChanges {

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




@Output() Editemit = new EventEmitter();
  StudentList:Array<StudentList>;
  constructor(private service:StudentServiceService)
   {

    this.StudentList=this.service.GetStudentInfo();
    
   }

  ngOnInit(): void {
    //  this.Aas= this.service.studentList; 
    //  console.log(this.service.studentList)  
    
  }
  ngOnChanges()
  {
    this.StudentList=this.service.GetStudentInfo();
  }
  
   getData(data)
   {
    this.StudentList=data;
   }

   DeleteData(StudentId,item)
   {
        this.service.DeleteData(StudentId,item);
   }

   EditData(item)
   {

    this.studentList =
    {
      StudentId: item.StudentId,
      StudentName:item.StudentName,
      StudentDateOfBirth:item.StudentDateOfBirth,
      StudentFirstLanguage: item.StudentFirstLanguage,
      StudentPlaceofBirth: item.StudentPlaceofBirth,
      Country: item.Country,
      State: item.State,
      PinNumber:item.PinNumber,
      City:item.City,
      MotherName:item.MotherName,
      MotherEmail:item.MotherEmail,
      MotherDesignation:item.MotherDesignation,
      MotherPhoneNumber:item.MotherPhoneNumber,
      MotherEducationQualification:item.MotherEducationQualification,
      MotherProfession:item.MotherProfession,
      FathertName: item.FathertName,
      FatherDesignation:item.FatherDesignation,
      FatherProfession:item.FatherProfession,
      FatherEducationQualification:item.FatherEducationQualification,
      FatherEmail:item.FatherEmail,
      FatherPhoneNumber:item.FatherPhoneNumber
    }
     
   }
   UpdateData(data)
   {
     //console.log();
   // console.log("updated");
    this.service.Edit(data,this.StudentList)
   }
  
}
