import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../models/ILogin';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  otp: number = 0;

  doLogin(user: ILogin): void {
    this.otp = this.loginForm.value.otp;
    console.log(this.otp);
    this.service.loginUser(user, this.otp)
    .subscribe();
  }

  loginSubmit(){
    var user: ILogin = {
      username : this.loginForm.value.userName,
      password: this.loginForm.value.password
    }

    console.log(user);
    this.doLogin(user);

    this.loginForm.reset();
    window.location.reload();
  }

  constructor(private fb: FormBuilder, private service: RegisterService, private router: Router) { 
    this.loginForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{9,10}$')])],
      otp: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void{

  }

  

}
