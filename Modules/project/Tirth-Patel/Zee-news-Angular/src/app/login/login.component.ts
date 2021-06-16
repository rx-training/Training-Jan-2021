import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { User } from '../Models/user';
import { UserService } from '../user.service';
import { nameValidator } from '../Validators/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Users:any;
  loginForm:FormGroup;
  userid='';
  password='';
  
  constructor(private fb :FormBuilder,private userService:UserService
    ,private route:ActivatedRoute,private router:Router) { 
  this.loginForm=this.fb.group({
    
    'userid':['',[Validators.required,Validators.email]],
    'password':['',[Validators.required]]
  })
  this.userService.getUsers().subscribe(ele=>{this.Users = ele ,console.log(ele) })
 }
 get userId(){
   return this.loginForm.get('userid');
 }
 get Password(){
   return this.loginForm.get('password');
 }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(ele=>{this.Users = ele ,console.log(ele) })

 
  }
login(){
  console.log(this.loginForm.value);
  this.userid = this.loginForm.value.userid;
  this.password = this.loginForm.value.password;
  for (const iterator of this.Users) {
    
    if(iterator.userId == this.userid && iterator.password == this.password){
      
      console.log("success");
      this.router.navigate(['/Home']);
    }
    else{
      console.log("failed");
    }
  }
}
}
