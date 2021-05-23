import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { IStudent } from './models/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: Array<IStudent> = [];

  constructor(private logger: LoggerService) {  }

  getList(){
    this.logger.log('display');
    return this.studentList;
  }

  addData(student: IStudent){
    this.studentList.push(student);
    this.logger.log('add');
  }

  removeData(id: number){
    for(var studentObj in this.studentList){
      if(this.studentList[studentObj].id == id){
        this.studentList.splice(parseInt(studentObj), 1);
      }
    }
    this.logger.log('remove');
  }

  updateData(updatedStudent: IStudent){
    var oldData = this.studentList.find(x=>x.id==updatedStudent.id);
    
    oldData.address = updatedStudent.address;
    oldData.dob = updatedStudent.dob;
    oldData.emergencyContact = updatedStudent.emergencyContact;
    oldData.fatherDesignation = updatedStudent.fatherDesignation;
    oldData.fatherEmail = updatedStudent.fatherEmail;
    oldData.fatherName = updatedStudent.fatherName;
    oldData.fatherPhone = updatedStudent.fatherPhone;
    oldData.fatherProfession = updatedStudent.fatherProfession;
    oldData.fatherQualification=updatedStudent.fatherQualification;
    oldData.language= updatedStudent.language;
    oldData.motherDesignation=updatedStudent.motherDesignation;
    oldData.motherEmail=updatedStudent.motherEmail;
    oldData.motherName=updatedStudent.motherName;
    oldData.motherPhone=updatedStudent.motherPhone;
    oldData.motherProfession=updatedStudent.motherProfession;
    oldData.motherQualification=updatedStudent.motherQualification;
    oldData.name = updatedStudent.name;
    oldData.placeOfBirth=updatedStudent.placeOfBirth;
    oldData.referenceDetails=updatedStudent.referenceDetails;

    this.logger.log('update');
  }
}
