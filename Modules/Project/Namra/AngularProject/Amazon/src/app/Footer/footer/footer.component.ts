import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  CurrentYear : number = 0;
  constructor() { }

  ngOnInit(): void {
    this.CurrentYear = (new Date()).getFullYear(); 
    this.checkUrl();
  }

  footerFlag = true;
  checkUrl() {
    setTimeout(() => {
      if (window.location.href == "http://localhost:4200/Login") {
        this.footerFlag = false;
      }
      else{
        this.footerFlag = true;
      }
      this.checkUrl();
    }, 500);
  }
}
