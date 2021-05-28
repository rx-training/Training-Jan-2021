import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray, Validators, AbstractControl, FormControl, FormGroup} from '@angular/forms';
import { IStudent } from '../models/IStudent';

@Component({
  selector: 'app-formbuilder-practice',
  templateUrl: './formbuilder-practice.component.html',
  styleUrls: ['./formbuilder-practice.component.css']
})
export class FormbuilderPracticeComponent implements OnInit {

  profileForm;
  LastName: AbstractControl;  
  Zip: AbstractControl;

  studentArr: Array<IStudent> = [];

  get getHobbies(){
    return this.profileForm.get('hobbies') as FormArray;
  }

  get getAddress(){
    return this.profileForm.get('address') as FormGroup;
  }

  addHobbies(){
    this.getHobbies.push(this.fb.control('', Validators.required));
  }

  profileSubmit(){
    console.log(this.profileForm.value.firstName);
    console.warn(this.profileForm.value);
    var newStudent: IStudent = {
      Name : this.profileForm.value.firstName.concat(' ', this.profileForm.value.lastName),
      street: this.profileForm.value.address.street,
      city: this.profileForm.value.address.city,
      state: this.profileForm.value.address.state,
      zip: this.profileForm.value.address.zip,
      hobbies: this.profileForm.value.hobbies.join(',')
    }
    this.studentArr.push(newStudent);
    console.log(this.studentArr);

    console.log(this.LastName);
    console.log(this.Zip);
  }
  
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          zip: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])]
        }),
        hobbies: this.fb.array([
          this.fb.control('', Validators.required)
        ])
      }
    );

    this.LastName = this.profileForm.controls['lastName'];

    this.Zip = this.getAddress.controls['zip'];

   }

  ngOnInit(): void {
  }

}
