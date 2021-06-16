import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators} from '@angular/forms';
import { makeParsedTranslation } from '@angular/localize/src/utils';
import { ActivatedRoute } from '@angular/router';
import { validateLocaleAndSetLanguage } from 'typescript';
import { User } from '../Models/user';
import { Viewer } from '../Models/Viewer';
import { UserService } from '../user.service';
import { nameValidator, numberValidator, phoneNumber } from '../Validators/validator';
import { ViewersService } from '../viewers.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ViewerForm:FormGroup;
  viewers:Viewer[]=[];
  viewer:Viewer={Age:0,City:"",UserId:"",MobileNo:0};
  user:User ={userid :"" , password:""}

  users:User[]=[];
  constructor(private fb:FormBuilder, private viewerService:ViewersService
    , private userService:UserService, private route:ActivatedRoute,private router:Router) {
    this.ViewerForm=this.fb.group({
    
      'Name':['',[Validators.required,nameValidator]],
      'City':['',Validators.required],
      'Age':['',numberValidator],
      'Mobile':[null,[Validators.required,Validators.pattern(phoneNumber)]],
      "Email":['',[Validators.required,Validators.email]]
    })
    
  
   }
get Name(){
  return this.ViewerForm.get('Name');
  
}
get City(){
  return this.ViewerForm.get('City');
}
get Age(){
  return this.ViewerForm.get('Age');
}
get Mobile(){
  return this.ViewerForm.get('Mobile');
}
get Email(){
  return this.ViewerForm.get('Email');
}
  ngOnInit(): void {
   
    
  }
  mapdata(data){
   
    this.user.userid = data.Email;
  this.user.password = "password";
    return this.user;
  }
  onSubmit(){
  
     this.viewer = this.ViewerForm.value;
     this.viewer.UserId = this.ViewerForm.value.Email;
     this.userService.addUser(this.mapdata(this.ViewerForm.value)).subscribe(hero => {
      this.users.push(hero);
    });;
    this.viewerService.addViewer(this.viewer).subscribe(hero => {
      this.viewers.push(hero)});
      this.router.navigate(['login']);
      

  }

}
