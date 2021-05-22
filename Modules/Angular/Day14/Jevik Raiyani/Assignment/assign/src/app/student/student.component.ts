import { Component, OnInit } from '@angular/core';
import { Student } from 'src/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService]
})
export class StudentComponent implements OnInit {

   Id = 2;
   Name = "Tirath";
   Address = "Ahmedabad";
   idVal = true;

   studentdata:Student[] = [];

  constructor(private studentservice :StudentService) { }

  ngOnInit(): void {  
    this.studentdata = this.studentservice.list;
  }
  Delete(data){
    this.studentservice.deleteStudent(data.Id);
  }
  ADD(){
    this.studentservice.AddStudent({Id:this.Id,Name:this.Name,Address:this.Address});
    this.idVal =true;
  }
  Edit(data){
    this.Id =data.Id
    this.Name =data.Name;
    this.Address=data.Address
  }
  Update(){
    this.studentservice.editStudent({Id:this.Id,Name:this.Name,Address:this.Address});
  }
  IdEnable(){
    this.idVal = false;
  }

}
