import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../auth/register.service';

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

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnChanges(){
    this.IsUserLoggedIn();
  }

  ngOnInit(): void {
    this.loadScript('../../../assets/js/main.js');
    this.IsUserLoggedIn();
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
    
  }
}
