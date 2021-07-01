import { Inject, Injectable } from '@angular/core';
import { LoggerserviceService } from '../loggerservice.service';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

    studentList :Student[]=[{Id:1,Name:"Tirth",City:"ahmd"}];
    
    
  constructor(@Inject(LoggerserviceService)private loggerservice) {
   
   
   }
  AddStudent(student:Student){
   
    this.studentList.push(student);
    this.loggerservice.log("student Added");
    console.log(this.studentList);
    
   
    
  }

  DeleteStudent(studnetId:number){
      var del = this.studentList.find(id=>id.Id ==studnetId)
      var delindex =this.studentList.indexOf(del);
      this.studentList.splice(delindex,1);
      this.loggerservice.log("student Deleted");

  }
  getStudent(studenid:number){
    var del = this.studentList.find(id=>id.Id ==studenid);
    this.loggerservice.log("student returned");

    return del;
  }
  list(){
  return this.studentList;
  }
}
