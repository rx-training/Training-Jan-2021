import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EmergencyDetail } from '../models/emergencyDetail';
import { ReferenceDetails } from '../models/referenceDetails';
import { Student } from '../models/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges {

  studentList:Student[]=[];
  @Input() studentService:StudentService;
  @Output() formEmitter: EventEmitter<any> = new EventEmitter();

  currentEmergencyList: EmergencyDetail[] = [];
  currentReferenceDetail: ReferenceDetails = null;

  listObv:Observable<Student[]>;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.index != null) {
      this.formEmitter.emit(changes.index.currentValue);
    }
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(data => {
      this.studentService.setData(data);
      this.studentList = this.studentService.studentList;
      console.log(this.studentList);
      
    });

    // this.listObv.subscribe(x => {console.log(x)});
  }

  deleteStudent(index:number) {
    this.studentService.deleteStudent(index).subscribe();
    this.studentService.studentList.splice(index, 1);
    index = -1;
    this.formEmitter.emit(index);
  }

  setParams(index) {
    this.formEmitter.emit(index);
  }

}


