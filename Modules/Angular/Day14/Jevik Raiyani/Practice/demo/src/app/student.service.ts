import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  list:Array<Student>= [{Id:1,Name:"jevik",Age:21},{Id:2,Name:"Pratik",Age:22}];

  public studentList(){
    return new Observable(info=>{setTimeout(() => {
      info.next(this.list);      
    }, 1000);})
  }

  public AddStudent(student:Student){
    this.list.push(student);
  }

}
