import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobSeekerService } from 'src/app/shared/Services/job-seeker.service';

@Component({
  selector: 'app-best-places-to-work',
  templateUrl: './best-places-to-work.component.html',
  styleUrls: ['./best-places-to-work.component.css']
})
export class BestPlacesToWorkComponent implements OnInit {

  places : any[];

  constructor(public service : JobSeekerService) {
    this.service.bestPlaces().subscribe(data => this.places = data);
   }

  ngOnInit(): void {
  }

}
