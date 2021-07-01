import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon';
  darkFlag = false;

  constructor(private router: Router) {
    this.checkUrl();
  }
  change() {
    if (this.darkFlag == false) {
      this.darkFlag = true;
    }
    else {
      this.darkFlag = false;
    }
  }
  urlFlag = true;
  adminFlag = false;
  checkUrl() {
    setTimeout(() => {
      let link = window.location.href;
      if (window.location.href == "http://localhost:4200/Login") {
        this.urlFlag = false;
      }
      else{
        this.urlFlag = true;
      }

      if(link.includes("Admin"))
      {
        this.adminFlag = true;
      }
      else
      {
        this.adminFlag = false;
      }

      this.checkUrl();
    }, 500);
  }
  
}
