import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { EmergencyDetail } from '../models/emergencyDetail';
import { ParentDetail } from '../models/parentDetail';
import { ReferenceDetails } from '../models/referenceDetails';
import { Student } from '../models/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit, OnChanges {

  @Input() studentService: StudentService;
  @Input() index: number;
  @Output() indexEmitter: EventEmitter<number> = new EventEmitter();

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
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.index);
    
    if(changes.index != null && changes.index.currentValue != -1){
      let formData = this.studentService.studentList[this.index];
      console.log(formData);
      
      let emergencyDetailArray = [];

      for (let i = 0; i < formData.emergencyDetail.length; i++) {
        const element = formData.emergencyDetail[i];
        emergencyDetailArray.push(this.fb.group({
          relation: [element.relation, Validators.compose([Validators.required])],
          number: [element.number,  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
        }));
      }
 
      this.admissionForm = this.fb.group({
        studentName: this.fb.group({
          firstName: [(formData == null) ? '':formData.studentName.firstName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
          middleName: [(formData == null) ? '':formData.studentName.middleName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
          lastName: [(formData == null) ? '':formData.studentName.lastName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])]
        }),
        dob: [(formData == null) ? '': formData.dob.getFullYear() + "-" + (formData.dob.getMonth()+1) + "-" + formData.dob.getDate(), Validators.compose([Validators.required, this.futureDateValidator()])],
        placeOfBirth: [(formData == null) ? '':formData.placeOfBirth, Validators.required],
        firstLanguage: [(formData == null) ? '':formData.firstLanguage, Validators.required],
        address: this.fb.group({
          street:[(formData == null) ? '':formData.address.street, Validators.required],
          city: [(formData == null) ? '':formData.address.city, Validators.required],
          state: [(formData == null) ? '':formData.address.state, Validators.required],   
          country: [(formData == null) ? '':formData.address.country, Validators.required],
          pin: [(formData == null) ? '':formData.address.pin, Validators.compose([Validators.required, Validators.pattern(/^[0-9]{6,6}$/)])]
        }),
        father: this.fb.group({
          name: this.fb.group({
            firstName: [(formData == null) ? '':formData.father.name.firstName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
            middleName: [(formData == null) ? '':formData.father.name.middleName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
            lastName: [(formData == null) ? '':formData.father.name.lastName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])]
          }),
          email: [(formData == null) ? '':formData.father.email, Validators.compose([Validators.required, Validators.email])],
          education: [(formData == null) ? '':formData.father.education, Validators.required],
          profession: [(formData == null) ? '':formData.father.profession, Validators.required],     
          designation: [(formData == null) ? '':formData.father.designation, Validators.required],
          phone: [(formData == null) ? '':formData.father.phone,  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
        }),
        mother: this.fb.group({
          name: this.fb.group({
            firstName: [(formData == null) ? '':formData.mother.name.firstName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
            middleName: [(formData == null) ? '':formData.mother.name.middleName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
            lastName: [(formData == null) ? '':formData.mother.name.lastName, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]+$/)])]
          }),
          email: [(formData == null) ? '':formData.mother.email, Validators.compose([Validators.required, Validators.email])],
          education: [(formData == null) ? '':formData.mother.education, Validators.required],
          profession: [(formData == null) ? '':formData.mother.profession, Validators.required],     
          designation: [(formData == null) ? '':formData.mother.designation, Validators.required],
          phone: [(formData == null) ? '':formData.mother.phone,  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
        }),
        emergencyDetail: this.fb.array(emergencyDetailArray ,this.duplicateRelation()),
        referenceDetail: this.fb.group({
          referenceThrough: [(formData == null) ? '':formData.referenceDetail.referenceThrough, Validators.required],
          address: this.fb.group({
            street:[(formData == null) ? '':formData.referenceDetail.address.street, Validators.required],
            city: [(formData == null) ? '':formData.referenceDetail.address.city, Validators.required],
            state: [(formData == null) ? '':formData.referenceDetail.address.state, Validators.required],
            country: [(formData == null) ? '':formData.referenceDetail.address.country, Validators.required],
            pin: [(formData == null) ? '':formData.referenceDetail.address.pin, Validators.compose([Validators.required, Validators.pattern(/^[0-9]{6,6}$/)])],
            contact: [(formData == null) ? '':formData.referenceDetail.address.contact,  Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10,10}$/)])]
          })
        })
      });
    }

    if(changes.index.currentValue == -1) {
      this.admissionForm.reset();
    }
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

  submitForm(operation) {
    if(operation == 'add'){
      this.studentService.addStudent(this.admissionForm.value);
      this.admissionForm.reset();
    }
    else if(operation == 'edit') {
      this.studentService.updateStudent(this.index, this.admissionForm.value);
      this.admissionForm.reset();
      this.index = -1;
      this.indexEmitter.emit(this.index);
    }
    // this.formEmitter.emit(this.admissionForm.value);
    
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

      var inputDate = new Date(control.value);
      
      return (inputDate.getTime() > (new Date()).getTime()) ? {futureDate: {value: control.value}} : null;
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
