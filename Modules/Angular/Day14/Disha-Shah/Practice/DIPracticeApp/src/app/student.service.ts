import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { IStudent } from './models/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: Array<IStudent> = [
    {id: 1, name: "Reena", address: "ahd"},
    {id: 2, name: "Meena", address: "ahd"},
  ]

  constructor(private logger: LoggerService) {  }

  getList(){
    this.logger.log('Getting students ...');
    this.logger.logList(this.studentList);
    return this.studentList;
  }

  getObservableList(): any{
    const listsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.studentList);
      }, 2000);
    });

    return listsObservable;
  }

  addData(student: IStudent){
    this.studentList.push(student);
  }
}
