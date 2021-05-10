import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username: string = '';
  Password: string = '';
  displayBtn = "block";
  loginName = "none";

  validateLogin()
  {
    if(this.Username != 'admin'){
      alert('Incorrect username');
    }
    else if(this.Password != 'admin'){
      alert('Incorrect Password');
    }
    else{
      alert('You have successfully logged in');
      this.displayBtn = "none";
      this.loginName = "block";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
