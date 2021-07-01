import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';
import { RegistrationService } from 'src/app/shared/Services/registration.service';

@Component({
  selector: 'app-login-home-page',
  templateUrl: './login-home-page.component.html',
  styleUrls: ['./login-home-page.component.css']
})
export class LoginHomePageComponent implements OnInit {

  jsid : number;
  token : string;
  jobSeeker : Array<IJobSeeker> = [];
  loggedIn : Array<any> = [];

  constructor(private jobSeekerService : JobSeekerService, private router : Router, private registrationService : RegistrationService) { 
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
          if(this.router.url != '/'){
            if(localStorage.getItem('toggle') == 'false'){
              console.log('H');
              document.getElementById('navbar').style.display = 'flex';
              document.getElementById('main').style.backgroundImage = "url('../assets/img/Navbar/homepagebgImage.d92f90dc.webp')";
              document.getElementById('navbar').style.boxShadow = 'none';
              document.getElementById('navbar').classList.remove('onScroll');
              document.getElementById('more-info').style.display = 'block';
              document.getElementById('partner-sites').style.display = 'block';
              document.getElementById('rights-reserved').style.display = 'block';
              document.getElementById('displayUpdateProfile').style.display = 'block';
              for(var i=0; i<document.querySelectorAll('nav ul li a').length; i++){
                document.querySelectorAll('nav ul li a')[i].setAttribute('style', 'color: white');
              }
            }
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.loggedIn.push(JSON.parse(sessionStorage.getItem('loggedIn')));
    console.log(this.loggedIn);
    this.loggedIn.filter(x => this.jsid = x.id);
    this.loggedIn.filter(x => this.token = x.token);
    this.jobSeekerService.getJobSeeker(this.jsid, this.token).subscribe(data => this.jobSeeker.push(data));
    this.jobSeekerService.particularProfile(this.jobSeeker);
    console.log(this.jobSeeker);
    if(localStorage.getItem('toggle') == 'false'){
      document.getElementById('LoginHome').style.display = 'block';
      document.getElementById('Home').style.display = 'none';
      setTimeout(() => {
        document.getElementById('PersonalisedJob').style.display = 'none';
        document.getElementById('FindJobHeading').style.display = 'none';
        document.getElementById('CardBody').classList.remove('col-9');
        document.getElementById('CardBody').classList.add('col-12');
      }, 100);
    }
  }

  updateProfile(){
    this.router.navigate(['home/updateProfile']);
  }

}
