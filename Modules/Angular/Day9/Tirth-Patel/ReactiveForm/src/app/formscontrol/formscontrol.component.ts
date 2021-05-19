import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { student } from '../Models/Student';

@Component({
  selector: 'app-formscontrol',
  templateUrl: './formscontrol.component.html',
  styleUrls: ['./formscontrol.component.css']
})
export class FormscontrolComponent implements OnInit {
  signupForm :FormGroup;
 
  genders=['Male','Female'];
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username' :new FormControl(null),
      'email': new FormControl(null),
      'gender':new FormControl('Male'),
     'Contacts': new FormArray([
        new FormGroup({
          'number': new FormControl(),
          'linkedIn':new FormControl()
        })
      ])
    })
    
  };
  CreateContact():FormGroup{
    return   new FormGroup({
      'number': new FormControl(),
      'linkedIn':new FormControl()
    })

    

  }
  Add(){
    this.contacts.push(this.CreateContact());
  }
  onSubmit(){
   
    console.log(this.signupForm)
  }
 get contacts(){
   
    return this.signupForm.get('Contacts') as FormArray;
   
  }
  

}
