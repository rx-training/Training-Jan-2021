import { Component, OnInit } from '@angular/core';
import { IStudent } from '../IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  Id : number;
  students : IStudent[];

  constructor(public service : StudentService) { }

  ngOnInit(): void {
  }

  deleteId(){
    console.log(this.Id);
    this.service.deleteStudent(this.Id).subscribe();
  }

}
