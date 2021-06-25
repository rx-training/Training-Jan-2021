import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-job-gallery',
  templateUrl: './job-gallery.component.html',
  styleUrls: ['./job-gallery.component.css']
})
export class JobGalleryComponent implements OnInit {

  places : any[];

  constructor(public service : JobSeekerService) {
    this.service.bestPlaces().subscribe(data => this.places = data);
   }

  ngOnInit(): void {
  }

}
