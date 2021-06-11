import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../auth/register.service';
import { DynamicNavbarService } from '../dynamic-navbar.service';
import { IDynamicNavbar } from '../models/IDynamicNavbar';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit, OnChanges {

  IsLoggedIn: boolean = false;
  display: string = "block";
  userInfo: any;
  username: string = '';
  dynamicNavbarsList: Array<IDynamicNavbar> = [];

  IsUserLoggedIn()
  {
    if(localStorage.logged_in_user){
      this.IsLoggedIn = true;
      this.display = "none";
      this.userInfo = JSON.parse(localStorage.getItem("logged_in_user"));
      this.username = this.userInfo.username;
    }
    else{
      this.IsLoggedIn = false;
    }
  }

  logout() {
    this.registerService.logoutUser();
    this.IsLoggedIn = false;
    this.display = "block";

    alert("You have successfully logged out");
  }

  automaticLogOut(){

    if(localStorage.getItem("logged_in_user")){
      setTimeout(() => {
        this.registerService.logoutUser();
        this.IsLoggedIn = false;
        this.display = "block";
    
        alert("You have been logged out");
        window.location.assign('/home');
      }, 8*3600000);
    }

  }

  getDynamicNavbars(){
    this.dynamicNavbarService.getDynamicNavbars()
    .subscribe(dynamicNavbars => {
      this.dynamicNavbarsList = dynamicNavbars,
      console.log('dynamic navbar' + this.dynamicNavbarsList)
    })
  }

  constructor(private registerService: RegisterService, private router: Router, private dynamicNavbarService: DynamicNavbarService) { }

  ngOnChanges(){
    this.IsUserLoggedIn();
    this.automaticLogOut();
  }

  ngOnInit(): void {
    this.loadScript('../../../assets/js/main.js');
    this.IsUserLoggedIn();
    this.getDynamicNavbars();
    this.automaticLogOut();
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
    
  }
}
