import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList:Student[] = [];

  constructor(@Inject(LoggerService)private logger: LoggerService) { }

  addStudent(student:Student) {
    this.studentList.push(student);
    this.logger.logOperation("Insert", this.studentList);
    return this.studentList;
  }

  deleteStudent(index:number) {
    this.studentList.splice(index, 1);
    this.logger.logOperation("Delete", this.studentList);
    return this.studentList;
  }

  updateStudent(index:number, student:Student) {
    this.studentList[index] = student;
    this.logger.logOperation("Update", this.studentList);
    return this.studentList;
  }

  getStudent(index:number) {
    return this.studentList[index];
  }

}


