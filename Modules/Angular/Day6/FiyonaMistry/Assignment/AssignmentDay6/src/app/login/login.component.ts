import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor() { }

  ngOnInit(): void {
  }

  login(){

    if(this.username == null || this.password == null){
      alert("Please do not leave any field blank");
    }
    else if(this.username != "admin"){
      alert("Please enter valid username")
    }
    else if(this.password != "admin"){
      alert("Please enter valid password")
    }
    else if(this.username == "admin" && this.password == "admin"){
      alert("Logged In Successfully");
    }

  }

}
