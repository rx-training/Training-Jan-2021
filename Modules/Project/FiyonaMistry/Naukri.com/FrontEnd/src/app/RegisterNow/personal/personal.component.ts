import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { RegistrationService } from 'src/app/shared/Services/registration.service';
import { dateValidation } from 'src/app/shared/Validations/DateValidation';
import { emailValidation } from 'src/app/shared/Validations/EmailValidation';
import { phoneValidation } from 'src/app/shared/Validations/PhoneValidation';
import { pinValidation } from 'src/app/shared/Validations/PinValidation';
import { stringValidation } from 'src/app/shared/Validations/StringValidation';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  hide : boolean = false;
  fieldTextType: boolean = false;
  Personal : FormGroup;
  JobSeeker : Array<IJobSeeker> = [];

  constructor(private router : Router, private service : RegistrationService, private fb : FormBuilder) {
    this.Personal = this.fb.group({
      jobSeekerFirstName : ['', Validators.compose([Validators.required, stringValidation()])],
      jobSeekerMiddleName : ['', Validators.compose([Validators.required, stringValidation()])],
      jobSeekerLastName : ['', Validators.compose([Validators.required, stringValidation()])],
      jobSeekerEmail : ['', Validators.compose([Validators.required, emailValidation()])],
      jobSeekerPassword : ['',  Validators.compose([Validators.required, Validators.pattern("")])],
      jobSeekerType : [''],
      jobSeekerPhoneNumber : ['', Validators.compose([Validators.required, phoneValidation()])], 
      jobSeekerResume : ['', Validators.required],
      jobSeekerSkills : ['', Validators.required],
      jobSeekerDob : ['', Validators.compose([Validators.required, dateValidation()])],
      jobSeekerGender : [''],
      jobSeekerAddress : ['', Validators.required],
      jobSeekerAreaPinCode : ['', Validators.compose([Validators.required, pinValidation()])]
    });
    if(this.service.geteventValue == 'professional'){
      this.hide = true;
      localStorage.setItem('event', 'professional');
    }
    else if(this.service.geteventValue == 'fresher'){
      localStorage.setItem('event', 'fresher');
    }
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

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  isValidInput(fieldName): boolean {
    return this.Personal.controls[fieldName].invalid &&
      (this.Personal.controls[fieldName].dirty || this.Personal.controls[fieldName].touched);
  }

  next(){
    console.log(this.Personal.getRawValue());
    if(localStorage.getItem('event') == 'professional'){
      this.Personal.patchValue({jobSeekerType : 'Professional'});
    }
    else if(localStorage.getItem('event') == 'fresher'){
      this.Personal.patchValue({jobSeekerType : 'Fresher'});
    }
    this.JobSeeker.push(this.Personal.getRawValue());
    console.log(this.JobSeeker);
    this.service.jobSeekerDetails(this.JobSeeker);
    this.router.navigate(['/registerNow/education']);
  }

}
