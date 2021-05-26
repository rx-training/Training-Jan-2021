import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailValidClass='';
  email='';
  password='';
  constructor() { }

  checkEmail() {
    if(!this.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) || this.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g)?.join() != this.email) {
      this.emailValidClass = 'is-invalid'
    }
    else {
      this.emailValidClass = 'is-valid'
    }
  }

  validateUser() {
    if(this.email == 'admin@admin.com' && this.password == 'admin') {
      alert("validation successful.")
    }
    else {
      alert('Incorrect email or password.');
    }
  }

  ngOnInit(): void {
  }

}
