import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { RegistrationService } from 'src/app/shared/Services/registration.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  hide : boolean = false;
  Education : FormGroup;  
  JobSeeker : Array<IJobSeeker>;

  constructor(private router : Router, private fb : FormBuilder, private service : RegistrationService) { 
    this.Education = this.fb.group({
      jobSeekerField : ['', Validators.required],
      jobSeekerCollege : ['', Validators.required],
      jobSeekerYearOfCompletion : ['', Validators.required],
    });
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
            if(this.router.url != '/registerNow/personal'){
              if(localStorage.getItem('toggle') == 'false'){
                document.getElementById('content').style.display = "none";
                document.getElementById('navbar').style.display = 'flex';
                document.getElementById('main').style.backgroundImage = "url('../assets/img/Navbar/homepagebgImage.d92f90dc.webp')";
                document.getElementById('more-info').style.display = 'block';
                document.getElementById('partner-sites').style.display = 'block';
                document.getElementById('rights-reserved').style.display = 'block';
              }
            } 
        }
      }
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('toggle') == 'false'){
      document.getElementById('content').style.display = "none";
      document.getElementById('navbar').style.display = 'none';
      document.getElementById('main').style.backgroundImage = 'none';
      document.getElementById('more-info').style.display = 'none';
      document.getElementById('partner-sites').style.display = 'none';
      document.getElementById('rights-reserved').style.display = 'none';
    }
    if(localStorage.getItem('event') == 'professional'){
      this.hide = true;
    }
    else{
      this.hide = false;
    }
  }

  isValidInput(fieldName): boolean {
    return this.Education.controls[fieldName].invalid &&
      (this.Education.controls[fieldName].dirty || this.Education.controls[fieldName].touched);
  }

  register(){
    console.log(this.Education.getRawValue());
    this.JobSeeker = this.service.getjobSeekerDetails;
    this.JobSeeker.find(value => value.jobSeekerEducations = [this.Education.getRawValue()]);
    console.log(this.JobSeeker);
    console.log(this.service.registerJobSeeker(this.JobSeeker[0]).subscribe(data => {this.JobSeeker.push(data)}));
    this.router.navigate(['']);
  }

  next(){
    console.log(this.Education.getRawValue());
    this.JobSeeker = this.service.getjobSeekerDetails;
    this.JobSeeker.find(value => value.jobSeekerEducations = [this.Education.getRawValue()]);
    console.log(this.JobSeeker);
    this.router.navigate(['/registerNow/employment']);
  }
}