import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm,Validator, ValidatorFn,NgControl,NgModel} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f') signupForm;
  answer: string;
  defaultQuestion = 'pet';
  genders = ['male', 'female'];
  submitted = false;
  user ={
    username:'',
    email:'',
    secretQuestion:"",
    Answer:"",
    Gender:"",
  }
  constructor() { }

  ngOnInit(): void {
  }
forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }
  suggestuserName() {
    const suggestedName = 'SuperUser';
    //   this.signupForm.setValue({
    //     userData:{
    //       username:suggestedName,
    //       email:''
    //     },
    //     secret:'pet',
    //     questionAnswer:'',
    //     gender:'male',
    //   })
    // }
    this.signupForm.form.patchValue({
      userdata: {
        username: suggestedName
      }
    })
  };
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  //alt apporach with decorator
  //this will help you to get your form data before you submit

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username= this.signupForm.value.userdata.username;
    this.user.email = this.signupForm.value.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.Answer = this.signupForm.value.questionAnswer;
    this.user.Gender = this.signupForm.value.gender
  }
}
