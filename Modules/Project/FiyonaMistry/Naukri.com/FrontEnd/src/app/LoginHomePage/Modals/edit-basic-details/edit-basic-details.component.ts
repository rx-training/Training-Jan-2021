import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';
import { phoneValidation } from 'src/app/shared/Validations/PhoneValidation';
import { stringValidation } from 'src/app/shared/Validations/StringValidation';

@Component({
  selector: 'app-edit-basic-details',
  templateUrl: './edit-basic-details.component.html',
  styleUrls: ['./edit-basic-details.component.css']
})
export class EditBasicDetailsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  Basic : FormGroup;
  loggedIn : Array<any> = [];
  jobSeeker : Array<IJobSeeker> = [];
  id : number;
  token : string;
  updatedJobSeeker : Array<IJobSeeker> = [];
  
  constructor(private fb : FormBuilder, private jobSeekerService : JobSeekerService, private dialog : MatDialog) { 
    this.Basic = this.fb.group({
      fname : ['', Validators.compose([Validators.required, stringValidation()])],
      mname : ['', Validators.compose([Validators.required, stringValidation()])],
      lname : ['', Validators.compose([Validators.required, stringValidation()])],
      type : [''],
      phonenumber : ['', Validators.compose([Validators.required, phoneValidation()])]
    })
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loggedIn.push(JSON.parse(sessionStorage.getItem('loggedIn')));
    this.jobSeeker = this.jobSeekerService.getparticularProfile;
    this.loggedIn.filter(x => this.token = x.token);
    this.loggedIn.filter(x => this.id = x.id);
    this.Basic.get('fname').patchValue(this.jobSeeker[0]['data'].jobSeekerFirstName);
    this.Basic.get('mname').patchValue(this.jobSeeker[0]['data'].jobSeekerMiddleName);
    this.Basic.get('lname').patchValue(this.jobSeeker[0]['data'].jobSeekerLastName);
    this.Basic.get('type').patchValue(this.jobSeeker[0]['data'].jobSeekerType);
    this.Basic.get('phonenumber').patchValue(this.jobSeeker[0]['data'].jobSeekerPhoneNumber);
  }

  isValidInput(fieldName): boolean {
    return this.Basic.controls[fieldName].invalid &&
      (this.Basic.controls[fieldName].dirty || this.Basic.controls[fieldName].touched);
  }

  save(){
    this.updatedJobSeeker.push(this.jobSeeker[0]['data']);
    this.updatedJobSeeker.forEach(value => value.jobSeekerFirstName = this.Basic.get('fname').value);
    this.updatedJobSeeker.forEach(value => value.jobSeekerMiddleName = this.Basic.get('mname').value);
    this.updatedJobSeeker.forEach(value => value.jobSeekerLastName = this.Basic.get('lname').value);
    this.updatedJobSeeker.forEach(value => value.jobSeekerType = this.Basic.get('type').value);
    this.updatedJobSeeker.forEach(value => value.jobSeekerPhoneNumber = this.Basic.get('phonenumber').value);
    console.log(this.updatedJobSeeker);
    this.jobSeekerService.updateJobSeeker(this.id, this.updatedJobSeeker[0], this.token).subscribe(data => console.log(data));
    this.dialog.closeAll();
  }

}
