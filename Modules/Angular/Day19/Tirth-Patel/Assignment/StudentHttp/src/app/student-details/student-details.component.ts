import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { student } from '../Student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  Students: student[] = [];
  constructor(private servie:StudentServiceService) {console.log(this.Students); }

  ngOnInit(): void {
    this.getStudents();
  
  
  }
  getStudents():void{
    this.servie.getStudents().subscribe(st=>this.Students=st);
   
  }
  delete(id:number){
this.servie.deleteStudent(id).subscribe();
  }

}
