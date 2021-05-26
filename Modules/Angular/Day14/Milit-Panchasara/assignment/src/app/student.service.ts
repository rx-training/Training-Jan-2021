import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { Student } from './models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList:Student[] = [
    {
      id:1,
      name: "milit",
      address:"rajkot",
      standard:10
    }
  ];
  
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

  // public getList(): Student[] {
  //   return this.studentList;
  // }
}
