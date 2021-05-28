import { Component, OnInit } from '@angular/core';
import { Student } from './studentinfo';

@Component({
  selector: 'app-class-directive',
  templateUrl: './class-directive.component.html',
  styleUrls: ['./class-directive.component.css']
})
export class ClassDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  info:Student[]
  =
  [
    {StudentId:1,StudentName:"Karan",MobileNumber:"1234567890"},
    {StudentId:2,StudentName:"Bhargav",MobileNumber:"9106832759"},
    {StudentId:3,StudentName:"Devang",MobileNumber:"95584882556"},
    {StudentId:4,StudentName:"Jenil",MobileNumber:"9788555431"}
    
  ]


  applycss="red"
  ChangeColor(event)
  {

    if(event.target.value==1)
    {
    this.applycss="red"
    }
    else
    {
      this.applycss="yellow"
    }

  }
}

