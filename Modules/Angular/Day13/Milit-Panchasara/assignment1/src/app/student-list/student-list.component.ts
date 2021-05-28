import { Component, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EmergencyDetail } from '../models/emergencyDetail';
import { ReferenceDetails } from '../models/referenceDetails';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() studentList:any;
  currentEmergencyList: EmergencyDetail[] = [];
  currentReferenceDetail: ReferenceDetails = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}


