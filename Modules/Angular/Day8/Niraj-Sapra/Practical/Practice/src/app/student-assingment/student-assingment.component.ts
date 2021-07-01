import { Component, OnInit } from '@angular/core';
import { students } from './Interface/Istudnet';
@Component({
  selector: 'app-student-assingment',
  templateUrl: './student-assingment.component.html',
  styleUrls: ['./student-assingment.component.css']
})
export class StudentAssingmentComponent implements OnInit {
  ngOnInit(): void {
  }
  studentLists:Array<students>=[];
  newstudentList:Array<any>=[];
  sid:number=0;
  name:string="";
  sage:number=0;
  saverage:number=0;
  sgrade:string="";
  sactive:string="";
  status:string="";
  constructor() {
    this.studentLists=[{StudID:1,Name:"niraj",StudAge:18,Average:80,grade:"A",Active:"Pass"},{StudID:2,Name:"nill",StudAge:18,Average:30,grade:"B",Active:"Fail"}];
  }
  Edit(id:number){
    console.log(id);
    let student = this.studentLists.findIndex(p=>p.StudID==id);    
    this.sid = this.studentLists[student].StudID;
    this.name = this.studentLists[student].Name;
    this.sage = this.studentLists[student].StudAge;
    this.saverage = this.studentLists[student].Average;
    this.sgrade = this.studentLists[student].grade;
    this.sactive = this.studentLists[student].Active;
   }
   Remove(id:number){
   console.log(id);
    this.studentLists.splice(id,1);
      }
}
