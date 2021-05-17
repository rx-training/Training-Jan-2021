import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  defaultQuestion = 'pet';
  answer: string = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQ: '',
    ans: '',
    gender: ''
  }
  submitted = false;

  suggestUserName(){
    const suggestedName = 'Superuser';

    // Setting all form values
    // this.signUpForm?.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // });

    // Patching form values, to set some fields
    this.signUpForm?.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // Using @ViewChild is useful when we want to access form not only at the time of submitting but also earlier 
  // Get access to local reference element
  @ViewChild('f') signUpForm: NgForm | undefined;

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    console.log(this.signUpForm);
    this.user.username = this.signUpForm?.value.userData.username;
    this.user.email = this.signUpForm?.value.userData.email;
    this.user.secretQ = this.signUpForm?.value.secret;
    this.user.ans = this.signUpForm?.value.questionAnswer;
    this.user.gender = this.signUpForm?.value.gender;

    this.signUpForm?.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
