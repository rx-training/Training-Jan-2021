import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookMyShowAngular';

  userInfo: any;
  userRole: string = '';

  adminInfo: any;
  adminRole: string = '';

  getLoggedUserInfo(){
    this.userInfo = JSON.parse(localStorage.getItem("logged_in_user"))
    if(this.userInfo != null){
      this.userRole = this.userInfo.role;
    }
  }

  getLoggedAdminInfo(){
    this.adminInfo = JSON.parse(localStorage.getItem("logged_in_admin"))
    if(this.adminInfo != null){
      this.adminRole = this.adminInfo.role;
    }
  }

  ngOnInit(): void {
    this.loadScript('../assets/js/main.js');
    this.getLoggedUserInfo();
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
