import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DOBValidatior } from 'src/assets/Validators';
import { LogInModel } from '../Models/LoginModel';
import { loginResponse } from '../Models/LoginResponse';
import { User } from '../Models/User';
import { LoginService } from '../Services/login.service';
import { UserService } from '../Services/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  LogInModel : LogInModel = {
    Username : '',
    Password : ''
  }

  Response : loginResponse = {status : 0, token : ' ', name : '', type : '', title : '', traceId : ''};
  UserFormBuilder = new FormGroup({});

  user : User = {userFirstName :'',userMiddleName : '',userLastName : '', userLogIn : '', userPassword :'',userContactNo :'', userEmail :''};

  RESETUSER(){
    this.user = {userFirstName :'',userMiddleName : '',userLastName : '', userLogIn : '', userPassword :'',userContactNo :'', userEmail :''};
  }
  constructor(private fb: FormBuilder, private router: Router,private userService : UserService, private route: ActivatedRoute, private LoginSer: LoginService) {
    this.UserFormBuilder = this.fb.group({
      Name: this.fb.group({
        FirstName: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]*$")])],
        MiddleName: ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z]*$")])],
        LastName: ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z]*$")])]
      }),
      LoginId: ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z]*$")])],
      PassWord: ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9$]*$")])],
      ContactNo: ['', Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern("^[+][0-9][0-9][1-9][0-9]*$")])],
      Email: ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9]*@[a-z]+[.][a-z]+$")])],
      BirthDate: ['', Validators.compose([Validators.required, DOBValidatior(5,100).bind(this)])]
    })
  }

  submit()
  {
    this.userService.CreateUser(this.user).subscribe(data=>{
      alert("Your user id is : "+data);
    });
  }
  RegisterFlag = false;
  RegisterUser(){
    this.userService.RegisterUser(this.user).subscribe(data=>{
      console.log(data);
    });
  }
  get FirstName() {
    return this.UserFormBuilder.get('Name.FirstName') as FormControl;
  }
  get MiddleName() {
    return this.UserFormBuilder.get('Name.MiddleName') as FormControl;
  }
  get LastName() {
    return this.UserFormBuilder.get('Name.LastName') as FormControl;
  }
  get LoginId() {
    return this.UserFormBuilder.get('LoginId') as FormControl;
  }
  get Password() {
    return this.UserFormBuilder.get('PassWord') as FormControl;
  }
  get ContactNo() {
    return this.UserFormBuilder.get('ContactNo') as FormControl;
  }
  get Email() {
    return this.UserFormBuilder.get('Email') as FormControl;
  }
  get BirthDate() {
    return this.UserFormBuilder.get('BirthDate') as FormControl;
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
  Login(){
    this.LoginSer.LogIN(this.LogInModel).subscribe(data=>{
      this.Response = data;
      if(this.Response.status != 200)
      {
        alert("please enter a valid data");
      }
      else
      {
        localStorage.setItem('token',this.Response.token as string);
        localStorage.setItem('UserName', this.Response.name as string);
        localStorage.setItem('Expiration',this.Response.expiration as string);
        console.log(this.Response.expiration);
        this.router.navigate(['../Home'],{relativeTo : this.route});
      }
    });
  }
}
