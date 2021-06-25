import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/login/login.component';
import { IJob } from 'src/app/shared/Models/INaukri/IJob';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-particular-job-detail',
  templateUrl: './particular-job-detail.component.html',
  styleUrls: ['./particular-job-detail.component.css']
})
export class ParticularJobDetailComponent implements OnInit {

  applyBTN : boolean = false;
  sub : Subscription;
  job : Array<IJob> = [];
  id;
  loggedIn : Array<BehaviorSubject<boolean>> = [];

  constructor(private activatedRoute : ActivatedRoute, private jobSeekerService : JobSeekerService, private router : Router, private authService : AuthService, private dialog : MatDialog) {

    router.events.forEach((event) => {  
      if(event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
            if(this.router.url != '/searchJobResult'){
              if(localStorage.getItem('toggle') == 'false'){
                document.getElementById('jobSearch').style.display = 'none';
                document.getElementById('navbar').style.boxShadow = '1px 1px 5px lightgrey';
                document.getElementById('main').style.backgroundImage = 'none';
                for(var i=0; i<document.querySelectorAll('nav ul li a').length; i++){
                  document.querySelectorAll('nav ul li a')[i].setAttribute('style', 'color: black');
                }
              }
            } 
        }
      }
    }); }

  ngOnInit(): void { 
    if(this.authService.isLogged == null){
      console.log('not logged');
    }
    else{
      console.log('logged');
      this.loggedIn.push(this.authService.isLogged);
      this.applyBTN = true;
    }

    this.id = this.activatedRoute.snapshot.paramMap.get('jobId');

    this.sub = this.activatedRoute.parent.paramMap.subscribe(() =>{
      let products = this.jobSeekerService.getsearchJobResult;
      products.filter(value => value.data.find(x => (this.id == x.jobId) ? this.job.push(x) : null));
      console.log(this.job);
    });

    if(localStorage.getItem('toggle') == 'false'){
      document.getElementById('jobSearch').style.display = 'none';
      document.getElementById('navbar').style.boxShadow = '1px 1px 5px lightgrey';
      document.getElementById('main').style.backgroundImage = 'none';
      for(var i=0; i<document.querySelectorAll('nav ul li a').length; i++){
        document.querySelectorAll('nav ul li a')[i].setAttribute('style', 'color: black');
      }
    }
  }

  apply(){
    let compid;
    this.job.forEach(value => compid = value.companyId);
    let jsid = this.loggedIn[0]['id'];
    let token = this.loggedIn[0]['token'];
    console.log(this.loggedIn);
    this.jobSeekerService.applyForJob(jsid, compid, this.id, token).subscribe();
    alert('Applied for job');
  }

  loginToApply(){
    this.dialog.open(LoginComponent, {height: '70%', width: '500px'});
  }

  registerToApply(){
    this.router.navigate(['registerNow']);
  }

}
// , {height: '100%', width: '500px', closeOnNavigation: true, position: {top: '0%', right: '0%'}}