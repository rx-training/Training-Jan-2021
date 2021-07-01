import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  Admins:any;
  userID = "";
  password ="";
AdminLogin:FormGroup;
  constructor(private fb :FormBuilder,private AdminService:AdminService,private route:ActivatedRoute,private router:Router) 
  {
    this.AdminLogin = fb.group({
      'userId':['',[Validators.required,Validators.email]],
      'password':['',Validators.required]
    })
    this.AdminService.getNews().subscribe(ele=>{this.Admins = ele,console.log(ele)});
   }
get userId(){
  return this.AdminLogin.get('userId')
}
get Password(){
  return this.AdminLogin.get('password')
}
  ngOnInit(): void {
  }
  login(){
    this.userID = this.AdminLogin.value.userId;
    this.password = this.AdminLogin.value.password;
    for (const iterator of this.Admins) {
    
      if(iterator.userId == this.userID && iterator.password == this.password){
        
        console.log("success");
      this.router.navigate(['home'],{relativeTo:this.route}); 
      }
      else{
        console.log("failed");
      }
    }
  }

}
