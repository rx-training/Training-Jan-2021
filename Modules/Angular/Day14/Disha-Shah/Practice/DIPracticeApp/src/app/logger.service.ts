import { Injectable } from '@angular/core';
import { IStudent } from './models/IStudent';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logs: string[] = []; // capture logs for testing

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  logList(students: Array<IStudent>){
    console.log(students);
  }
}
