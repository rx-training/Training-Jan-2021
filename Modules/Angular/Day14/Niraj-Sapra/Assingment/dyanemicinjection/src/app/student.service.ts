import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Student} from './student';
// import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  list:Array<Student>=[{ID:1,Name:"Niraj",Address:"Bhavnagar"},{ID:2,Name:"Nill",Address:"Ahemdabad"}]
  public studentlist(){
    return this.list;
    // return new Observable(info=>{setTimeout(() => {
    //   info.next;
    // }, 1000);})
  }
  public AddStudent(student:Student){
    this.list.push(student);
  }
}
