import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  jsid : number;
  token : string;
  jobSeeker : Array<IJobSeeker> = [];
  loggedIn : Array<any> = [];

  constructor(private jobSeekerService : JobSeekerService, private router : Router) { }

  ngOnInit(): void {
    this.loggedIn.push(JSON.parse(sessionStorage.getItem('loggedIn')));
    this.loggedIn.filter(x => this.jsid = x.id);
    this.loggedIn.filter(x => this.token = x.token);
    this.jobSeekerService.getJobSeeker(this.jsid, this.token).subscribe(data => this.jobSeeker.push(data));
    console.log(this.jobSeeker);
  }

  updateProfile(){
    this.router.navigate(['home/updateProfile']);
  }

}
