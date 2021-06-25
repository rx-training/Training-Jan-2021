import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogInModel } from '../Models/LoginModel';
import { loginResponse } from '../Models/LoginResponse';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Response : loginResponse = {status : 0, token : ' ', name : '', type : '', title : '', traceId : ''};

  constructor(private LoginSer : LoginService, private router : Router, private route : ActivatedRoute) { }

  LogInModel : LogInModel = {
    Username : '',
    Password : ''
  }
  ngOnInit(): void {
  }
  type : string = "password";
  visiblePassword = false;
  changeVisible()
  {
    if(this.visiblePassword == false)
    {
      this.visiblePassword = true;
      this.type = "text";
    }
    else
    {
      this.type = "password";
      this.visiblePassword = false;
    }
  } 
  LoginAdmin(){
    this.LoginSer.LogIN(this.LogInModel).subscribe(data=>{
      this.Response = data;
      if(this.Response.status != 200)
      {
        alert("please enter a valid data");
      }
      else
      {
        localStorage.setItem("Admin",this.LogInModel.Username);
        this.LogInModel.Username = '';
        this.LogInModel.Password = '';
        this.router.navigate(['./Index'],{relativeTo : this.route});

      }
    },
    (error)=>{
      alert("Please enter a valid data...");
    });
  }
}
