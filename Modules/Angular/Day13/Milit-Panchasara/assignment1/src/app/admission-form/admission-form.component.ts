import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { EmergencyDetail } from '../models/emergencyDetail';
import { ParentDetail } from '../models/parentDetail';
import { ReferenceDetails } from '../models/referenceDetails';
import { Student } from '../models/student';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  @Output() formEmitter: EventEmitter<any> = new EventEmitter();

  @Input() student: any;

  admissionForm: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.admissionForm = this.fb.group({
      studentName: this.fb.group({
        firstName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
        middleName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
        lastName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])]
      }),
      dob: ['', Validators.compose([Validators.required, this.futureDateValidator()])],
      placeOfBirth: ['', Validators.required],
      firstLanguage: ['', Validators.required],
      address: this.fb.group({
        street:['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],   
        country: ["India", Validators.required],
        pin: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{6,6}$/)])]
      }),
      father: this.fb.group({
        name: this.fb.group({
          firstName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
          middleName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
          lastName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])]
        }),
        email: ['', Validators.compose([Validators.required, Validators.email])],
        education: ['', Validators.required],
        profession: ['', Validators.required],     
        designation: ['', Validators.required],
        phone: ['',  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
      }),
      mother: this.fb.group({
        name: this.fb.group({
          firstName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
          middleName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
          lastName: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])]
        }),
        email: ['', Validators.compose([Validators.required, Validators.email])],
        education: ['', Validators.required],
        profession: ['', Validators.required],     
        designation: ['', Validators.required],
        phone: ['',  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
      }),
      emergencyDetail: this.fb.array([
        this.fb.group({
          relation: ['', Validators.compose([Validators.required])],
          number: ['',  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
        })
      ],this.duplicateRelation()),
      referenceDetail: this.fb.group({
        referenceThrough: ['', Validators.required],
        address: this.fb.group({
          street:['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          country: ["India", Validators.required],
          pin: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{6,6}$/)])],
          contact: ['',  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
        })
      })
    });
    
  }

  get studentName() {
    return <FormGroup>this.admissionForm.get('studentName');
  }

  get father() {
    return <FormGroup>this.admissionForm.get('father');
  }

  get mother() {
    return <FormGroup>this.admissionForm.get('mother');
  }

  get fatherName() {
    return <FormGroup>this.admissionForm.get('father.name');
  }

  get motherName() {
    return <FormGroup>this.admissionForm.get('mother.name');
  }

  get address() {
    return <FormGroup>this.admissionForm.get('address');
  }

  get reference() {
    return <FormGroup>this.admissionForm.get('referenceDetail');
  }

  get referenceAddress() {
    return <FormGroup>this.admissionForm.get('referenceDetail.address');
  }

  getEntry(i:number) {
    return <FormGroup>(<FormArray>this.admissionForm.get('emergencyDetail')).get(i.toString());
  }

  ngOnInit(): void {
  }

  getEmergencyDetails() {
    return (<FormArray>this.admissionForm.get("emergencyDetail"));
  }

  addEmergencyDetail() {
    (<FormArray>this.admissionForm.get("emergencyDetail")).push(
      this.fb.group({
        relation: ['', Validators.required],
        number:  ['',  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
      })
    );
  }

  removeEmergencyDetail(index:number) {
    (<FormArray>this.admissionForm.get("emergencyDetail")).removeAt(index);
  }

  submitForm() {
    console.log(this.admissionForm);
    this.formEmitter.emit(this.admissionForm.value);
    
    // let emergencyDetails:EmergencyDetail[] = [];

    // for (const entry of input.emergencyDetail) {
    //   emergencyDetails.push((<EmergencyDetail>entry.value));
    // }

    // let student:Student = {
    //   firstName: input.firstName,
    //   middleName: input.middleName,
    //   lastName: input.lastName,
    //   dateOfBirth: input.dob,
    //   placeOfBirth: input.placeOfBirth,
    //   firstLanguage: input.firstLanguage,
    //   address: input.address,
    //   father: (<ParentDetail>input.father),
    //   mother: (<ParentDetail>input.mother),
    //   emergencyDetail: emergencyDetails,
    //   referenceDetail: {
    //     referenceThrough: input.referenceDetail.referenceThrough,
    //     address: input.referenceDetail.address
    //   }
    // }

  }

  futureDateValidator(): ValidatorFn  {
    return (control: AbstractControl): {[key: string]: any} | null => {

      var date = control.value.split('-');
      // if(date.length != 3) return {futureDate: {value: control.value}};
      var inputDate = new Date(parseInt(date[0]), parseInt(date[1])-1, date[2]);
      
      return (inputDate > new Date()) ? {futureDate: {value: control.value}} : null;
    };
  }

  duplicateRelation(): ValidatorFn {
    return (control: AbstractControl): {[key:string]: any} | null => {

      let len:unknown = control.get('length');

      for (let i = 0; i < (len as number); i++) {
        const element = control.get(i.toString());
        if(element.get('relation').value == '' || element.get('number').value == '') continue;

        for (let j = 0; j < (len as number); j++) {
          if(i==j) continue;
          const element2 = control.get(j.toString());
          if(element2.get('relation').value == '' || element2.get('number').value == '') continue;
          if(element2.get('relation').value == element.get('relation').value || element2.get('number').value == element.get('number').value) {
            return {duplicateRelation: {value: control.value}};
          } 
        }
      }

      return null;
    }
  }
}
