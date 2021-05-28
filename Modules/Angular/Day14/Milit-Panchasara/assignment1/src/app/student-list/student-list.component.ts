import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
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

  @Input() studentService:StudentService;
  @Output() formEmitter: EventEmitter<any> = new EventEmitter();

  currentEmergencyList: EmergencyDetail[] = [];
  currentReferenceDetail: ReferenceDetails = null;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.index != null) {
      this.formEmitter.emit(changes.index.currentValue);
    }
  }

  ngOnInit(): void {
  }

  deleteStudent(index:number) {
    this.studentService.deleteStudent(index);
    index = -1;
    this.formEmitter.emit(index);
  }

  setParams(index) {
    this.formEmitter.emit(index);
  }

}


