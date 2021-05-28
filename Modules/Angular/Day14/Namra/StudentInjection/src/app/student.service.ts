import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  Students : Array<Student> = [
    { Id: 1, Name: 'Charmi', Address: 'Ahmedabad' },
    { Id: 2, Name: 'Namra', Address: 'Baroda' }
  ];
  public StudentList()
  {
    return this.Students;
  }
  public AddStudent(std : Student)
  {
    this.Students.push(std);
  }
  public DeleteStudent(idx : number)
  {
    this.Students.splice(idx,1);
  }
  public UpdateStudent(id : number, std : Student)
  {
    this.Students[id]= std;
  }
}
