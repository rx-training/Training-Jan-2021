import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IStudent } from '../models/IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges {

  @Input() listValue = []; 

  @Output() editData = new EventEmitter(); 

  studentList: Array<IStudent>=[];

  remove(id: number): void {
    this.studentList = this.studentList.filter(h => h.studentId !== id);
    this.studentService.deleteStudent(id).subscribe();
  }

  edit(index: number, student: IStudent){
    this.editData.emit({id: index, studentObj: student}); 
    console.log("edit data displayed successfully!");
  }

  getStudents(): void{
    this.studentService.getStudents()
    .subscribe(students => {this.studentList = students, console.log(this.studentList)});

  }

  constructor(private studentService: StudentService) { 
  }

  ngOnChanges(): void{
    this.studentList = this.listValue;
    console.log('changes' + this.listValue);
  }

  ngOnInit(): void {
    this.getStudents();
    console.log('init' + this.listValue);
  }

}
