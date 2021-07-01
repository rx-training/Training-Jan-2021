import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { IJob } from 'src/app/shared/Models/INaukri/IJob';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-search-job-results',
  templateUrl: './search-job-results.component.html',
  styleUrls: ['./search-job-results.component.css']
})
export class SearchJobResultsComponent implements OnInit {

  jobs$ : Array<IJob> = [];

  constructor(private service : JobSeekerService, private router : Router) { 
    this.jobs$ = this.service.getsearchJobResult;
    console.log(this.jobs$);
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
            if(this.router.url != '/searchJobResult'){
              if(localStorage.getItem('toggle') == 'false'){
                document.getElementById('navbar').style.boxShadow = '1px 1px 5px lightgrey';
                document.getElementById('main').style.backgroundImage = 'none';
                for(var i=0; i<document.querySelectorAll('nav ul li a').length; i++){
                  document.querySelectorAll('nav ul li a')[i].setAttribute('style', 'color: black');
                }
              }
            } 
        }
      }
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('toggle') == 'false'){
      document.getElementById('navbar').style.boxShadow = '1px 1px 5px lightgrey';
      document.getElementById('main').style.backgroundImage = 'none';
      for(var i=0; i<document.querySelectorAll('nav ul li a').length; i++){
        document.querySelectorAll('nav ul li a')[i].setAttribute('style', 'color: black');
      }
    }
  }

  detailsPage(){
    this.router.navigate(['/searchJobResult/jobDetails']);
  }

}
