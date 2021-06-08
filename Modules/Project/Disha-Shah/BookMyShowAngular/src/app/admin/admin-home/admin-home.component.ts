import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/auth/register.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  adminInfo: any;
  adminName: string = '';

  logout() {
    this.registerService.logoutAdmin();

    alert("You have successfully logged out");

    window.location.assign('/home');
  }


  constructor(private registerService: RegisterService, private router: Router) { }

  getLoggedAdminInfo(){
    this.adminInfo = JSON.parse(localStorage.getItem("logged_in_admin"))
    if(this.adminInfo != null){
      this.adminName = this.adminInfo.username;
      this.adminName = this.adminName.toUpperCase();
    }
  }

  ngOnInit(): void {
    this.loadScript('../../../assets/js/admin-sidebar.js');
    this.getLoggedAdminInfo();
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }

}
