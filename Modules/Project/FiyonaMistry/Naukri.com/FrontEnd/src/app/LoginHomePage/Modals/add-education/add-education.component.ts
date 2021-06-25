import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  Education : FormGroup;
  loggedIn : Array<any> = [];
  jobSeekerEducation : Array<any> = [];
  id : number;
  token : string;
  updatedJobSeeker : Array<IJobSeeker> = [];
  
  constructor(private fb : FormBuilder, private jobSeekerService : JobSeekerService, private dialog : MatDialog) { 
    this.Education = this.fb.group({
      jobSeekerId : [''],
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
    this.loggedIn.filter(x => this.token = x.token);
    this.loggedIn.filter(x => this.id = x.id);
  }

  isValidInput(fieldName): boolean {
    return this.Education.controls[fieldName].invalid &&
      (this.Education.controls[fieldName].dirty || this.Education.controls[fieldName].touched);
  }

  save(){
    this.jobSeekerEducation = this.jobSeekerService.getparticularProfile[0]['data'].jobSeekerEducations;
    this.jobSeekerEducation.push(this.Education.getRawValue());
    let sliced = this.jobSeekerEducation.slice(this.jobSeekerEducation.length - 1);
    sliced[0].jobSeekerId = this.id;
    console.log(sliced[0]);
    this.jobSeekerService.addJobSeekerEducation(this.id, sliced[0], this.token).subscribe(data => console.log(data));
    this.dialog.closeAll();
  }

}
