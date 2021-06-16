import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { EmergencyInput } from './models/API/EmergencyInput';
import { StudentInput } from './models/API/StudentInput';
import { EmergencyDetail } from './models/emergencyDetail';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList:Student[] = [];

  baseURL:string = "https://localhost:44322/api";

  constructor(@Inject(LoggerService)private logger: LoggerService, private httpClient: HttpClient) { }

  addStudent(student:Student) {

    let emergencyDetailList:EmergencyInput[] = [];

    let dob:Date = new Date(student.dob);

    student.emergencyDetail.forEach(element => {
      let detail:EmergencyInput = {
        relation: element.relation,
        contactNumber: element.number.toString()
      }
      emergencyDetailList.push(detail);
    });

    let input = {
      firstName: student.studentName.firstName,
      middleName: student.studentName.middleName,
      lastName: student.studentName.lastName,
      dateOfBirth: dob.getFullYear() + "-" + (dob.getMonth()+1) + "-" + dob.getDate(),
      placeOfBirth: student.placeOfBirth,
      firstLanguage: student.firstLanguage,
      streetAddress: student.address.street,
      city: student.address.city,
      state: student.address.state,
      country: student.address.country,
      pin: student.address.pin,
      contactNumber: "",
      parents:[
        {
          firstName:student.father.name.firstName,
          middleName:student.father.name.middleName,
          lastName:student.father.name.lastName,
          email: student.father.email,
          education: student.father.education,
          designation: student.father.designation,
          profession: student.father.profession,
          contactNumber: student.father.phone,
          relation: "father"
        },
        {
          firstName:student.mother.name.firstName,
          middleName:student.mother.name.middleName,
          lastName:student.mother.name.lastName,
          email: student.mother.email,
          education: student.mother.education,
          designation: student.mother.designation,
          profession: student.mother.profession,
          contactNumber: student.mother.phone,
          relation: "mother"
        }
      ],
      referenceDetails: {
        referenceThrough: student.referenceDetail.referenceThrough,
        street: student.referenceDetail.address.street,
        city: student.referenceDetail.address.city,
        state: student.referenceDetail.address.state,
        country: student.referenceDetail.address.country,
        pin: student.referenceDetail.address.pin.toString(),
        contactNumber: student.referenceDetail.address.contact.toString(),
      },
      emergencyDetails:emergencyDetailList
    }
    console.log(input);
    this.logger.logOperation("Insert", this.studentList);
    student.dob = new Date(student.dob);
    this.studentList.push(student);
    return this.httpClient.post<any>(this.baseURL + "/students",input).subscribe(x => console.log(x));
  }

  deleteStudent(index:number) {
    this.logger.logOperation("Delete", this.studentList);
    return this.httpClient.delete<any>(this.baseURL + "/students/" + this.studentList[index].Id);
  }

  updateStudent(index:number, student:Student) {
    let id = this.studentList[index].Id;
    student.father.id = this.studentList[index].father.id;
    student.mother.id = this.studentList[index].mother.id;
    student.referenceDetail.id = this.studentList[index].referenceDetail.id;
    student.Id = id;
    
    student.dob = new Date(student.dob);
    this.studentList[index] = student;

    let emergencyDetailList:EmergencyInput[] = [];
    let dob:Date = new Date(student.dob);

    student.emergencyDetail.forEach(element => {
      let detail:EmergencyInput = {
        studentId: student.Id,
        relation: element.relation,
        contactNumber: element.number.toString()
      }
      emergencyDetailList.push(detail);
    });

    let input = {
      id: student.Id,
      firstName: student.studentName.firstName,
      middleName: student.studentName.middleName,
      lastName: student.studentName.lastName,
      dateOfBirth: dob.getFullYear() + "-" + (dob.getMonth()+1) + "-" + dob.getDate(),
      placeOfBirth: student.placeOfBirth,
      firstLanguage: student.firstLanguage,
      streetAddress: student.address.street,
      city: student.address.city,
      state: student.address.state,
      country: student.address.country,
      pin: student.address.pin,
      contactNumber: "",
      parents:[
        {
          id:student.father.id,
          studentId:student.Id,
          firstName:student.father.name.firstName,
          middleName:student.father.name.middleName,
          lastName:student.father.name.lastName,
          email: student.father.email,
          education: student.father.education,
          designation: student.father.designation,
          profession: student.father.profession,
          contactNumber: student.father.phone,
          relation: "father"
        },
        {
          id:student.mother.id,
          studentId:student.Id,
          firstName:student.mother.name.firstName,
          middleName:student.mother.name.middleName,
          lastName:student.mother.name.lastName,
          email: student.mother.email,
          education: student.mother.education,
          designation: student.mother.designation,
          profession: student.mother.profession,
          contactNumber: student.mother.phone,
          relation: "mother"
        }
      ],
      referenceDetails: {
        id:student.referenceDetail.id,
        studentId:student.Id,
        referenceThrough: student.referenceDetail.referenceThrough,
        street: student.referenceDetail.address.street,
        city: student.referenceDetail.address.city,
        state: student.referenceDetail.address.state,
        country: student.referenceDetail.address.country,
        pin: student.referenceDetail.address.pin.toString(),
        contactNumber: student.referenceDetail.address.contact.toString(),
      },
      emergencyDetails:emergencyDetailList
    }

    this.logger.logOperation("Update", this.studentList);

    return this.httpClient.put<any>(this.baseURL + "/students/" + id,input).subscribe(x => console.log(x));
  }

  getAllStudents() {
    return this.httpClient.get<StudentInput[]>(this.baseURL + "/students");
  }

  setData(x:StudentInput[]) {
    this.studentList = [];
    // .subscribe(x => {
      x.forEach(input => {
        let student:Student = {
          studentName:{
            firstName:"",
            lastName:"",
            middleName:""
          },
          dob:null,
          placeOfBirth:"",
          firstLanguage:"",
          address:{
            state:"",
            street:"",
            city:"",
            country:"",
            pin:""
          },
          father: {
            name: {
              firstName:"",
              middleName:"",
              lastName:""
            },
            email:"",
            education:"",
            profession:"",     
            designation:"",
            phone:""
          },
          mother:{
            name: {
              firstName:"",
              middleName:"",
              lastName:""
            },
            email:"",
            education:"",
            profession:"",     
            designation:"",
            phone:""
          },
          referenceDetail:{
            referenceThrough:"",
            address:{
              state:"",
              street:"",
              city:"",
              country:"",
              pin:""
            }
          },
          emergencyDetail:[]
        };

        student.Id = input.id;
        student.studentName.firstName = input.firstName;
        student.studentName.middleName = input.middleName;
        student.studentName.lastName = input.lastName;
        student.dob = new Date(input.dateOfBirth);
        student.placeOfBirth = input.placeOfBirth;
        student.firstLanguage = input.firstLanguage;
        student.address.street = input.streetAddress;
        student.address.city = input.city;
        student.address.state = input.state;
        student.address.country = input.country;
        student.address.pin = input.pin;
        student.address.contact = parseInt(input.contactNumber);

        student.father.id = input.parents.find(x => x.relation == "father").id;
        student.father.designation = input.parents.find(x => x.relation == "father").designation;
        student.father.education = input.parents.find(x => x.relation == "father").education;
        student.father.email = input.parents.find(x => x.relation == "father").email;
        student.father.name.firstName = input.parents.find(x => x.relation == "father").firstName;
        student.father.name.middleName = input.parents.find(x => x.relation == "father").middleName;
        student.father.name.lastName = input.parents.find(x => x.relation == "father").lastName;
        student.father.phone = input.parents.find(x => x.relation == "father").contactNumber;
        student.father.profession = input.parents.find(x => x.relation == "father").profession;

        student.mother.id = input.parents.find(x => x.relation == "mother").id;
        student.mother.designation = input.parents.find(x => x.relation == "mother").designation;
        student.mother.education = input.parents.find(x => x.relation == "mother").education;
        student.mother.email = input.parents.find(x => x.relation == "mother").email;
        student.mother.name.firstName = input.parents.find(x => x.relation == "mother").firstName;
        student.mother.name.middleName = input.parents.find(x => x.relation == "mother").middleName;
        student.mother.name.lastName = input.parents.find(x => x.relation == "mother").lastName;
        student.mother.phone = input.parents.find(x => x.relation == "mother").contactNumber;
        student.mother.profession = input.parents.find(x => x.relation == "mother").profession;

        student.referenceDetail.id = input.referenceDetails.id;
        student.referenceDetail.referenceThrough = input.referenceDetails.referenceThrough;
        student.referenceDetail.address.street = input.referenceDetails.street;
        student.referenceDetail.address.city = input.referenceDetails.city;
        student.referenceDetail.address.state = input.referenceDetails.state;
        student.referenceDetail.address.country = input.referenceDetails.country;
        student.referenceDetail.address.pin = input.referenceDetails.pin;
        student.referenceDetail.address.contact = parseInt(input.referenceDetails.contactNumber);

        let emergencyDetailList:EmergencyDetail[] = [];

        input.emergencyDetails.forEach(detail => {
          let element:EmergencyDetail = {relation:"",number:0};
          element.number = parseInt(detail.contactNumber);
          element.relation = detail.relation;
          element.id = detail.id;
          emergencyDetailList.push(element);
        });

        student.emergencyDetail = emergencyDetailList;

        this.studentList.push(student);
      });
    // });
  }
}


