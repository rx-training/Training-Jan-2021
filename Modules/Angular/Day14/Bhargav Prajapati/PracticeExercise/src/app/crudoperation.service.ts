import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class CrudoperationService {

  constructor() { }

List:Array<Student>=
[
  {stdID:1,Name:"ABC",Address:"Ahmedabad",ContectNumber:999999999999},
  {stdID:2,Name:"DEF",Address:"MUMBAI",ContectNumber:999999999999}
]
StudentList()
{
  return this.List;
  
}
public AddStudent(student:Student)
{
  this.List.push(student)
}
  DeleteData(obj:Array<any>,Id:any)
  {
    var data=obj.filter(s=>s.stdID==Id)[0];
    var d=obj.indexOf(s=>s.stdID==data.stdID);
    obj.splice(d,1)
  
  }
}
