import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService :StudentService) { }

  StudentArr : Student[] = [];

  StudentAdd : Student = {studentFirstName : '', studentMiddleName :'', studentLastName : '', contact : '', address : '', marks : 0};
  ngOnInit(): void {
    this.StudentData();
  }
  ResetAdd(){
    this.StudentAdd.studentId = null;
    this.StudentAdd.studentFirstName ='';
    this.StudentAdd.studentLastName ='';
    this.StudentAdd.studentMiddleName ='';
    this.StudentAdd.contact ='';
    this.StudentAdd.address ='';
    this.StudentAdd.marks =0;
  }
  Add()
  {
    this.studentService.AddStudent(this.StudentAdd).subscribe(data=> {
      alert(data);
    });
  }


  Delete(Id : number)
  {
    this.studentService.DeleteStudent(Id).subscribe(data =>{
      alert(data);
    });
  }
  @ViewChild('edit') edit: ElementRef;
  Editflag = false;
  Edit(ID : number)
  {
    this.Editflag = true;
    this.studentService.SearchById(ID).subscribe(data =>
      {
        console.log(data);
        this.StudentAdd.studentFirstName = data.studentFirstName;
        this.StudentAdd.studentId = data.studentId;
        this.StudentAdd.studentMiddleName = data.studentMiddleName;
        this.StudentAdd.studentLastName = data.studentLastName;
        this.StudentAdd.contact = data.contact;
        this.StudentAdd.address = data.address;
        this.StudentAdd.marks = data.marks;
      });
  }
  Update()
  {
    this.studentService.UpdateStudent(this.StudentAdd).subscribe(data=>{
      console.error(data);
    });
    this.ResetAdd();
    this.Editflag = false;
  }
  CancelUpdate()
  {
    this.Editflag = false;
    this.ResetAdd();
  }
  StudentData() {
    setTimeout(() => {
      this.studentService.getStudents().subscribe(
        data =>{
          this.StudentArr = data;
          console.log(data);

        }
      );
      this.StudentData();
    }, 500);
  }
}
