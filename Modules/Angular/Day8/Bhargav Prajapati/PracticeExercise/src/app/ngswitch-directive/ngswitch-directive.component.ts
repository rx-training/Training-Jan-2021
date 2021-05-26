import { Component, OnInit } from '@angular/core';
import { studentData } from './Student';

@Component({
  selector: 'app-ngswitch-directive',
  templateUrl: './ngswitch-directive.component.html',
  styleUrls: ['./ngswitch-directive.component.css']
})
export class NgswitchDirectiveComponent implements OnInit {

  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  student:Array<studentData>=
  [
    {StudentId:1,StudentName:"Karan",MobileNumber:"1234567890"},
    {StudentId:2,StudentName:"Bhargav",MobileNumber:"9106832759"},
    {StudentId:3,StudentName:"Devang",MobileNumber:"95584882556"},
    {StudentId:4,StudentName:"Jenil",MobileNumber:"9788555431"}
  ]

}
