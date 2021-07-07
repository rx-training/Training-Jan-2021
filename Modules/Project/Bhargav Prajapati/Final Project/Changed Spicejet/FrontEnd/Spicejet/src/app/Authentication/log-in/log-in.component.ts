import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginmodel } from 'src/app/ModelsSpicejet/LoginModel';
import { AuthenticationService } from 'src/app/ServicesSpicejet/AuthenticationSercice/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private service:AuthenticationService) { }
LogInForm:FormGroup;
userrole:AbstractControl;
username:AbstractControl;
password:AbstractControl;
flag:boolean=false;

  ngOnInit(): void {
    this.LogInForm=this.fb.group({
      UserRole:['',Validators.required],
      UserName:['',Validators.required],
      UserPassword: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{4,}')]]
    });
    this.userrole=this.LogInForm.get('UserRole');
    this.username=this.LogInForm.get('UserName');
    this.password=this.LogInForm.get('UserPassword');
  }
  Back()
  {
    this.router.navigateByUrl('');
  }

  Navigate()
  {
    this.router.navigateByUrl('Signup');
  }
  LogedIn()
  {
    let userdata:loginmodel={username:this.LogInForm.value.UserName,password:this.LogInForm.value.UserPassword}
   
    if(this.LogInForm.value.UserRole=="User")
    {
    this.service.logInDetails(userdata).subscribe(
      (res:any)=>{

        console.log(res);
        sessionStorage.setItem('token',res.token);

        this.flag=false;
        this.router.navigateByUrl('');
      },
      (err)=>{
        console.log(err);
        this.flag=true;
      }
     );
    }
    if(this.LogInForm.value.UserRole=="Admin")
    {
          this.service.logInDetails(userdata).subscribe(
            (res:any)=>{
              console.log(res);
              sessionStorage.setItem('token',res.token);
              this.flag=false;
              this.router.navigateByUrl('Admin-Panel');

            },
            (err)=>{
              console.log(err);
              this.flag=true;
            }
          )
    }
  }

}
