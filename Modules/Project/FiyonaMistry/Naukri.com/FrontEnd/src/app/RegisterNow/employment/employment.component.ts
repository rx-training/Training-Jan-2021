import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { RegistrationService } from 'src/app/shared/Services/registration.service';
import { dateValidation } from 'src/app/shared/Validations/DateValidation';
import { stringValidation } from 'src/app/shared/Validations/StringValidation';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
 
  hide : boolean = false;
  Employment : FormGroup;
  PreviousEmployment : FormGroup;
  JobSeeker : Array<IJobSeeker>;

  constructor(private router : Router, private fb : FormBuilder, private service : RegistrationService) { 
    this.Employment = this.fb.group({
      JobSeekerDesignation : ['', Validators.compose([Validators.required, stringValidation()])],
      JobSeekerCompany : ['', Validators.required],
      JobSeekerAnnualSalary : ['', Validators.required],
      JobSeekerWorkingFrom : ['', Validators.compose([Validators.required, dateValidation()])],
      JobSeekerWorkingTo : ['', Validators.required],
      JobSeekerCurrentCity : ['', Validators.required],
      IsCurrent : [''],
    });
    this.PreviousEmployment = this.fb.group({
      JobSeekerDesignation : [''],
      JobSeekerCompany : [''],
      JobSeekerAnnualSalary : [''],
      JobSeekerWorkingFrom : [''],
      JobSeekerWorkingTo : [''],
      JobSeekerCurrentCity : [''],
      IsCurrent : [''],
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
    return this.Employment.controls[fieldName].invalid &&
      (this.Employment.controls[fieldName].dirty || this.Employment.controls[fieldName].touched);
  }

  register(){
    console.log(this.Employment.getRawValue());
    console.log(this.PreviousEmployment.getRawValue());
    this.Employment.patchValue({IsCurrent : 1});
    this.PreviousEmployment.patchValue({IsCurrent : 0});
    this.Employment.patchValue({JobSeekerAnnualSalary : `${this.Employment.get('JobSeekerAnnualSalary').value}.00`});
    this.JobSeeker = this.service.getjobSeekerDetails;
    this.JobSeeker.find(value => value.jobSeekerJobHistories = [this.Employment.getRawValue(), this.PreviousEmployment.getRawValue()]);
    console.log(this.service.registerJobSeeker(this.JobSeeker[0]).subscribe(data => {this.JobSeeker.push(data)}));
    console.log(this.JobSeeker);
    this.router.navigate(['']);
  }
}