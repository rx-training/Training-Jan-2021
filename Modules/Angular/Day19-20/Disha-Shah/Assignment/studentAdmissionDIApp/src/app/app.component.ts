import { Component, OnChanges, OnInit } from '@angular/core';
import { IStudent } from './models/IStudent';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentAdmissionDIApp';

  listData = [];  ​

  editData: IStudent = {studentId: 0, address: "", dob: new Date(), emergencyContacts: [], fatherDesignation: "", fatherEmail: "", fatherName: "", fatherPhone: "", fatherProfession: "", fatherQualification: "", language: "", motherDesignation: "", motherEmail: "", motherName: "", motherPhone: "", motherProfession: "", motherQualification: "", name: "", placeOfBirth: "", referenceDetails: []}; ​​

  index: number;
 
  AddData(result: any[]){  ​
    this.listData = result;
    console.log(this.listData);
  } 

  EditData(reply){
     this.editData = reply.studentObj;
     this.index = reply.id;
  }

}
