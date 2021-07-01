import { Component, OnInit } from '@angular/core';
import {studentdata} from '../studentdata';
import {StudentService} from '../student.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {

  title = 'Assingment';
  // studentFrom : FormGroup;
  studentList : studentdata[] = [];
  constructor(private Service : StudentService) { 

  }
//   getStudent(){
//   this.Service.getStudentData().subscribe(
//   (res:studentdata[])=>{
//       console.log(res);
//       console.log("niraj");
//       this.studentList =res;
//       console.log(this.studentList);
//   },
//   (err) => { console.log(err)}
// );

  ngOnInit(): void {
    this.Service.getStudentData().subscribe(
        (res:studentdata[])=>{
            console.log(res);
            console.log("niraj");
            this.studentList =res;
            console.log(this.studentList);
        },
        (err) => { console.log(err);
        }
    
    )
    }
          insert(){
            this.Service.postStudent({lastName:'niraj'}).subscribe();
          }

    
    }
