import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { StudentList } from '../StudentList';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentServiceService]
})
export class StudentComponent implements OnInit {

  List: StudentList[] = [];
  studentList: StudentList =
    {
      StudentId: 0,
      StudentName: "",
      StudentDateOfBirth: "",
      StudentFirstLanguage: "",
      StudentPlaceofBirth: "",
      Country: "",
      State: "",
      PinNumber: 0,
      City: "",
      MotherName: "",
      MotherEmail: "",
      MotherDesignation: "",
      MotherPhoneNumber: 0,
      MotherEducationQualification: "",
      MotherProfession: "",
      FathertName: "",
      FatherDesignation: "",
      FatherProfession: "",
      FatherEducationQualification: "",
      FatherEmail: "",
      FatherPhoneNumber: 0,
    }

  constructor(private service: StudentServiceService) {
    //this.List = this.service.GetStudentInfo()
  }


  reset() {
    this.studentList =
    {
      StudentId: 0,
      StudentName: "",
      StudentDateOfBirth: "",
      StudentFirstLanguage: "",
      StudentPlaceofBirth: "",
      Country: "",
      State: "",
      PinNumber: 0,
      City: "",
      MotherName: "",
      MotherEmail: "",
      MotherDesignation: "",
      MotherPhoneNumber: 0,
      MotherEducationQualification: "",
      MotherProfession: "",
      FathertName: "",
      FatherDesignation: "",
      FatherProfession: "",
      FatherEducationQualification: "",
      FatherEmail: "",
      FatherPhoneNumber: 0,
    }
  }

  @Output() SendData = new EventEmitter();
  ngOnInit()
  {
      this.List=this.service.GetStudentInfo();
  }
  // ngOnChanges()
  // {
    
  // }
  submidata() {

      this.service.StoreData(this.studentList);
      this.SendData.emit(this.List);
        this.reset();
  }



}
