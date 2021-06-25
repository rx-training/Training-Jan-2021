import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  sub: Subscription;
  Education : FormGroup;  
  loggedIn : Array<any> = [];
  jobSeeker : Array<any> = [];
  jsid : number;
  token : string;
  updatedJobSeeker : Array<IJobSeeker> = [];
  updatedJobSeekerEducation : Array<any> = [];
  educationId : number;
  jobSeekerEducation : Array<any> = [];

  constructor(private fb : FormBuilder, private jobSeekerService : JobSeekerService, private dialog : MatDialog) { 
    this.Education = this.fb.group({
      jobSeekerField : ['', Validators.required],
      jobSeekerCollege : ['', Validators.required],
      jobSeekerYearOfCompletion : ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loggedIn.push(JSON.parse(sessionStorage.getItem('loggedIn')));
    this.jobSeeker = this.jobSeekerService.getparticularProfile;
    this.loggedIn.filter(x => this.token = x.token);
    this.loggedIn.filter(x => this.jsid = x.id);
    this.educationId = this.jobSeekerService.selectedEducation;
    this.jobSeeker.filter(value => value.data.jobSeekerEducations.find(x => (this.educationId == x.jobSeekerEducationId) ? this.jobSeekerEducation.push(x) : null));
    console.log(this.jobSeekerEducation);
    this.Education.get('jobSeekerField').patchValue(this.jobSeekerEducation[0].jobSeekerField);
    this.Education.get('jobSeekerCollege').patchValue(this.jobSeekerEducation[0].jobSeekerCollege);
    this.Education.get('jobSeekerYearOfCompletion').patchValue(this.jobSeekerEducation[0].jobSeekerYearofCompletion);
  }

  isValidInput(fieldName): boolean {
    return this.Education.controls[fieldName].invalid &&
      (this.Education.controls[fieldName].dirty || this.Education.controls[fieldName].touched);
  }

  save(){
    this.updatedJobSeeker.push(this.jobSeeker[0]['data']);
    this.updatedJobSeekerEducation = this.jobSeekerEducation;
    this.updatedJobSeekerEducation.forEach(value => value.jobSeekerField = this.Education.get('jobSeekerField').value);
    this.updatedJobSeekerEducation.forEach(value => value.jobSeekerCollege = this.Education.get('jobSeekerCollege').value);
    this.updatedJobSeekerEducation.forEach(value => value.jobSeekerYearOfCompletion = this.Education.get('jobSeekerYearOfCompletion').value);
    this.updatedJobSeeker.forEach(value => value.jobSeekerEducations.find(x => (x.JobSeekerEducationId == this.educationId) ? value.jobSeekerEducations = this.updatedJobSeekerEducation : value.jobSeekerEducations));
    console.log(this.updatedJobSeeker);
    this.jobSeekerService.updateJobSeeker(this.jsid, this.updatedJobSeeker[0], this.token).subscribe(data => console.log(data));
    this.dialog.closeAll();
  }
  
}
