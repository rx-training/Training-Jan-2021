import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IJob } from 'src/app/shared/Models/INaukri/IJob';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent implements OnInit {

  jobs$ : IJob[] = [];
  job;
  private searchTerms = new Subject<string>();

  constructor(private service : JobSeekerService, private router : Router) { }

  ngOnInit(): void {
  }

  search(term : string){
    console.log(term);
    this.service.searchJobs(term).subscribe(data => this.job = data);
    console.log(this.job);
  }

  openFile(){
    console.log('hell')
    document.getElementById('upload').click()
  }

  handle(e){
    console.log('Change input file')
  }

  searchJobs(){
    this.jobs$.push(this.job);
    this.service.searchJobResult(this.jobs$);
    console.log(this.jobs$);
    this.router.navigate(['/searchJobResult']);
  }

}

