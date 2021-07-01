import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-edit-key-skills',
  templateUrl: './edit-key-skills.component.html',
  styleUrls: ['./edit-key-skills.component.css']
})
export class EditKeySkillsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  KeySkills : FormGroup;
  loggedIn : Array<any> = [];
  jobSeeker : Array<IJobSeeker> = [];
  id : number;
  token : string;
  updatedJobSeeker : Array<IJobSeeker> = [];
  
  constructor(private fb : FormBuilder, private jobSeekerService : JobSeekerService, private dialog : MatDialog) { 
    this.KeySkills = this.fb.group({
      skills : ['', Validators.required]
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
    this.KeySkills.get('skills').patchValue(this.jobSeeker[0]['data'].jobSeekerSkills);
  }

  isValidInput(fieldName): boolean {
    return this.KeySkills.controls[fieldName].invalid &&
      (this.KeySkills.controls[fieldName].dirty || this.KeySkills.controls[fieldName].touched);
  }

  save(){
    this.updatedJobSeeker.push(this.jobSeeker[0]['data']);
    this.updatedJobSeeker.forEach(value => value.jobSeekerSkills = this.KeySkills.get('skills').value);
    console.log(this.updatedJobSeeker);
    this.jobSeekerService.updateJobSeeker(this.id, this.updatedJobSeeker[0], this.token).subscribe(data => console.log(data));
    this.dialog.closeAll();
  }

}
