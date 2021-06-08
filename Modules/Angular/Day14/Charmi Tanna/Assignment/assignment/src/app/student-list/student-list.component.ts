import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { StudentList } from './../StudentList';

import { StudentServiceService } from './../student-service.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges {
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

  StudentList: Array<StudentList>;
  @Input() StudentList1=[];
  @Input() submit: boolean = false;

  
  @Output() editData = new EventEmitter(); 
 studentservice;
  constructor(private service: StudentServiceService) {
    this.studentservice = this.service;
    this.StudentList = this.service.GetStudentInfo();

  }


  ngOnInit(): void {
  }

  ngOnChanges() {
    this.StudentList = this.service.GetStudentInfo();
  }

  getData(data: any) {
    this.StudentList = data;
  }
  Delete(id: number){
    this.service.Delete(id);
    console.log("data removed successfully!");
  }

  Update(index : number,item: any) {
    alert(item.StudentId);
    this.service.defaultStudent=this.service.studentList[index];
    console.log(this.service.defaultStudent);
    // this.studentList =
    // {
    //   StudentId: item.StudentId,
    //   StudentName: item.StudentName,
    //   StudentDateOfBirth: item.StudentDateOfBirth,
    //   StudentFirstLanguage: item.StudentFirstLanguage,
    //   StudentPlaceofBirth: item.StudentPlaceofBirth,
    //   Country: item.Country,
    //   State: item.State,
    //   PinNumber: item.PinNumber,
    //   City: item.City,
    //   MotherName: item.MotherName,
    //   MotherEmail: item.MotherEmail,
    //   MotherDesignation: item.MotherDesignation,
    //   MotherPhoneNumber: item.MotherPhoneNumber,
    //   MotherEducationQualification: item.MotherEducationQualification,
    //   MotherProfession: item.MotherProfession,
    //   FathertName: item.FathertName,
    //   FatherDesignation: item.FatherDesignation,
    //   FatherProfession: item.FatherProfession,
    //   FatherEducationQualification: item.FatherEducationQualification,
    //   FatherEmail: item.FatherEmail,
    //   FatherPhoneNumber: item.FatherPhoneNumber
    // }   
    //console.log(this.studentList);
    //this.editData.emit({id: index, studentObj: this.studentList}); 
    //console.log(index);
    //console.log(this.studentList);
  }
  UpdateData(data: any) {
    alert("hello");
    this.service.Edit(data, this.StudentList);
  }
}
