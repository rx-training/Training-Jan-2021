import { Injectable } from '@angular/core';
import { Student } from './models/Student';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }


  logOperation(operation:string, updatedList:Student[]) {
    console.log({operation:operation,updateList:updatedList});
  }
}
