import { Injectable } from '@angular/core';
import { IStudent } from 'src/Models/interfaces';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  StudentList : Array<IStudent> = [];
  selectedStudent : IStudent;
  selectedStudentId : number;

  constructor(private logger: LoggerService) {
    
  }

  get getStudentList(){
    return this.StudentList;
  }
  get getselectedStudent(){
    return this.selectedStudent;
  }
  get getselectedStudentId(){
    return this.selectedStudentId;
  }

  clearSelectedStudent(){
    this.selectedStudent = undefined;
  }
  
  clearSelectedStudentId(){
    this.selectedStudentId = undefined;
  }

  deleteStudent(id : number){
    const studentName = this.StudentList[id].Name.FirstName
    this.StudentList.splice(id, 1);
    this.logger.deleteLogger(studentName)
  }

  addStudent(students : IStudent){
    this.StudentList.push(students);
    this.logger.addLogger(students)
  }

  editStudent(st : IStudent, i : number){
    this.selectedStudent = st;
    this.selectedStudentId = i
  }

  updateStudent(st : IStudent, i : number) {
    this.StudentList[i] = st;
    this.logger.updateLogger(st)
  }
}
