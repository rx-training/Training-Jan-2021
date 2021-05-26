import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  MessageforUseName: string;
  MessageforPassword: string;
  Message1: string;
  Message2: string;
  chkdata(): void {

    if (this.MessageforPassword != "admin" || this.MessageforUseName != "admin") {
      this.Message1 = "Please Check your Usename And Password";
      this.Message2 = "";
    }
    else {
      this.Message2 = "Successfully LogIn ";
      this.Message1 = "";
    }


  }


}
