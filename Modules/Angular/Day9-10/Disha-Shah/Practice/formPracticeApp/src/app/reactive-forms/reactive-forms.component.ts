import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';
import { IStudent } from '../models/IStudent';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    hobbies: new FormArray([
      new FormControl()
    ])
  });

  studentArr: Array<IStudent> = [];

  get getHobbies(){
    return this.profileForm.get('hobbies') as FormArray;
  }

  addHobbies(){
    this.getHobbies.push(new FormControl());
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
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
