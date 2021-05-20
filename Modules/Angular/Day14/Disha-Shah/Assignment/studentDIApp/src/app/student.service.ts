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

  removeData(index: number){
    this.studentList.splice(index, 1);
    this.logger.log('remove');
  }

  updateData(updatedStudent: IStudent){
    var oldData = this.studentList.find(x=>x.id==updatedStudent.id);
    oldData.name = updatedStudent.name;
    oldData.address = updatedStudent.address;
    this.logger.log('update');
  }
}
