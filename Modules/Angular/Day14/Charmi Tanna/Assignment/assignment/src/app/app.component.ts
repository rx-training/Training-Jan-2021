import { Component } from '@angular/core';
import {StudentList} from './StudentList';
import {StudentServiceService} from './student-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [StudentServiceService]
})
export class AppComponent {
  title = 'assignment';
  editData: any =  {StudentId: 0, StudentName: "", StudentDateOfBirth: new Date(), StudentFirstLanguage :"",StudentPlaceofBirth:"", Country: "", State: "", PinNumber: 0,  City: "",MotherName: "",  MotherEmail: "",MotherDesignation: "", MotherPhoneNumber: 0,MotherEducationQualification: "",MotherProfession: "",FathertName: "",FatherDesignation: "", FatherProfession: "",FatherEducationQualification: "",FatherEmail: "",FatherPhoneNumber: 0}; ​​
  index: number=0;
  listData = [];  ​

  IsSubmit: boolean=false;
  AddData(data: any){  ​
    this.listData=data.service.GetStudentInfo();  ​
    this.IsSubmit = data.IsSubmitted;
  } 
  EditData(data: any) {
    this.editData = data.studentObj;
     this.index = data.id;
  }
}

