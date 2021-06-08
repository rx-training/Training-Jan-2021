import { LoggerService} from './logger.service';
import { Inject, Injectable,Input } from '@angular/core';
import {StudentList } from './StudentList';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  studentList:Array<StudentList>=[
    {
      StudentId:1,
      StudentName:"Meena",
      StudentDateOfBirth:"4/5/1997",
      StudentFirstLanguage:"Gujarati",
      City:"Ahmedabad",
      State:"Gujarat",
      Country:"India",
      StudentPlaceofBirth:"Ahmedabad",
      PinNumber:382330,
      FathertName:"Manishbhai",
      FatherEmail:"manish@gmail.com",
      FatherDesignation:"Software Developer",
      FatherEducationQualification:"MCA",
      FatherPhoneNumber:9898988888,
      FatherProfession:"Software Developer",
      MotherName:"Manisha",
      MotherEmail:"manisha@gmail.com",
      MotherDesignation:"HR",
      MotherEducationQualification:"Mcom",
      MotherPhoneNumber:9000090000,
      MotherProfession:"Tester"
    }
  ]
  defaultStudent: StudentList =
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


   constructor(private Loggerservice :LoggerService) { }


  GetStudentInfo()
  {
     return this.studentList;     
  }

  StoreData(student:StudentList)
  {
    this.studentList.push(student);
    this.Loggerservice.log("student is Added");
    console.log(this.studentList);
  }

  Delete(id: number){
    for(var studentObj in this.studentList){
      if(this.studentList[studentObj].StudentId == id){
        this.studentList.splice(parseInt(studentObj), 1);
      }
    }
    this.Loggerservice.log("Student Data Deleted Sucessfully");
  }
  Edit(student : any,List:Array<StudentList>)
  {
      var student1=List.find(s=>s.StudentId==student.StudentId);
      var idex=List.indexOf(student);
      List[idex]=student;
      this.Loggerservice.log("Student Field is updated");
      return List;
  }

}
