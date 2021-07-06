import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";
  result:string="";
  constructor() { }

  ngOnInit(): void {
  }

  validate(){
    console.log(this.username);
    console.log(this.password);
    if(this.username=="admin" && this.password=="admin"){
      this.result="Login Successful!!"
    }else{
      this.result="The credentials are wrong please check it again."
    }
  }
}
