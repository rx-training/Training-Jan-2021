import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('');

  genders = ['male', 'female'];

  signUpForm =  new FormGroup({
    'username': new FormControl(null),
    'email': new FormControl(null),
    'gender': new FormControl('female')
  });

  onSubmit(){
    console.log(this.signUpForm);
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  constructor() { }

  ngOnInit(): void {
    this.signUpForm.valueChanges.subscribe(
      (value)=>console.log(value)
    );
  }

}
