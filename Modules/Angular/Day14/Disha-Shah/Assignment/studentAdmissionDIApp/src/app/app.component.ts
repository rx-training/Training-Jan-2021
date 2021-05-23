import { Component } from '@angular/core';
import { IStudent } from './models/IStudent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentAdmissionDIApp';

  listData = [];  ​

  IsSubmit: boolean;

  editData: IStudent = {id: 0, address: "", dob: new Date(), emergencyContact: [], fatherDesignation: "", fatherEmail: "", fatherName: "", fatherPhone: "", fatherProfession: "", fatherQualification: "", language: "", motherDesignation: "", motherEmail: "", motherName: "", motherPhone: "", motherProfession: "", motherQualification: "", name: "", placeOfBirth: "", referenceDetails: []}; ​​

  index: number;
  
  AddData(reply){  ​
    this.listData=reply.service.getList();  ​
    this.IsSubmit = reply.IsSubmitted;
  } 

  EditData(reply){
     this.editData = reply.studentObj;
     this.index = reply.id;
  }
}
