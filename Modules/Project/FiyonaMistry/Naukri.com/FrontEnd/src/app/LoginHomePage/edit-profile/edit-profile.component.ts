import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IJobSeeker } from 'src/app/shared/Models/INaukri/IJobSeeker';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';
import { AddEducationComponent } from '../Modals/add-education/add-education.component';
import { EditBasicDetailsComponent } from '../Modals/edit-basic-details/edit-basic-details.component';
import { EditEducationComponent } from '../Modals/edit-education/edit-education.component';
import { EditKeySkillsComponent } from '../Modals/edit-key-skills/edit-key-skills.component';
import { EditPersonalDetailsComponent } from '../Modals/edit-personal-details/edit-personal-details.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  jobSeeker : Array<IJobSeeker> = [];

  constructor(private jobSeekerService : JobSeekerService, private router : Router, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.jobSeeker = this.jobSeekerService.getparticularProfile;
    console.log(this.jobSeeker);
    if(localStorage.getItem('toggle') == 'false'){
      document.getElementById('displayUpdateProfile').style.display = 'none';
      document.getElementById('navbar').style.boxShadow = '1px 1px 5px lightgrey';
      document.getElementById('main').style.backgroundImage = 'none';
      for(var i=0; i<document.querySelectorAll('nav ul li a').length; i++){
        document.querySelectorAll('nav ul li a')[i].setAttribute('style', 'color: black');
      }
    }
  }

  editBasicDetails(){
    const dialogRef = this.dialog.open(EditBasicDetailsComponent, {height : '430px', width : '600px'});
    this.router.events.subscribe(() => { 
      dialogRef.close();
    });
  }

  editKeySkills(){
    const dialogRef = this.dialog.open(EditKeySkillsComponent, {height : '300px', width : '600px'});
    this.router.events.subscribe(() => { 
      dialogRef.close();
    });
  }

  editEducation(id : number){
    const dialogRef = this.dialog.open(EditEducationComponent, {height : '500px', width : '600px'});
    this.jobSeekerService.selectedEducation = id;
  }

  editPersonalDetails(){
    const dialogRef = this.dialog.open(EditPersonalDetailsComponent, {height : '500px', width : '600px'});
    this.router.events.subscribe(() => { 
      dialogRef.close();
    });
  }

  addEducation(){
    const dialogRef = this.dialog.open(AddEducationComponent, {height : '600px', width : '700px'});
    this.router.events.subscribe(() => { 
      dialogRef.close();
    });
  }

}
