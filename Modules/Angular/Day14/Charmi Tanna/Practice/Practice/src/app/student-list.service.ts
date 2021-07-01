import { Student } from './Student';
import { Injectable } from '@angular/core';
import { observable, Observable} from'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  constructor() { }
  list : Array<Student>=[{ID :1,Name :"Reema",Address:"Ahmedabad"},
{ID:2,Name:"Meena",Address:"Ahmedabad"}];

public StudentList()
{
  return new Observable(info=>{setTimeout(()=>
  {
    info.next(this.list);
  },1000);})
  // return this.list;
}
public AddStudent(student :Student)
{
  return this.list.push(student);
}
public DeleteStudent(student :Student,id : number)
{
  var DID = this.list.filter(s=> s.ID==id).pop();
}
}
