import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { RegistrationService } from 'src/app/shared/Services/registration.service';

@Component({
  selector: 'app-register-now',
  templateUrl: './register-now.component.html',
  styleUrls: ['./register-now.component.css']
})
export class RegisterNowComponent implements OnInit {

  constructor(public router : Router, private service : RegistrationService) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
            if(this.router.url != '/registerNow'){
              if(localStorage.getItem('toggle') == 'false'){
                console.log('R');
                document.getElementById('content').style.display = "block";
                document.getElementById('navbar').style.display = 'none';
                document.getElementById('main').style.backgroundImage = 'none';
                document.getElementById('more-info').style.display = 'none';
                document.getElementById('partner-sites').style.display = 'none';
                document.getElementById('rights-reserved').style.display = 'none';
              }
            } 
        }
      }
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('toggle') == 'false'){
      document.getElementById('content').style.display = "block";
      document.getElementById('navbar').style.display = 'none';
      document.getElementById('main').style.backgroundImage = 'none';
      document.getElementById('more-info').style.display = 'none';
      document.getElementById('partner-sites').style.display = 'none';
      document.getElementById('rights-reserved').style.display = 'none';
    }
  }

  change(value : any) { 
    this.service.eventChange(value);
    if(this.router.url == '/registerNow'){
      document.getElementById('content').style.display = "none";
    } 
  }

}
