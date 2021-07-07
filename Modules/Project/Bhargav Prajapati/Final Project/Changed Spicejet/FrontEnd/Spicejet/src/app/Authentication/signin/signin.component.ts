import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterAuthentication } from 'src/app/ModelsSpicejet/Authentication';
import { AuthenticationService } from 'src/app/ServicesSpicejet/AuthenticationSercice/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private service:AuthenticationService)
   { }

  SigninForm:FormGroup; 

  userrole:AbstractControl;
  username:AbstractControl;
  useremail:AbstractControl;
  userpassword:AbstractControl;
  flag:boolean=false;

  ngOnInit(): void {
    this.SigninForm=this.fb.group({
        UserRole:['',Validators.required],
        UserName:['',Validators.required],
        UserEmail:['',[Validators.required,Validators.email]],
        UserPassword: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{4,}')]]
      });
      this.userrole=this.SigninForm.get('UserRole');
      this.username=this.SigninForm.get('UserName');
      this.useremail=this.SigninForm.get('UserEmail');
      this.userpassword=this.SigninForm.get('UserPassword');
  }

  Back()
  {
    this.router.navigateByUrl('Admin-Module');
  }

  submitData()
  {
    let Registerdata:RegisterAuthentication={username:this.SigninForm.value.UserName,email:this.SigninForm.value.UserEmail,password:this.SigninForm.value.UserPassword}
    console.log(this.SigninForm.value);

    if(this.SigninForm.value.UserRole=="User")
    {
        this.service.RegisterUser(Registerdata).subscribe(
          (res)=>{console.log(res)
            alert("User Successfully Register");
            this.flag=false;
            this.router.navigateByUrl('Admin-Module');
            
          },
          (err)=>{
          
            console.log(err);
            this.flag=false;
            
          }
        );
    }
    if(this.SigninForm.value.UserRole=="Admin")
    {
      this.service.RegisterAdmin(Registerdata).subscribe(
        (res)=>{
          console.log(res);
          alert("Admin Successfully Register");
          this.flag=false;
          this.router.navigateByUrl('Admin-Module');
        },
        (err)=>{
          console.log(err);
          this.flag=true;
        }
      )
    }
  }


}
