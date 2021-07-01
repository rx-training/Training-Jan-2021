import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';
import { dateValidation } from 'src/app/shared/Validations/DateValidation';
import { pinValidation } from 'src/app/shared/Validations/PinValidation';

@Component({
  selector: 'app-edit-personal-details',
  templateUrl: './edit-personal-details.component.html',
  styleUrls: ['./edit-personal-details.component.css'],
  providers : [DatePipe]
})
export class EditPersonalDetailsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  PersonalDetails : FormGroup;
  loggedIn : Array<any> = [];
  jobSeeker : Array<IJobSeeker> = [];
  id : number;
  token : string;
  updatedJobSeeker : Array<IJobSeeker> = [];
  
  constructor(private fb : FormBuilder, private jobSeekerService : JobSeekerService, private dialog : MatDialog, public datepipe: DatePipe) { 
    this.PersonalDetails = this.fb.group({
      dob : ['', Validators.compose([Validators.required, dateValidation()])],
      gender : [''],
      address : ['', Validators.required],
      areapincode : ['', Validators.compose([Validators.required, pinValidation()])]
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
    this.PersonalDetails.get('dob').patchValue(this.formatDate(this.jobSeeker[0]['data'].jobSeekerDob));
    this.PersonalDetails.get('gender').patchValue(this.jobSeeker[0]['data'].jobSeekerGender);
    this.PersonalDetails.get('address').patchValue(this.jobSeeker[0]['data'].jobSeekerAddress);
    this.PersonalDetails.get('areapincode').patchValue(this.jobSeeker[0]['data'].jobSeekerAreaPinCode);
  }

  isValidInput(fieldName): boolean {
    return this.PersonalDetails.controls[fieldName].invalid &&
      (this.PersonalDetails.controls[fieldName].dirty || this.PersonalDetails.controls[fieldName].touched);
  }

  save(){
    this.updatedJobSeeker.push(this.jobSeeker[0]['data']);
    this.updatedJobSeeker.forEach(value => value.jobSeekerDob = this.PersonalDetails.get('dob').value);
    this.updatedJobSeeker.forEach(value => value.jobSeekerGender = this.PersonalDetails.get('gender').value);
    this.updatedJobSeeker.forEach(value => value.jobSeekerAddress = this.PersonalDetails.get('address').value);
    this.updatedJobSeeker.forEach(value => value.jobSeekerAreaPinCode = this.PersonalDetails.get('areapincode').value);
    console.log(this.updatedJobSeeker);
    this.jobSeekerService.updateJobSeeker(this.id, this.updatedJobSeeker[0], this.token).subscribe(data => console.log(data));
    this.dialog.closeAll();
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    return [year, month, day].join('-');
  }

}
