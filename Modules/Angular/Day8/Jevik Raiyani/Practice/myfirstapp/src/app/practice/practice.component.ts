import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  studentList:Array<Student> = [];
  Id =0;
  Name="";
  Address ="";
  applyCss = "red";
  constructor() {
    this.studentList =[{ Id : 1,Name :"jevik",Address:"sadasds"},{ Id : 2,Name :"Tirath",Address:"Abd"}]
   }

  ngOnInit(): void {
  }
  remove(index: number){
    this.studentList.splice(index,1);
    console.log(this.studentList);
  }
  Edit(item){
    this.Id = item.Id;
    this.Name =item.Name;
    this.Address = item.Address;
  }

  update(){
    var item = this.studentList.find(p=>p.Id == this.Id);
    console.log(item);
    item.Name =this.Name;
    item.Address=this.Address;
  }

changeClass(event){
  if(event.target.value=="1")
  this.applyCss="red"
  else  
  this.applyCss="green"

}


}
