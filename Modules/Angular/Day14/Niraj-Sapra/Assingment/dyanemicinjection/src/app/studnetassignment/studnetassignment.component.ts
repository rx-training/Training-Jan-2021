import { Component, OnInit } from '@angular/core';
import { Studentassingments } from '../studentassingments';
import { StudentassingmentService } from '../studentassingment.service';

@Component({
  selector: 'app-studnetassignment',
  templateUrl: './studnetassignment.component.html',
  providers:[StudentassingmentService],
  styleUrls: ['./studnetassignment.component.css']
})
export class StudnetassignmentComponent implements OnInit {
  students:Studentassingments={ID:null,Name:'',Address:""};
  constructor(private StudentassingmentService:StudentassingmentService) { 
    this.list=StudentassingmentService.studentassinglist();
  }
  list:Array<Studentassingments>=[];
  ngOnInit(): void {
  }
  submitdata(){
    alert("Add new Data");
    this.StudentassingmentService.AddStudent(this.students);
  }
  delete(id:number){
    alert("Delete new Data");
    this.StudentassingmentService.RemoveStudent(id);
  }
  update(id:number){
    alert("Update new Data"); 
   var ob =this.list.find(x=>x.ID==id);
    this.students.ID=ob.ID;
    this.students.Name=ob.Name;
    this.students.Address=ob.Address;
    console.log(ob.ID);    
  }
}
