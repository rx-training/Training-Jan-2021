import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute, private loginService : LoginService) { }

  ngOnInit(): void {
    this.loginService.GetUserDataByLogin(localStorage.getItem("UserName") as string).subscribe(data=>{
      this.user = data;
    });
  }

  user : User = {userFirstName:'', userMiddleName :'', userLastName : '', userContactNo : '', userEmail : '', userLogIn : '', userPassword : ''}
  LogOut(){
    this.loginService.ResetLogin();
    this.router.navigate(['../Login'], {relativeTo:this.route});
  }

}
