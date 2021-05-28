import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailValidClass='';
  email='';
  name='';
  address='';
  pannumber='';
  password='';
  details='';
  constructor() { }

  checkEmail() {
    if(!this.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) || 
    this.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g)?.join() != this.email) {
      this.emailValidClass = 'is-invalid'
    }
    else {
      this.emailValidClass = 'is-valid'
    }
  }

  signUpUser() {
    if(!this.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) || 
        this.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g)?.join() != this.email) {
      alert("Insert valid email.");
      return;
    }

    if(this.email.trim() == '' || this.name.trim() == '' || this.address.trim() == '' || 
    this.password.trim() == '' || this.pannumber == '') {
      alert('All fields are mandatory.')
      return;
    }
    this.details = `Name: ${this.name}, Email: ${this.email}, Address: ${this.address}, Pan number: ${this.pannumber}, Password: ${this.password}`;
  }

  ngOnInit(): void {
  }

}
