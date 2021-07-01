import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegisterService } from '../auth/register.service';
import { DynamicNavbarService } from '../dynamic-navbar.service';
import { IDynamicNavbar } from '../models/IDynamicNavbar';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit, OnChanges, OnDestroy {

  IsLoggedIn: boolean = false;
  display: string = "block";
  userInfo: any;
  username: string = '';
  dynamicNavbarsList: Array<IDynamicNavbar> = [];
  myVar: any;

  getAllDynamicNavbarsSub: Subscription;

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

  ngOnDestroy(){
    this.getAllDynamicNavbarsSub.unsubscribe();
    clearTimeout(this.myVar);
  }

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
      this.myVar = setTimeout(() => {
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
      this.dynamicNavbarsList = dynamicNavbars
    })
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
    
  }
}
