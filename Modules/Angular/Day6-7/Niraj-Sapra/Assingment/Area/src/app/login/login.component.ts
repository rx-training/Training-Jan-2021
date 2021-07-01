import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string="admin";
  lpassword:string="admin";
  Login:string="Login";
  constructor() { }

  ngOnInit(): void {
  }
  Loginuser(){
    if(this.uname == 'admin' && this.lpassword == "admin"){
      alert("Login Successfully");
    }
    else
    {
      alert("User-Name and Password is not Right.");
    }
  }
}