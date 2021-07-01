import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  name:string="";
  ids:number=0;
  stuAddress:string="";
  newaddress="";
  newname="";
  submit = "submit";
  themes ="";
  ngOnInit(): void {
  }
  studentList:Array<Student>=[];
  newstudentList:Array<any>=[];
  constructor() {
    this.studentList=[{Id:1,Name:"Rohan",Address:"bhavnager"},{Id:2,Name:"Mohan",Address:"botad"}];
  }
   Edit(id:number){
    let student = this.studentList.findIndex(p=>p.Id==id);    
    this.ids = this.studentList[student].Id;
    this.name = this.studentList[student].Name;
    this.stuAddress = this.studentList[student].Address;
   }
   Remove(id:number){
   console.log(id);
    this.studentList.splice(id,1);
      }
      
   Update(){
        let student = this.studentList.findIndex(p=>p.Id==this.ids);
        this.studentList[student].Name = this.name;
        this.studentList[student].Address= this.stuAddress;
        this.name = "";
    this.stuAddress = "";
    }

    changeclass(event:any){
      console.log(event.target.value);
      if(event.target.value == 1){
        this.themes = "red";
      }else {
        this.themes = "green";
      }
    }
  Add(){
    
    this.newstudentList=[{Id:this.studentList.length+1,Name:this.newname,Address:this.newaddress},{Id:2,Name:"Mohan",Address:"botad"}];
    // // let student = this.studentList.findIndex(p=>p.Id==this.ids);
    //     this.studentList[student].Name = this.name;
    //     this.studentList[student].Address= this.stuAddress;
    //     this.name = "";
    // this.stuAddress = "";
  } 
}
