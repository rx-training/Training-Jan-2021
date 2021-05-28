import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStudent } from '../models/IStudent';
import { StudentService } from '../student.service';
import { dobValidator } from '../Validators/dobValidator';
import { duplicateContact } from '../Validators/duplicateContact';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {

  @Input() editValue: IStudent =  {studentId: 0, address: "", dob: new Date(), emergencyContacts: [], fatherDesignation: "", fatherEmail: "", fatherName: "", fatherPhone: "", fatherProfession: "", fatherQualification: "", language: "", motherDesignation: "", motherEmail: "", motherName: "", motherPhone: "", motherProfession: "", motherQualification: "", name: "", placeOfBirth: "", referenceDetails: []}; ​​

  @Input() id: number;

  @Output() userData = new EventEmitter();

  studFName = this.editValue.name.split(' ')[0];
  studMName = this.editValue.name.split(' ')[1];
  studLName = this.editValue.name.split(' ')[2];

  index = -1;

  submitted = false;

  studentList: Array<IStudent>=[];

  studentForm;

  StudFName: AbstractControl;
  StudMName: AbstractControl;
  StudLName: AbstractControl;
  AddressCity: AbstractControl;
  AddressState: AbstractControl;
  AddressCountry: AbstractControl;
  AddressPin: AbstractControl;
  FatherFName: AbstractControl;
  FatherMName: AbstractControl;
  FatherLName: AbstractControl;
  FatherEmail: AbstractControl;
  FatherQualification: AbstractControl;
  FatherProfession: AbstractControl;
  FatherDesignation: AbstractControl;
  FatherPhone: AbstractControl;
  MotherFName: AbstractControl;
  MotherMName: AbstractControl;
  MotherLName: AbstractControl;
  MotherEmail: AbstractControl;
  MotherQualification: AbstractControl;
  MotherProfession: AbstractControl;
  MotherDesignation: AbstractControl;
  MotherPhone: AbstractControl;

  // getter for emergency contacts as array
  get getEmergencyContacts(){
    return this.studentForm.get('emergencyContacts') as FormArray;
  }

  // add new emergency contact form group
  addEmergencyContacts(){
    this.getEmergencyContacts.push(this.fb.group({
      emergencyId: [0],
      student: [null],
      studentId: [0],
      relation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      contact: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}'), duplicateContact('contact')])]
    }));
  }
  
  // getter for reference details as array
  get getReferenceDetails(){
    return this.studentForm.get('referenceDetails') as FormArray;
  }

  // add new reference details form group
  addReferenceDetails(){
    this.getReferenceDetails.push(this.fb.group({
      referenceId: [0],
      student: [null],
      studentId: [0],
      referenceThrough: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z. ]*')])],
      address: ['', Validators.required],
      contact:['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}'), duplicateContact('contact')])]
    }));

  }

  // getter for student full name as form group
  get getStudentName(){
    return this.studentForm.get('name') as FormGroup;
  }

  // getter for student address as form group
  get getStudentAddress(){
    return this.studentForm.get('address') as FormGroup;
  }

  // getter for father's info as form group
  get getFatherInfo(){
    return this.studentForm.get('father') as FormGroup;
  }

  // getter for father's full name as form group
  get getFatherName(){
    return this.getFatherInfo.controls['fullName'] as FormGroup;
  }

  // getter for mother's info as form group
  get getMotherInfo(){
    return this.studentForm.get('mother') as FormGroup;
  }

  // getter for mather's full name as form group
  get getMotherName(){
    return this.getMotherInfo.controls['fullName'] as FormGroup;
  }

  // get emergency contact's group to access .touched and .invalid properties on it's controls
  getEmergencyContactsGroup(i: number){
    return <FormGroup>(<FormArray>this.studentForm.get('emergencyContacts')).get(i.toString());
  }

  // get reference details group to access .touched and .invalid properties on it's controls
  getReferenceDetailsGroup(i: number){
    return <FormGroup>(<FormArray>this.studentForm.get('referenceDetails')).get(i.toString());
  }
  
  // to update validity of it's ancestors
  updateValidation(arrayName: any,field: string | (string | number)[])
  {
    (this.studentForm.get(arrayName) as FormArray).controls.forEach(
      group=>group?.get(field)?.updateValueAndValidity()
    )
  }

  // create controls for existing record's form array
  setExistingEergencyContacts(emergencyContacts: any[]): FormArray{
    const formArray = new FormArray([]);
    emergencyContacts.forEach(s => {
      formArray.push(this.fb.group({
        emergencyId: [s.emergencyId],
        student: [s.student],
        studentId: [s.studentId],
        relation: [s.relation, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        contact:  [s.contact, Validators.compose([Validators.required, Validators.pattern('[0-9]{10}'), duplicateContact('contact')])]
      }));
    });

    return formArray;
  }

  // create controls for existing record's form array
  setExistingReferenceDetails(referenceDetails: any[]): FormArray{
    const formArray = new FormArray([]);
    referenceDetails.forEach(s => {
      formArray.push(this.fb.group({
        referenceId: [s.referenceId],
        student: [s.student],
        studentId: [s.studentId],
        referenceThrough: [s.referenceThrough, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z. ]*')])],
        address: [s.address, Validators.required],
        contact: [s.contact, Validators.compose([Validators.required, Validators.pattern('[0-9]{10}'), duplicateContact('contact')])]
      }));
    });

    return formArray;
  }

  getStudents(): void{
    this.studentService.getStudents()
    .subscribe(students => {this.studentList = students, console.log(this.studentList)});

  }

  addStudent(student: IStudent): void {
    this.studentService.addStudent(student)
      .subscribe(newStudent => {
        //newStudent.studentId = this.studentList[this.studentList.length-2].studentId + 1;
        this.studentList.push(newStudent);
      });
  }

  updateStudent(student: IStudent): void{
    this.studentService.updateStudent(student)
        .subscribe();
  }

  // submit form
  profileSubmit(){

    this.submitted = true;

    console.log(this.studentList.length);
    console.log(this.studentList[this.studentList.length]);
    console.log(this.studentList[this.studentList.length-1].studentId);
    console.log(this.studentList[this.studentList.length-1].studentId + 1);

    var newStudent: IStudent = {
      name: this.studentForm.value.name.first.concat(' ', this.studentForm.value.name.middle, ' ', this.studentForm.value.name.last),
      dob: this.studentForm.value.dob,
      placeOfBirth: this.studentForm.value.birthPlace,
      language: this.studentForm.value.language,
      address: this.studentForm.value.address.city.concat(',', this.studentForm.value.address.state, ',', this.studentForm.value.address.country, '-', this.studentForm.value.address.pin),
      fatherName: this.studentForm.value.father.fullName.first.concat(' ', this.studentForm.value.father.fullName.middle, ' ', this.studentForm.value.father.fullName.last),
      fatherEmail: this.studentForm.value.father.email,
      fatherQualification: this.studentForm.value.father.qualification,
      fatherProfession: this.studentForm.value.father.profession,
      fatherDesignation: this.studentForm.value.father.designation,
      fatherPhone: this.studentForm.value.father.phone,
      motherName: this.studentForm.value.mother.fullName.first.concat(' ', this.studentForm.value.mother.fullName.middle, ' ', this.studentForm.value.mother.fullName.last),
      motherEmail: this.studentForm.value.mother.email,
      motherQualification: this.studentForm.value.mother.qualification,
      motherProfession: this.studentForm.value.mother.profession,
      motherDesignation: this.studentForm.value.mother.designation,
      motherPhone: this.studentForm.value.mother.phone,
      emergencyContacts: this.studentForm.value.emergencyContacts,
      referenceDetails: this.studentForm.value.referenceDetails
    }

    console.log(newStudent.emergencyContacts);
    console.log(newStudent.referenceDetails);
    console.log(this.studentForm);

    var x: number = this.id != null ? this.id : this.studentList[this.studentList.length-1].studentId + 1;

    if(this.index != x){ 
      
      for (const key in newStudent.emergencyContacts) {
        newStudent.emergencyContacts[key].emergencyId = 0;
        newStudent.emergencyContacts[key].studentId = 0;
      }

      for (const key in this.studentForm.value.referenceDetails) {
        newStudent.referenceDetails[key].referenceId = 0;
        newStudent.referenceDetails[key].studentId = 0;
      }
      
      this.addStudent(newStudent);
      console.log("data added successfully!");
    }

    else{
      
      for (const key in newStudent.emergencyContacts) {
        newStudent.emergencyContacts[key].emergencyId = 0;
        newStudent.emergencyContacts[key].studentId = 0;
      }

      for (const key in this.studentForm.value.referenceDetails) {
        newStudent.referenceDetails[key].referenceId = 0;
        newStudent.referenceDetails[key].studentId = 0;
      }

      newStudent.studentId = x;
      this.updateStudent(newStudent);
      console.log(newStudent);
      console.log("data updated successfully");

      // id is assigned to null after completing update operation, so that add operation can be easily performed 
      // on form
      this.id = null;
    }

    this.studentForm.reset();

    this.userData.emit(this.studentList);

  }

  // constructor to initialize form
  constructor(private fb: FormBuilder, private studentService: StudentService, public datepipe: DatePipe) { 
    this.studentForm = this.fb.group({
      name: this.fb.group({
        first: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        middle: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        last: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]
      }),
      dob: ['', Validators.compose([Validators.required, dobValidator(5, 20)])],
      birthPlace: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      language: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      address: this.fb.group({
        city: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        state: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        country: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        pin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])]
      }),
      father: this.fb.group({
        fullName: this.fb.group({
          first: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          middle: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          last: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]
        }),
        email: ['', Validators.compose([Validators.required, Validators.email])],
        qualification:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z. ]*')])],
        profession: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        designation: ['', Validators.pattern('[a-zA-Z ]*')],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])]
      }),
      mother: this.fb.group({
        fullName: this.fb.group({
          first: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          middle:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          last: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]
        }),
        email: ['', Validators.compose([Validators.required, Validators.email])],
        qualification: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z. ]*')])],
        profession: ['', Validators.pattern('[a-zA-Z ]*')],
        designation: ['', Validators.pattern('[a-zA-Z ]*')],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])]
      }),
      emergencyContacts: this.fb.array([
        this.fb.group({
          emergencyId: [0],
          student: [null],
          studentId: [0],
          relation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          contact: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}'), duplicateContact('contact')])]
        })
      ]),
      referenceDetails: this.fb.array([
        this.fb.group({
          referenceId: [0],
          student: [null],
          studentId: [0],
          referenceThrough: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z. ]*')])],
          address: ['', Validators.required],
          contact: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}'), duplicateContact('contact')])]
        })
      ])
    });

    this.StudFName = this.getStudentName.controls['first'];
    this.StudMName = this.getStudentName.controls['middle'];
    this.StudLName = this.getStudentName.controls['last'];
    this.AddressCity = this.getStudentAddress.controls['city'];
    this.AddressState = this.getStudentAddress.controls['state'];
    this.AddressCountry = this.getStudentAddress.controls['country'];
    this.AddressPin = this.getStudentAddress.controls['pin'];
    this.FatherFName = this.getFatherName.controls['first'];
    this.FatherMName = this.getFatherName.controls['middle'];
    this.FatherLName = this.getFatherName.controls['last'];
    this.FatherEmail = this.getFatherInfo.controls['email'];
    this.FatherQualification = this.getFatherInfo.controls['qualification'];
    this.FatherProfession = this.getFatherInfo.controls['profession'];
    this.FatherDesignation = this.getFatherInfo.controls['designation'];
    this.FatherPhone = this.getFatherInfo.controls['phone'];
    this.MotherFName = this.getMotherName.controls['first'];
    this.MotherMName = this.getMotherName.controls['middle'];
    this.MotherLName = this.getMotherName.controls['last'];
    this.MotherEmail = this.getMotherInfo.controls['email'];
    this.MotherQualification = this.getMotherInfo.controls['qualification'];
    this.MotherProfession = this.getMotherInfo.controls['profession'];
    this.MotherDesignation = this.getMotherInfo.controls['designation'];
    this.MotherPhone = this.getMotherInfo.controls['phone'];

  }

  ngOnChanges(changes: SimpleChanges){
      this.index = this.id;

      // set details of student in form, who want to perform edit operation
      this.studentForm.patchValue({
        name: {
              first: this.editValue.name.split(' ')[0],
              middle: this.editValue.name.split(' ')[1],
              last: this.editValue.name.split(' ')[2]
            },
        dob: this.datepipe.transform(this.editValue.dob, 'yyyy-MM-dd'),
        birthPlace: this.editValue.placeOfBirth,
        language: this.editValue.language,
        address: {
          city: this.editValue.address.split('-')[0].split(',')[0],
          state: this.editValue.address.split('-')[0].split(',')[1],
          country: this.editValue.address.split('-')[0].split(',')[2],
          pin: this.editValue.address.split('-')[1]
        },
        father: {
          fullName: {
            first: this.editValue.fatherName.split(' ')[0],
            middle: this.editValue.fatherName.split(' ')[1],
            last: this.editValue.fatherName.split(' ')[2]
          },
          email: this.editValue.fatherEmail,
          qualification:this.editValue.fatherQualification,
          profession: this.editValue.fatherProfession,
          designation: this.editValue.fatherDesignation,
          phone: this.editValue.fatherPhone
        },
        mother: {
          fullName: {
            first: this.editValue.motherName.split(' ')[0],
            middle:this.editValue.motherName.split(' ')[1],
            last: this.editValue.motherName.split(' ')[2]
          },
          email: this.editValue.motherEmail,
          qualification: this.editValue.motherQualification,
          profession: this.editValue.motherProfession,
          designation: this.editValue.motherDesignation,
          phone: this.editValue.motherPhone
        }
      });

      this.studentForm.setControl('emergencyContacts', this.setExistingEergencyContacts(this.editValue.emergencyContacts));

      this.studentForm.setControl('referenceDetails', this.setExistingReferenceDetails(this.editValue.referenceDetails));
  }

  ngOnInit(): void {
    this.getStudents();
  }

}
