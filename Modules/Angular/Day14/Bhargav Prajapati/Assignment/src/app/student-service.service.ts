import { Inject, Injectable, Input } from '@angular/core';
import { LoggerService } from './logger.service';
import { StudentList } from './StudentList';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  studentList:Array<StudentList>=[
    {
      StudentId:1,
      StudentName:"Bhavik",
      StudentDateOfBirth:"12/11/1999",
      StudentFirstLanguage:"Gujarati",
      City:"Ahmedabad",
      State:"Gujarat",
      Country:"India",
      StudentPlaceofBirth:"Ahmedabad",
      PinNumber:382330,
      FathertName:"Jigneshbhi",
      FatherEmail:"abc@gmail.com",
      FatherDesignation:"jr.Teacher",
      FatherEducationQualification:"B.ed",
      FatherPhoneNumber:99999999999,
      FatherProfession:"Teacher",
      MotherName:"ssddsa",
      MotherEmail:"sdsds@gmail.com",
      MotherDesignation:"sdfdfsd",
      MotherEducationQualification:"sdfdsfsdf",
      MotherPhoneNumber:99974477744,
      MotherProfession:"sfsfdfsdfd"
    }
  ]
  constructor(@Inject(LoggerService) private Loggerservice  
    
  ) { }

  
  GetStudentInfo()
  {
    
     return this.studentList;
         
  }

  StoreData(student:StudentList)
  {
    this.studentList.push(student);
    this.Loggerservice.log("student is Added");
    
    //console.log(this.studentList);
  }

  DeleteData(StudentID:number,item)
  {

    //console.log(item)
    item.splice(item.indexOf(item.filter(s=>s.StudentId==StudentID)[0]),1)
    //console.log(this.studentList)
    //return this.studentList;
    this.studentList=item;

    this.Loggerservice.log("student is Deleted");
  }  
  Edit(item,List:Array<StudentList>)
  {
      var find=List.find(s=>s.StudentId==item.StudentId);
      var idex=List.indexOf(find);
      List[idex]=item;
      this.Loggerservice.log("student is Edited");
      return List;
      
  }



  }

  
