import { Injectable } from '@angular/core';
import { log } from './log';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  Logger: Array<log> = [
    { Id: 1, Status: true, StudentData: { Id: 1, Name: 'Namra', Address: 'Baroda' }, Operation: 'Insert', Time: new Date(2021, 5, 25) },
    { Id: 2, Status: true, StudentData: { Id: 2, Name: 'Charmi', Address: 'Ahmedabad' }, Operation: 'Insert', Time: new Date(2021, 5, 26) }
  ];

  GetLogs()
  {
    return this.Logger;
  }
  AddLog( status : boolean, student : Student, operation : string)
  {
    let id = this.Logger.length + 1;
    this.Logger.push({Id : id, Status : status, StudentData : student, Operation : operation, Time : new Date()});
  }
}
