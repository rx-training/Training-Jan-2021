import { Injectable } from '@angular/core';
import { IStudent } from 'src/Models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  addLogger(student: IStudent){
    console.log("The following student has been added :", student);
  }
  deleteLogger(name: string){
    console.log("The following student has been deleted :", name);
  }
  updateLogger(student: IStudent){
    console.log("The following student has been updated :", student);
  }
}
