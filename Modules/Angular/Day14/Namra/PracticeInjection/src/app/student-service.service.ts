import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

  list: Array<Student> = [
    { Id: 1, Name: 'Charmi', Address: 'Ahmedabad' },
    { Id: 2, Name: 'Namra', Address: 'Baroda' }
  ];
  public StudentList()
  {
    return new Observable(info => {
      setTimeout(() => {
        info.next(this.list);
      }, 1000);
    });
  }
  public AddStudent( std : Student)
  {
    this.list.push(std);
  }
}
