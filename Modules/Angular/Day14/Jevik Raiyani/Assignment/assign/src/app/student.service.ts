import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/Student';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private logservice : LogService ) { }

  list: Array<Student> = [{Id:1,Name:"jevik",Address:"Rajkot"},{Id:2,Name:"Pratik",Address:"Surat"}];

  public  GetStudentList(){
    this.logservice.log("GetStudentList Function called");
    for (const data of this.list) {
      console.log(data);
    }
  }
  public GetByIdStudent(id){
    this.logservice.log("GetById Function called where id "+id);
    this.list.filter(x=>x.Id == id);     
  }

  public AddStudent(student:Student){
    this.logservice.log("AddStudent Function called,Where Student Id is "+student.Id );
      this.list.push(student) 
  }

  public deleteStudent(id:number){
    this.logservice.log("deleteStudent Function called,Where Student Id is "+id );
    this.list.splice( this.list.indexOf(this.list.filter(x=>x.Id == id)[0]) ,1);
  }

  public editStudent(student:Student){
    this.logservice.log("editStudent Function called,Where Student Id is "+student.Id );
    this.list.filter(x=>x.Id ==student.Id )[0].Name =student.Name
    this.list.filter(x=>x.Id==student.Id)[0].Address =student.Address
  }





}
